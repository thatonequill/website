import React, { useState, useEffect } from 'react';
import { FileUser, CircleX, CircleCheck } from 'lucide-react';

interface Props {
  searchTerm: string;
  onSearch: (phone: string) => void;
  isLoading: boolean;
  onClear: () => void; // Add onClear prop
}

/**
 * Composant de barre de recherche (version démo).
 */
export const SearchBar: React.FC<Props> = ({ searchTerm, onSearch, isLoading, onClear }) => {
  const [query, setQuery] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setQuery(searchTerm);
    }
  }, [searchTerm]);

  useEffect(() => {
    const length = query.length;
    setIsValid(length >= 10 && length <= 25);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid && !isLoading) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery("");
    onClear();
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className={`search-field-wrapper ${query.length > 25 ? 'error' : ''}`}>
          <FileUser className='icon-primary' size={35} aria-hidden="true" /> 
          <input
            type="text"
            className="input"
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Numéro de téléphone"
            placeholder="Entrez un numéro (ex: 0612345678)"
          />
          {query && ( // Show clear button only when query is not empty
            <button type="button" onClick={handleClear} className="clear-btn">
              <CircleX size={20} />
            </button>
          )}
        </div>

        <div className='container'>
          <div className="status-msg">
            {query.length > 0 && (query.length < 10 || query.length > 25) && (
              <span className="err"><CircleX className='icon-error' size={24} /> Le numéro doit être compris entre 10 et 25 caractères.</span>
            )}
            {isValid && (
              <span className="ok"><CircleCheck className='icon-success' size={24} /> Format de numéro valide.</span>
            )}
          </div>
          <button type="submit" className="submit-btn" disabled={!isValid || isLoading}>
            {isLoading ? '...' : 'Rechercher'}
          </button>
        </div>
      </form>
    </div>
  );
};