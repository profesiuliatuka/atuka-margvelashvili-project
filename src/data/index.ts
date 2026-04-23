import type { NavLink, NewsArticle } from '../types';
import trainingImg from '../assets/training.webp';

export const navLinks: NavLink[] = [
    { label: 'მთავარი', path: '/' },
    { label: 'გუნდი', path: '/team' },
    { label: 'მატჩები', path: '/matches' },
    { label: 'სიახლეები', path: '/news' },
    { label: 'კონტაქტი', path: '/contact' }
];

// export const matches: Match[] = [
//     {
//         id: 1,
//         opponent: 'დინამო თბილისი',
//         opponentLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/c/ca/FC_Dinamo_Tbilisi_logo.png',
//         date: '2026-04-12T19:00:00Z',
//         competition: 'ეროვნული ლიგა',
//         isHomeMatch: true,
//         status: 'Upcoming'
//     },
//     {
//         id: 2,
//         opponent: 'დინამო ბათუმი',
//         opponentLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/0/07/FC_Dinamo_Batumi_logo.png',
//         date: '2026-04-05T20:00:00Z',
//         competition: 'ეროვნული ლიგა',
//         isHomeMatch: false,
//         homeScore: 1,
//         awayScore: 2,
//         status: 'Finished'
//     }
// ];

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