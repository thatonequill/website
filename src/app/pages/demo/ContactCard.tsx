import React from 'react';
import { DemoContact } from './mockData';
import { HorizontalLine } from './line';

interface ContactCardProps {
    contact: DemoContact;
}

/**
 * Composant d'affichage d'une carte de contact (version démo).
 */
export const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
    return (
        <div className="contact-card">
            {contact.principal ? (
                <>
                    <div className="card-top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="star-container">
                            <span title="Contact principal" style={{ cursor: 'help', fontSize: '1.2rem' }}>⭐</span>
                        </div>
                        <a href="#" className="contact-link" onClick={(e) => e.preventDefault()}>Fiche Contact</a>
                    </div>
                    <div className="card-header" style={{ marginTop: '4px' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{contact.prenom} {contact.nom}</h2>
                    </div>
                </>
            ) : (
                <div className="card-header-inline" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px', marginTop: '4px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{contact.prenom} {contact.nom}</h2>
                    <a href="#" className="contact-link" onClick={(e) => e.preventDefault()}>Fiche Contact</a>
                </div>
            )}

            <div className="company-info" style={{ fontSize: '0.95rem', margin: '4px 0' }}>
                🏢 <strong>{contact.nomCommercial}</strong> {contact.commune ? `(${contact.commune})` : ''} - <a href="#" className="contact-link" onClick={(e) => e.preventDefault()}>Fiche Établissement</a>
            </div>

            <div className="role-info" style={{ color: '#666', fontSize: '0.9rem' }}>
                <span>{contact.fonction || "Contact"}</span>
                {contact.libelleLiaison && <span> — {contact.libelleLiaison}</span>}
            </div>

            <div className="status-badges-bar" style={{ display: 'flex', gap: '10px', margin: '12px 0' }}>
                <span title={contact.actif ? "Dossier Actif" : "Dossier Inactif"} style={{ cursor: 'help' }}>
                    {contact.actif ? "🟢" : "🔴"}
                </span>
                {contact.confidentiel && (
                    <span title="Informations confidentielles" style={{ cursor: 'help' }}>🔒</span>
                )}
                {contact.excluMailing && (
                    <span title="Ne pas contacter par e-mail" style={{ cursor: 'help' }}>🚫</span>
                )}
                {contact.referentHandicap && (
                    <span title="Référent Handicap" style={{ cursor: 'help' }}>♿</span>
                )}
            </div>

            <HorizontalLine thickness="2px" margin="16px 0" />

            <div className="card-body">
                <div className="contact-row">
                    <span className="contact-label">Portable : </span>
                    <span className="contact-value">{contact.telephoneMobile || "---"}</span>
                </div>
                <div className="contact-row">
                    <span className="contact-label">Fixe : </span>
                    <span className="contact-value">{contact.telephoneFixe || "---"}</span>
                </div>
                <div className="contact-row">
                    <span className="contact-label">E-mail : </span>
                    <span className="contact-value">{contact.email || "N/A"}</span>
                </div>
            </div>
        </div>
    );
};