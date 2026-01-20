'use client'

import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
  children: React.ReactNode
  color?: 'purple' | 'emerald'
}

export function SubmitButton({ children, color = 'purple' }: SubmitButtonProps) {
  const { pending } = useFormStatus()

  // Dynamic styles based on color prop
  const colorClasses = color === 'purple' 
    ? 'bg-purple-600 hover:bg-purple-500 focus:ring-purple-500' 
    : 'bg-emerald-600 hover:bg-emerald-500 focus:ring-emerald-500'

  return (
    <button 
      type="submit" 
      disabled={pending}
      className={`
        w-full font-bold py-3 rounded transition-all flex items-center justify-center
        text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
        ${colorClasses}
        ${pending ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {pending ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  )
}