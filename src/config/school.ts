// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /**
   * Valeur technique du cycle. Doit correspondre aux cycles acceptés par le backend
   * (utils/schemas.js) : Maternelle / Primaire / Collège. N'est pas affichée telle quelle.
   */
  name: string
  /** Libellé affiché sur le site (ex. « Préscolaire » pour la valeur technique « Maternelle »). */
  label: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

// ----------------------------------------------------------------------------
//  CPL LA DIFFÉRENCE — Sangbana Adjassou, Mango (Oti 1, Région des Savanes)
//  Données vérifiées : nom, statut (privé laïc agréé par le MEPST), téléphones, quartier
//  et repère (près de l'EPP Sangbana), cycles et classes, CEPE et BEPC, pièces
//  d'inscription, modalités de paiement.
//  Données FICTIVES : slogan, e-mail, horaires, tarifs, textes de présentation, fondateur.
// ----------------------------------------------------------------------------
export const school: SchoolProfile = {
  id: 'cpl-la-difference-mango',
  logo: '/la-difference-logo.png',
  settings: {
    name: 'Complexe Scolaire Privé Laïque La Différence',
    shortName: 'CPL La Différence',
    slogan: 'FAIRE LA DIFFÉRENCE PAR LE TRAVAIL',
    address: 'Quartier Sangbana Adjassou, près de l’EPP Sangbana — Mango, Togo',
    email: 'contact@cpl-ladifference.tg',
    phone: '+228 91 98 55 03',
    phone2: '+228 98 68 22 48',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 60000,
    canteenFee: 300,
    badgeFee: 1000,
    uniformFee: 4000,
    apeFee: 2000,
  },
  footerText:
    'Établissement privé laïc agréé par l’État togolais, à Sangbana Adjassou (Mango) : de la maternelle au collège, une pédagogie exigeante et un encadrement rapproché pour faire la différence aux examens.',
  hero: {
    eyebrow: 'ENCADREMENT - RIGUEUR - RÉSULTATS',
    titleLines: ['Complexe Scolaire', 'Privé Laïque'],
    highlight: 'La Différence',
    intro:
      'Bienvenue au CPL La Différence, à Mango. Une pédagogie qui se distingue, un encadrement rapproché de chaque élève et une vraie rigueur de travail : notre ambition est de faire la différence, de la maternelle jusqu’au BEPC.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le fondateur du CPL La Différence',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Notre nom est', 'notre promesse.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'Nous avons appelé notre école « La Différence » parce que nous voulons offrir aux familles de Mango et de l’Oti un enseignement qui se distingue : des classes suivies de près, des enseignants exigeants et des résultats.',
      'Établissement laïc agréé par l’État, nous accueillons tous les enfants sans distinction. Chacun d’eux est encadré de près, encouragé à travailler avec rigueur et préparé à réussir le CEPE puis le BEPC.',
    ],
    signature: 'Le Fondateur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le Complexe Scolaire Privé Laïque La Différence est implanté dans le quartier Sangbana Adjassou, à Mango (Sansanné-Mango), deuxième ville de la région des Savanes, dans la préfecture de l’Oti (commune de l’Oti 1). Il se trouve près de l’École Primaire Publique Sangbana.',
      'Son nom résume son projet : une pédagogie distinctive, un encadrement rapproché de chaque élève et une rigueur de travail qui visent de meilleurs résultats scolaires dans la préfecture de l’Oti.',
      'Agréé par le Ministère des Enseignements Primaire, Secondaire et Technique, le complexe couvre l’ensemble du parcours scolaire général, de la maternelle au collège, et prépare ses élèves au CEPE puis au BEPC.',
    ],
    stats: [
      { value: '3', label: 'Cycles d’enseignement' },
      { value: '13', label: 'Niveaux, de la petite section à la 3e' },
      { value: '100%', label: 'Engagement pour la réussite' },
    ],
  },
  values: [
    {
      icon: 'idea',
      title: 'Pédagogie distinctive',
      text: 'Des méthodes actives et un suivi qui font progresser chaque élève.',
    },
    {
      icon: 'users',
      title: 'Encadrement rapproché',
      text: 'Chaque élève est connu, suivi et accompagné de près.',
    },
    {
      icon: 'shield',
      title: 'Rigueur de travail',
      text: 'Régularité, ponctualité et sérieux, en classe comme à la maison.',
    },
    {
      icon: 'graduation',
      title: 'Ambition des résultats',
      text: 'Viser les meilleurs résultats au CEPE et au BEPC dans l’Oti.',
    },
  ],
  faq: [
    {
      q: 'Où se trouve l’établissement ?',
      a: 'À Mango, dans le quartier Sangbana Adjassou, près de l’École Primaire Publique Sangbana. Appelez-nous ou écrivez-nous sur WhatsApp au +228 91 98 55 03, ou contactez le secrétariat au +228 98 68 22 48.',
    },
    {
      q: 'L’établissement est-il reconnu par l’État ?',
      a: 'Oui. C’est un établissement d’enseignement général privé laïc, agréé par le Ministère des Enseignements Primaire, Secondaire et Technique.',
    },
    {
      q: 'Quels cycles proposez-vous ?',
      a: 'La maternelle (petite, moyenne et grande section), le primaire (du CP1 au CM2) et le collège (de la 6e à la 3e).',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
    {
      q: 'Vos élèves passent-ils les examens officiels ?',
      a: 'Oui. Les élèves de CM2 sont préparés et présentés au CEPE, et les élèves de 3e bénéficient d’une préparation rigoureuse au BEPC.',
    },
    {
      q: 'Quelles sont les modalités de paiement ?',
      a: 'Des frais d’inscription sont réglés chaque année à l’inscription. La scolarité se paie ensuite par tranches, selon le calendrier communiqué par l’établissement.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      label: 'Maternelle',
      slug: 'maternelle',
      age: '3 à 6 ans',
      text: 'La maternelle (cycle préscolaire) est la première étape du parcours scolaire. Elle est consacrée à l’éveil et à l’initiation aux premiers apprentissages.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et motricité',
        'Développement du langage',
        'Initiation à la lecture et au calcul',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Chants et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Préparer l’entrée au CP1 en découvrant et en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      label: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux, du CP1 au CM2. Le cycle est sanctionné par le CEPE (Certificat d’Études du Premier Cycle), obligatoire pour le passage en classe de 6e.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Sciences, histoire-géographie et éducation civique',
        'Préparation au CEPE en classe de CM2',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et calcul au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'graduation',
          title: 'Objectif CEPE',
          text: 'Révisions, devoirs et examens blancs en CM2.',
        },
      ],
    },
    {
      name: 'Collège',
      label: 'Collège',
      slug: 'college',
      age: '11 à 16 ans',
      text: 'Le collège (secondaire 1er cycle) accueille les élèves de la 6e à la 3e. Il approfondit les connaissances et les méthodes de travail, et assure une préparation rigoureuse à l’examen officiel du BEPC (Brevet d’Études du Premier Cycle).',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Suivi régulier des résultats',
        'Préparation au BEPC et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Objectif BEPC',
          text: 'Un suivi renforcé et des examens blancs en classe de 3e.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'Français, anglais et ouverture culturelle.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et préparer l’entrée au lycée.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Un (1) acte de naissance',
      'Les bulletins des trimestres précédents (sauf entrée en petite section)',
      'Un certificat de transfert (pour un élève venant d’un autre établissement)',
      'Le relevé ou l’attestation de réussite au CEPE (pour une entrée en 6e)',
      'Deux (2) photos d’identité récentes',
      'Le reçu de paiement des frais d’inscription annuels',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)

/** Libellé affiché d'un cycle à partir de sa valeur technique (ex. « Maternelle » → « Préscolaire »). */
export const cycleLabel = (name: string): string =>
  school.cycles.find((c) => c.name === name)?.label ?? name
