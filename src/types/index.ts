export interface NavLink {
  label: string;
  path: string;
}

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  squadNumber: number;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  nationality: string;
  imageUrl: string;
  isCaptain?: boolean;
}

export interface Match {
  id: number;
  opponent: string;
  opponentLogoUrl: string;
  date: string; 
  competition: string;
  isHomeMatch: boolean;
  homeScore?: number;
  awayScore?: number;
  status: 'Upcoming' | 'Live' | 'Finished';
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  imageUrl: string;
  category: 'First Team' | 'Academy' | 'Transfers' | 'Club';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}