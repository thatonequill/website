// --- CONFIGURATION ---
const BASE_URL = "https://qtqwill.dev/images/jdr/cards/MTA";

// --- DATA: MAJOR ARCANA ---
const majorArcanaData = [
  { name: "Fool", short: "Beginnings, innocence", shortFr: "Nouveaux départs, innocence", full: "The start of a new journey, stepping into the unknown with optimism.", fullFr: "Le début d'un nouveau voyage, s'avançant vers l'inconnu avec optimisme." },
  { name: "Magician", short: "Manifestation, power", shortFr: "Manifestation, pouvoir", full: "Utilization of skills and tools to achieve goals.", fullFr: "Utilisation des compétences et des outils pour atteindre ses objectifs." },
  { name: "HighPriestess", short: "Intuition, mystery", shortFr: "Intuition, mystère", full: "Trusting your inner voice and the subconscious mind.", fullFr: "Faire confiance à sa voix intérieure et à son subconscient." },
  { name: "Empress", short: "Fertility, nature", shortFr: "Fertilité, nature", full: "Abundance, nurturing, and the creation of life or art.", fullFr: "Abondance, bienveillance et création de la vie ou de l'art." },
  { name: "Emperor", short: "Authority, structure", shortFr: "Autorité, structure", full: "Control, stability, and establishing order.", fullFr: "Contrôle, stabilité et établissement de l'ordre." },
  { name: "Hierophant", short: "Tradition, beliefs", shortFr: "Tradition, croyances", full: "Spiritual wisdom, religious beliefs, and conformity.", fullFr: "Sagesse spirituelle, croyances religieuses et conformité." },
  { name: "Lovers", short: "Love, choices", shortFr: "Amour, choix", full: "Deep connections, harmony, and difficult decisions.", fullFr: "Connexions profondes, harmonie et décisions difficiles." },
  { name: "Chariot", short: "Willpower, victory", shortFr: "Volonté, victoire", full: "Overcoming obstacles through determination and focus.", fullFr: "Surmonter les obstacles grâce à la détermination et la concentration." },
  { name: "Strength", short: "Courage, compassion", shortFr: "Courage, compassion", full: "Inner strength and influence through patience.", fullFr: "Force intérieure et influence par la patience." },
  { name: "Hermit", short: "Introspection, solitude", shortFr: "Introspection, solitude", full: "Soul-searching and seeking inner guidance.", fullFr: "Recherche intérieure et quête de guidance personnelle." },
  { name: "WheelOfFortune", short: "Change, cycles", shortFr: "Changement, cycles", full: "The inevitable turning of fate and destiny.", fullFr: "Le tournant inévitable du destin et de la fatalité." },
  { name: "Justice", short: "Fairness, truth", shortFr: "Équité, vérité", full: "Cause and effect, clarity, and legal matters.", fullFr: "Cause et effet, clarté et affaires juridiques." },
  { name: "HangedMan", short: "Surrender, perspective", shortFr: "Lâcher-prise, perspective", full: "Letting go and seeing things from a new angle.", fullFr: "Lâcher prise et voir les choses sous un nouvel angle." },
  { name: "Death", short: "Endings, transition", shortFr: "Fins, transition", full: "The end of a phase clearing the way for something new.", fullFr: "La fin d'une phase laissant place à quelque chose de nouveau." },
  { name: "Temperance", short: "Balance, patience", shortFr: "Équilibre, patience", full: "Moderation and finding the middle path.", fullFr: "Modération et recherche de la voie du milieu." },
  { name: "Devil", short: "Addiction, materialism", shortFr: "Addiction, matérialisme", full: "Being trapped by desires or negative patterns.", fullFr: "Être piégé par ses désirs ou des schémas négatifs." },
  { name: "Tower", short: "Sudden change, upheaval", shortFr: "Changement soudain, bouleversement", full: "Destruction of false structures and chaotic revelation.", fullFr: "Destruction des fausses structures et révélation chaotique." },
  { name: "Star", short: "Hope, inspiration", shortFr: "Espoir, inspiration", full: "Renewal, faith, and a sense of healing.", fullFr: "Renouveau, foi et sentiment de guérison." },
  { name: "Moon", short: "Illusion, fear", shortFr: "Illusion, peur", full: "Uncertainty, deception, and the realm of dreams.", fullFr: "Incertitude, tromperie et le royaume des rêves." },
  { name: "Sun", short: "Joy, success", shortFr: "Joie, succès", full: "Positivity, vitality, and clarity.", fullFr: "Positivité, vitalité et clarté." },
  { name: "Judgement", short: "Rebirth, calling", shortFr: "Renaissance, appel", full: "Absolution and rising to a higher level of consciousness.", fullFr: "Absolution et élévation vers un niveau de conscience supérieur." },
  { name: "World", short: "Completion, accomplishment", shortFr: "Achèvement, accomplissement", full: "Wholeness and the successful conclusion of a journey.", fullFr: "Plénitude et conclusion réussie d'un voyage." },
];

// --- DATA: MINOR ARCANA DEFINITIONS ---
// To keep the file clean, we define meanings by Rank and Suit nuances.

const suitMeanings = {
  Wands: {
    theme: "Creativity & Will", themeFr: "Créativité & Volonté",
    keywords: ["Action", "Passion", "Fire"], keywordsFr: ["Action", "Passion", "Feu"]
  },
  Cups: {
    theme: "Emotions & Relationships", themeFr: "Émotions & Relations",
    keywords: ["Love", "Intuition", "Water"], keywordsFr: ["Amour", "Intuition", "Eau"]
  },
  Swords: {
    theme: "Intellect & Conflict", themeFr: "Intellect & Conflit",
    keywords: ["Thought", "Truth", "Air"], keywordsFr: ["Pensée", "Vérité", "Air"]
  },
  Pentacles: {
    theme: "Material & Career", themeFr: "Matériel & Carrière",
    keywords: ["Work", "Money", "Earth"], keywordsFr: ["Travail", "Argent", "Terre"]
  }
};

const rankMeanings = {
  1: {  en: "New potential and raw power.", fr: "Nouveau potentiel et puissance brute." },
  2: {  en: "Planning and future decisions.", fr: "Planification et décisions futures." },
  3: {  en: "Expansion and foresight.", fr: "Expansion et prévoyance." },
  4: {  en: "Stability and conservation.", fr: "Stabilité et conservation." },
  5: {  en: "Conflict, loss, or challenge.", fr: "Conflit, perte ou défi." },
  6: {  en: "Harmony, nostalgia, or charity.", fr: "Harmonie, nostalgie ou charité." },
  7: {  en: "Perseverance and assessment.", fr: "Persévérance et évaluation." },
  8: {  en: "Action, speed, or mastery.", fr: "Action, rapidité ou maîtrise." },
  9: {  en: "Independence and fulfillment.", fr: "Indépendance et accomplissement." },
  10: { en: "Completion and legacy.", fr: "Achèvement et héritage." },
  11: { en: "Exploration and curiosity (Page).", fr: "Exploration et curiosité (Valet)." }, // Page
  12: { en: "Action and pursuit (Knight).", fr: "Action et poursuite (Cavalier)." }, // Knight
  13: { en: "Nurturing and influence (Queen).", fr: "Bienveillance et influence (Reine)." }, // Queen
  14: { en: "Authority and control (King).", fr: "Autorité et contrôle (Roi)." }, // King
};

// --- HELPER FUNCTIONS ---

const getMinorName = (suit: string, rank: number) => {
  const ranksMap:Record<number, string> = { 1: "Ace", 11: "Page", 12: "Knight", 13: "Queen", 14: "King" };
  const rName = ranksMap[rank] || rank.toString();
  return `${rName} of ${suit}`;
};

const generateMinorDescription = (suit: keyof typeof suitMeanings, rank: number) => {
  const s = suitMeanings[suit];
  const r = rankMeanings[rank as keyof typeof rankMeanings];
  
  return {
    short: `${s.keywords[0]}, ${s.keywords[1]}`, 
    shortFr: `${s.keywordsFr[0]}, ${s.keywordsFr[1]}`,
    full: `${r.en} Context: ${s.theme}.`,
    fullFr: `${r.fr} Contexte: ${s.themeFr}.`
  };
};

// --- GENERATION ---

const majorCards = majorArcanaData.map((card, index) => ({
  name: card.name,
  imagePath: `${BASE_URL}/Arcana_${index}_${card.name}.avif`,
  shortDesc: card.short,
  shortDescFr: card.shortFr,
  fullDesc: card.full,
  fullDescFr: card.fullFr,
}));

const suits = ["Wands", "Cups", "Swords", "Pentacles"] as const;

const minorCards = suits.flatMap((suit) => {
  return Array.from({ length: 14 }, (_, i) => {
    const rank = i + 1;
    const desc = generateMinorDescription(suit, rank);
    
    return {
      name: getMinorName(suit, rank),
      imagePath: `${BASE_URL}/${suit}_${rank}.avif`,
      shortDesc: desc.short,
      shortDescFr: desc.shortFr,
      fullDesc: desc.full,
      fullDescFr: desc.fullFr,
    };
  });
});

// --- EXPORT ---
export const Cards = [...majorCards, ...minorCards];