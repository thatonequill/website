/**
 * Modèle de données représentant un contact.
 * C'est une copie de l'interface ContactLiaison pour que la démo soit autonome.
 */
export interface DemoContact {
  // Identifiers
  conId: number;
  etaId: number;

  // Identity
  nom: string;
  prenom: string;

  // Contact info
  email?: string;
  telephoneFixe?: string;
  telephoneMobile?: string;

  // Business context
  fonction?: string;
  libelleLiaison: string;
  nomCommercial: string;
  commune?: string;

  // Flags
  actif: boolean;
  principal: boolean;
  confidentiel: boolean;
  excluMailing: boolean;
  referentHandicap: boolean;
}

/**
 * Base de données de contacts pour la démo.
 */
export const mockContacts: DemoContact[] = [
  {
    conId: 101,
    etaId: 201,
    nom: "Dupont",
    prenom: "Marie",
    email: "marie.dupont@example.com",
    telephoneMobile: "0612345678",
    telephoneFixe: "0198765432",
    fonction: "Développeuse Frontend",
    libelleLiaison: "Contact Technique",
    nomCommercial: "Tech Solutions Inc.",
    commune: "Paris",
    actif: true,
    principal: true,
    confidentiel: false,
    excluMailing: false,
    referentHandicap: false,
  },
  {
    conId: 102,
    etaId: 202,
    nom: "Martin",
    prenom: "Jean",
    email: "jean.martin@example.com",
    telephoneMobile: "0687654321",
    fonction: "Chef de Projet",
    libelleLiaison: "Contact Principal",
    nomCommercial: "Innovate Corp.",
    commune: "Lyon",
    actif: true,
    principal: false,
    confidentiel: true,
    excluMailing: true,
    referentHandicap: false,
  },
];