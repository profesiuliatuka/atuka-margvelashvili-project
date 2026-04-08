import type { NavLink, Player, Match, NewsArticle } from '../types';

export const navLinks: NavLink[] = [
  { label: 'მთავარი', path: '/' },
  { label: 'გუნდი', path: '/team' },
  { label: 'მატჩები', path: '/matches' },
  { label: 'სიახლეები', path: '/news' },
  { label: 'კონტაქტი', path: '/contact' }
];

export const players: Player[] = [
  {
    id: 1,
    firstName: 'როინ',
    lastName: 'კვასხვაძე',
    squadNumber: 1,
    position: 'Goalkeeper',
    nationality: 'Georgia',
    imageUrl: '/assets/players/kvaskhvadze.jpg',
    isCaptain: true
  },
  {
    id: 2,
    firstName: 'გიორგი',
    lastName: 'არაბიძე',
    squadNumber: 10,
    position: 'Midfielder',
    nationality: 'Georgia',
    imageUrl: '/assets/players/arabidze.jpg'
  },
  {
    id: 3,
    firstName: 'ცოტნე',
    lastName: 'ნადარაია',
    squadNumber: 4,
    position: 'Defender',
    nationality: 'Georgia',
    imageUrl: '/assets/players/nadaraia.jpg'
  },
  {
    id: 4,
    firstName: 'ბიორნ',
    lastName: 'იონსენი',
    squadNumber: 9,
    position: 'Forward',
    nationality: 'Norway',
    imageUrl: '/assets/players/johnsen.jpg'
  }
];

export const matches: Match[] = [
  {
    id: 1,
    opponent: 'დინამო თბილისი',
    opponentLogoUrl: '/assets/logos/dinamo-tbilisi.png',
    date: '2026-04-12T19:00:00Z',
    competition: 'ეროვნული ლიგა',
    isHomeMatch: true,
    status: 'Upcoming'
  },
  {
    id: 2,
    opponent: 'დინამო ბათუმი',
    opponentLogoUrl: '/assets/logos/dinamo-batumi.png',
    date: '2026-04-05T20:00:00Z',
    competition: 'ეროვნული ლიგა',
    isHomeMatch: false,
    homeScore: 1,
    awayScore: 2,
    status: 'Finished'
  }
];

export const news: NewsArticle[] = [
  {
    id: 1,
    title: 'ტორპედო ემზადება მნიშვნელოვანი მატჩისთვის',
    excerpt: 'გუნდი ბაზაზე აქტიურად განაგრძობს ვარჯიშს.',
    content: 'სრული ტექსტი მოგვიანებით დაემატება...',
    publishDate: '2026-04-08T11:00:00Z',
    imageUrl: '/assets/news/training.jpg',
    category: 'First Team'
  }
];