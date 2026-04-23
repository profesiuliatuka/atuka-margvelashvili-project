import { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { news } from '../data';
import matchesData from '../data/matches.json';
import type { MatchData } from '../types';

export const Home = () => {
  const [nextMatch, setNextMatch] = useState<MatchData | null>(null);

  useEffect(() => {
    document.title = 'მთავარი | FC Torpedo Kutaisi';
    
    const upcomingMatch = (matchesData as MatchData[]).find(m => m.status === 'Upcoming');
    if (upcomingMatch) {
      setNextMatch(upcomingMatch);
    }
  }, []);

  return (
    <>
      <Hero
        title="Torpedo Kutaisi"
        slogan="ჩვენი ქალაქი, ჩვენი ისტორია, ჩვენი გუნდი"
        ctaText="ბილეთების შეძენა"
      />

      <Section title="უახლესი ამბები">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.excerpt}
              image={item.imageUrl}
            />
          ))}
        </div>
      </Section>

      {nextMatch && (
        <Section
          title="მომავალი მატჩი"
          className="bg-zinc-800/30 rounded-3xl my-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-transparent to-emerald-900/10 pointer-events-none" />
          <div className="flex flex-col items-center justify-center py-12 relative z-10">
            <p className="text-emerald-500/70 uppercase tracking-[0.3em] mb-8 font-bold">
              ეროვნული ლიგა - ტური {nextMatch.round}
            </p>
            <div className="flex items-center gap-8 md:gap-24">
              <div className="text-center w-32">
                <img
                  src={nextMatch.homeTeam.logo}
                  alt={nextMatch.homeTeam.name}
                  className="w-24 h-24 mx-auto mb-4 object-contain drop-shadow-2xl hover:scale-110 transition-transform"
                />
                <span className="text-white font-bold uppercase tracking-wider">
                  {nextMatch.homeTeam.name}
                </span>
              </div>
              <div className="text-4xl md:text-6xl font-black text-white italic opacity-30">VS</div>
              <div className="text-center w-32">
                <img
                  src={nextMatch.awayTeam.logo}
                  alt={nextMatch.awayTeam.name}
                  className="w-24 h-24 mx-auto mb-4 object-contain drop-shadow-2xl hover:scale-110 transition-transform"
                />
                <span className="text-white font-bold uppercase tracking-wider">
                  {nextMatch.awayTeam.name}
                </span>
              </div>
            </div>
            <div className="mt-10 bg-zinc-950/80 backdrop-blur-md px-8 py-3 rounded-full border border-zinc-800 shadow-[0_0_20px_rgba(16,185,129,0.1)] flex items-center gap-4">
              <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm">
                {new Date(nextMatch.date).toLocaleDateString('ka-GE', {
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
              <span className="text-white font-mono text-xl">
                {new Date(nextMatch.date).toLocaleTimeString('ka-GE', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        </Section>
      )}
    </>
  );
};