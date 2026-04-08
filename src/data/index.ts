import type { NavLink, Player, Match, NewsArticle } from '../types';
import trainingImg from '../assets/training.webp';

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
        imageUrl: 'https://images.unsplash.com/photo-1510832428570-89149558e8f0?q=80&w=800',
        isCaptain: true
    },
    {
        id: 2,
        firstName: 'გიორგი',
        lastName: 'არაბიძე',
        squadNumber: 10,
        position: 'Midfielder',
        nationality: 'Georgia',
        imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800'
    },
    {
        id: 3,
        firstName: 'ცოტნე',
        lastName: 'ნადარაია',
        squadNumber: 4,
        position: 'Defender',
        nationality: 'Georgia',
        imageUrl: 'https://images.unsplash.com/photo-1526232762683-2175bc9dd447?q=80&w=800'
    },
    {
        id: 4,
        firstName: 'ბიორნ',
        lastName: 'იონსენი',
        squadNumber: 9,
        position: 'Forward',
        nationality: 'Norway',
        imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800'
    }
];

export const matches: Match[] = [
    {
        id: 1,
        opponent: 'დინამო თბილისი',
        opponentLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/c/ca/FC_Dinamo_Tbilisi_logo.png',
        date: '2026-04-12T19:00:00Z',
        competition: 'ეროვნული ლიგა',
        isHomeMatch: true,
        status: 'Upcoming'
    },
    {
        id: 2,
        opponent: 'დინამო ბათუმი',
        opponentLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/0/07/FC_Dinamo_Batumi_logo.png',
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
        imageUrl: trainingImg,
        category: 'First Team'
    }
];