import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export const revalidate = 3600;

export default async function PatchNotesPage({
  searchParams,
}: {
  searchParams: { v?: string };
}) {
  const publicDir = path.join(process.cwd(), 'public/patchnotes');
  const previousDir = path.join(publicDir, 'previous');
  
  if (!fs.existsSync(publicDir)) {
    return <div className="p-10">No patchnotes folder found.</div>;
  }

  // 1. Get files from the main folder
  let allFiles = fs.readdirSync(publicDir)
    .filter(file => file.endsWith('.md'));

  // 2. Get files from the 'previous' subfolder (if it exists)
  if (fs.existsSync(previousDir)) {
    const prevFiles = fs.readdirSync(previousDir)
      .filter(file => file.endsWith('.md'));
    allFiles = [...allFiles, ...prevFiles];
  }

  // Sort by date string (20260501.md) descending
  allFiles.sort().reverse();

  if (allFiles.length === 0) {
    return <div className="p-10">No patch notes available yet.</div>;
  }

  const selectedVersion = searchParams.v;
  const currentFile = selectedVersion && allFiles.includes(`${selectedVersion}.md`)
    ? `${selectedVersion}.md`
    : allFiles[0];

  // 3. Determine the actual path (is it in root or previous?)
  let fullPath = path.join(publicDir, currentFile);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(previousDir, currentFile);
  }

  const content = fs.readFileSync(fullPath, 'utf8');

  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <header className="mb-8 border-b pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-sm font-mono text-gray-400 uppercase tracking-widest">
            {currentFile === allFiles[0] ? 'Latest Release' : 'Archive View'}
          </h1>
          <p className="text-3xl font-black text-slate-900 tracking-tight">
            {currentFile.replace('.md', '')}
          </p>
        </div>
        {selectedVersion && (
          <Link href="/patchnotes" className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-700 transition-all">
            Back to Latest
          </Link>
        )}
      </header>
      
      <article className="prose prose-slate lg:prose-xl max-w-none">
        <ReactMarkdown 
          components={{
            // This styles your # and ## automatically
            h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6 text-slate-900 website-font" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-10 mb-4 text-slate-800 border-l-4 border-primary pl-4 website-font" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-lg font-bold mt-6 mb-2 text-slate-700 pl-6" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc ml-16 space-y-2" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className="italic border-l-4 border-muted pl-2 my-4 text-slate-600" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      {/* Archive Grid */}
      <footer className="pt-12 border-t border-slate-100">
        <h4 className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-[0.2em]">Full History</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
           {allFiles.map(f => {
             const dateVal = f.replace('.md', '');
             const isActive = currentFile === f;
             
             return (
               <Link 
                 key={f} 
                 href={`/patchnotes?v=${dateVal}`}
                 className={`px-3 py-2 rounded text-sm transition-colors ${
                   isActive 
                   ? 'bg-primary text-muted font-bold border border-blue-200' 
                   : 'bg-muted text-primary hover:bg-slate-100 border border-slate-200'
                 }`}
               >
                 {dateVal}
               </Link>
             );
           })}
        </div>
      </footer>
    </main>
  );
}