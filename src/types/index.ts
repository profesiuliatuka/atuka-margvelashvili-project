export interface NavLink {
  label: string;
  path: string;
}

export interface Player {
  id: number;
  number: number;
  name: string;
  position: 'მეკარე' | 'მცველი' | 'ნახევარმცველი' | 'თავდამსხმელი';
  country: string;
  image: string;
}

export interface TeamInfo {
  name: string;
  shortName: string;
  logo: string;
}

export interface MatchEvent {
  type: string;
  time: string;
  player: string;
  detail: string;
}

export interface MatchData {
  id: number;
  round: number;
  date: string;
  homeTeam: TeamInfo;
  awayTeam: TeamInfo;
  stadium: string;
  status: 'Upcoming' | 'Finished';
  homeScore: number | null;
  awayScore: number | null;
  events: MatchEvent[];
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