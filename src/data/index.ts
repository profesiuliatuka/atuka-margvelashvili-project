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
    },
    {
        id: 2,
        title: 'გაგრამ დინამო თბილისს კვლავ მოუგო; იმერულ დერბიში ტორპედომ გაიმარჯვა',
        excerpt: 'ეროვნული ლიგის მორიგი ტურის საინტერესო მოვლენები.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2026-04-22T00:16:05Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2026-04/%E1%83%9D%E1%83%9D.jpg?itok=VH-NOh5d',
        category: 'First Team'
    },
    {
        id: 3,
        title: 'ისევ დაძაბულობა! დილამ წყალტუბოში მოიგო, ორი მატჩი ფრედ დასრულდა',
        excerpt: 'მიმოხილვა მიმდინარე ტურის შეხვედრებზე.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2026-04-18T01:00:27Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2026-04/pppppppppp_0.jpg?itok=qArnlqFe',
        category: 'Club'
    },
    {
        id: 4,
        title: 'თანაბარი ლიგა... მეექვსე ტურის ამბები',
        excerpt: 'ეროვნული ლიგის მეექვსე ტურის შეჯამება.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2026-04-08T00:20:39Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2026-04/888888.jpg?itok=F8CtDZl_',
        category: 'Club'
    },
    {
        id: 5,
        title: 'ლამაზი თავურები... მეხუთე ტურის ხუთივე მატჩზე',
        excerpt: 'მეხუთე ტურში დაფიქსირებული საუკეთესო გოლები.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2026-04-04T03:05:22Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2026-04/6666666666666.jpg?itok=kI8qSzl-',
        category: 'First Team'
    },
    {
        id: 6,
        title: 'სპაერის გოლები და ქულები; დილას მოგება ტორპედოსთან',
        excerpt: 'საინტერესო მომენტები და ფრე წყალტუბოში.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2026-03-16T22:56:29Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2026-03/kjjjjj.jpg?itok=635pagcx',
        category: 'First Team'
    },
    {
        id: 7,
        title: 'ბოლო წამები... მესამე ტურის სამი მატჩის ამბავი',
        excerpt: 'დაძაბული დასასრული მესამე ტურის შეხვედრებში.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2026-03-11T23:10:24Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2026-03/650822791_1371891758299639_1533650607808198676_n.jpg?itok=D2FFta8y',
        category: 'First Team'
    },
    {
        id: 8,
        title: 'პენალტების დღე... რუსთავმა და დინამო თბილისმა მოიგეს',
        excerpt: 'დინამო ბათუმი და გაგრა ფრედ დასრულდა.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2026-03-08T01:42:56Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2026-03/k.jpg?itok=6iCIieCP',
        category: 'Club'
    },
    {
        id: 9,
        title: 'გახსნის მატჩი - დებიუტანტმა სპაერმა ტორპედო დაამარცხა',
        excerpt: 'სეზონის პირველი შეხვედრა ქუთაისში.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2026-03-01T01:08:30Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2026-03/645419526_1595534135909057_4083159495985294222_n.jpg?itok=rFX9N-0J',
        category: 'First Team'
    },
    {
        id: 10,
        title: '2026 წლის სეზონი | ზამთრის ტრანსფერები კრისტალბეთ ეროვნულ ლიგაში',
        excerpt: 'მიმდინარე სატრანსფერო სიახლეები.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2026-01-27T11:39:13Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2026-01/Eliga.png?itok=7TRCRO3s',
        category: 'Transfers'
    },
    {
        id: 11,
        title: 'იმერული დერბი ტორპედომ მოიგო',
        excerpt: 'დაძაბული შეხვედრა იმერეთის გუნდებს შორის.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2025-11-22T22:29:17Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2025-11/uuuuuu.jpg?itok=38l9chht',
        category: 'First Team'
    },
    {
        id: 12,
        title: 'იბერია 1999-მა, დილამ და ტორპედომ მოიგეს; იონსენმა ოთხჯერ გაიტანა',
        excerpt: 'მნიშვნელოვანი მოგებები ეროვნულ ლიგაში.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2025-11-09T00:32:10Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2025-11/fffffff.jpg?itok=GfYSNPyP',
        category: 'First Team'
    },
    {
        id: 13,
        title: 'დილამ ტორპედოს ანდრონიკაშვილის გოლით მოუგო',
        excerpt: 'მძიმე ბრძოლა გორში.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2025-11-03T23:13:14Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2025-11/j.jpg?itok=I81NbXGr',
        category: 'First Team'
    },
    {
        id: 14,
        title: 'ლიდერი შეიცვალა... გარეჯმა, ტორპედომ და იბერია 1999-მა მოიგეს',
        excerpt: 'ცვლილებები სატურნირო ცხრილში.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2025-10-18T00:27:49Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2025-10/nnn.jpg?itok=Sa9AsLye',
        category: 'Club'
    },
    {
        id: 15,
        title: '87-ე წუთი... ტორპედომ ფოთში მოიგო, გაგრამ გარეჯთან ქულა გადაარჩინა',
        excerpt: 'მნიშვნელოვანი ქულები სეზონის ბოლოსკენ.',
        content: 'სრული ტექსტი მოგვიანებით დაემატება...',
        publishDate: '2025-09-21T01:30:16Z',
        imageUrl: 'https://www.erovnuliliga.ge/sites/default/files/styles/article_md/public/2025-09/%E1%83%99%E1%83%99%E1%83%99.jpg?itok=RSy1eipu',
        category: 'First Team'
    }
];