import React, { useEffect, useState, useCallback } from 'react';
import { ContactCard } from './ContactCard';
import { DemoContact, mockContacts } from './mockData';

interface Props {
  searchTerm: string;
  onLoading: (isLoading: boolean) => void;
}

/**
 * Composant qui simule une recherche API en filtrant une base de données locale.
 */
export const DemoApiManager: React.FC<Props> = ({ searchTerm, onLoading }) => {
  const [results, setResults] = useState<DemoContact[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const gridClass = results.length <= 1 ? 'api-result single-result' : 'api-result';

  /**
   * Simule une recherche dans la base de données mock.
   */
  const performSearch = useCallback((phone: string) => {
    onLoading(true);
    setHasSearched(true);

    // Simule une latence réseau
    setTimeout(() => {
      const cleanQuery = phone.replace(/[\s.-]/g, '');
      const foundContacts = mockContacts.filter(
        (contact) =>
          contact.telephoneMobile?.replace(/[\s.-]/g, '') === cleanQuery ||
          contact.telephoneFixe?.replace(/[\s.-]/g, '') === cleanQuery
      );

      setResults(foundContacts);
      onLoading(false);
    }, 800); // 800ms de délai
  }, [onLoading]);

  useEffect(() => {
    if (searchTerm) {
      performSearch(searchTerm);
    } else {
      setResults([]);
      setHasSearched(false);
    }
  }, [searchTerm, performSearch]);

  return (
    <div className={gridClass}>
      {results.map((item) => (
        <ContactCard key={item.conId} contact={item} />
      ))}

      {hasSearched && results.length === 0 && (
        <div style={{ textAlign: 'center', opacity: 0.8, marginTop: '40px' }}>
          <p className="err">Aucun résultat disponible pour le numéro.</p>
        </div>
      )}
    </div>
  );
};