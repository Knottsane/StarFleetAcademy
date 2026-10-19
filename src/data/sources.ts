export interface Source {
  id: string;
  cite: string;
  url: string;
  note: string;
}

export const SOURCES: Record<string, Source> = {
  ilo2025: {
    id: 'ilo2025',
    cite: 'Berg, J., Gmyrek, P., Licata, M., Gwenyaya, T., & Sánchez Freytes Scaiano, M. (2025, February 27). Generative AI and the media and culture industry. International Labour Organization.',
    url: 'https://www.ilo.org/publications/generative-ai-and-media-and-culture-industry',
    note: 'ILO report on generative AI and the media and culture industry.',
  },
  iloJobs2025: {
    id: 'iloJobs2025',
    cite: 'Gmyrek, P., Berg, J., Kamiński, K., Konopczyński, F., Ładna, A., Nafradi, B., Rosłaniec, K., & Troszyński, M. (2025, May 20). Generative AI and jobs: A 2025 update. International Labour Organization.',
    url: 'https://www.ilo.org/publications/generative-ai-and-jobs-2025-update',
    note: 'ILO 2025 update on generative AI and jobs.',
  },
  iloPH: {
    id: 'iloPH',
    cite: 'Huynh, P. (2026, February 5). Generative AI and jobs in the Philippines: Labour market exposure and policy implications. International Labour Organization.',
    url: 'https://www.ilo.org/publications/generative-ai-jobs-philippines-labour-market-exposure-and-policy',
    note: 'ILO report on AI labour market exposure in the Philippines.',
  },
  uscoPart2: {
    id: 'uscoPart2',
    cite: 'U.S. Copyright Office. (2025, January 29). Copyright Office releases Part 2 of Artificial Intelligence Report.',
    url: 'https://copyright.gov/newsnet/2025/1060.html',
    note: 'U.S. Copyright Office AI Report, Part 2 announcement.',
  },
  uscoAI: {
    id: 'uscoAI',
    cite: 'U.S. Copyright Office. Copyright and artificial intelligence.',
    url: 'https://copyright.gov/AI/',
    note: 'U.S. Copyright Office AI resource page.',
  },
  ipophl: {
    id: 'ipophl',
    cite: "Intellectual Property Office of the Philippines. IPOPHL's new draft guidelines put human creativity at the center of copyright registration for AI-related works.",
    url: 'https://www.ipophil.gov.ph/news/ipophls-new-draft-guidelines-put-human-creativity-at-the-center-of-copyright-registration-for-ai-related-works/',
    note: 'IPOPHL draft guidelines on AI-related copyright works.',
  },
  unescoAI: {
    id: 'unescoAI',
    cite: 'UNESCO. AI and culture.',
    url: 'https://www.unesco.org/en/articles/ai-and-culture',
    note: 'UNESCO topic page on AI and culture.',
  },
  unescoArtists: {
    id: 'unescoArtists',
    cite: 'UNESCO. Can artists still make a living from their art?',
    url: 'https://www.unesco.org/en/articles/can-artists-still-make-living-their-art',
    note: 'UNESCO article on artists’ livelihoods.',
  },
  wipo: {
    id: 'wipo',
    cite: 'World Intellectual Property Organization. WIPO and artificial intelligence.',
    url: 'https://www.wipo.int/en/web/wipo-and-ai',
    note: 'WIPO resource page on AI.',
  },
  lse: {
    id: 'lse',
    cite: 'London School of Economics and Political Science, LSE Growth Lab. Understanding the impact of AI in the creative industries.',
    url: 'https://www.lse.ac.uk/school-of-public-policy/research/lse-growth-lab/understanding-the-impact-of-ai-in-the-creative-industries',
    note: 'LSE Growth Lab research on AI in creative industries.',
  },
};

export const SOURCE_LIST = Object.values(SOURCES);
