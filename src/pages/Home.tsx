import { useEffect, useMemo } from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { news } from '../data';
import matchesData from '../data/matches.json';
import type { MatchData } from '../types';

export const Home = () => {
  const nextMatch = useMemo(() => {
    return (matchesData as MatchData[]).find(m => m.status === 'Upcoming') || null;
  }, []);

  useEffect(() => {
    document.title = 'მთავარი | FC Torpedo Kutaisi';
  }, []);

  return (
    <>
      <Hero
        title="Torpedo Kutaisi"
        slogan="ჩვენი ქალაქი, ჩვენი ისტორია, ჩვენი გუნდი."
      />

      <Section
        title="უახლესი ამბები"
        actionLink="/news"
        actionText="ყველას ნახვა"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.slice(0, 3).map((item) => (
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
          actionLink="/matches"
          actionText="ყველა მატჩი"
          className="my-10 relative z-10"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] group-hover:bg-emerald-500/30 transition-colors duration-700 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-colors duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center py-16 px-4">

              {/* League Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-12 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ეროვნული ლიგა - ტური {nextMatch.round}
              </div>

              <div className="flex items-center justify-center gap-2 sm:gap-12 md:gap-24 w-full">

                {/* Home Team */}
                <div className="flex flex-col items-center w-20 sm:w-28 md:w-32 relative group/team cursor-pointer">
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl group-hover/team:bg-white/10 transition-colors duration-500" />
                  <img
                    src={nextMatch.homeTeam.logo}
                    alt={nextMatch.homeTeam.name}
                    loading="lazy"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover/team:scale-110 group-hover/team:-translate-y-2 transition-all duration-500 relative z-10"
                  />
                  <span className="font-team text-white font-black uppercase tracking-widest text-sm md:text-base text-center relative z-10">
                    {nextMatch.homeTeam.name}
                  </span>
                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1 relative z-10">სახლი</span>
                </div>

                {/* VS Badge */}
                <div className="flex flex-col items-center justify-center shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)] relative z-20">
                    <span className="text-emerald-400 font-black italic text-xl md:text-2xl tracking-tighter drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">VS</span>
                  </div>
                </div>

                {/* Away Team */}
                <div className="flex flex-col items-center w-20 sm:w-28 md:w-32 relative group/team cursor-pointer">
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl group-hover/team:bg-white/10 transition-colors duration-500" />
                  <img
                    src={nextMatch.awayTeam.logo}
                    alt={nextMatch.awayTeam.name}
                    loading="lazy"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover/team:scale-110 group-hover/team:-translate-y-2 transition-all duration-500 relative z-10"
                  />
                  <span className="font-team text-white font-black uppercase tracking-widest text-sm md:text-base text-center relative z-10">
                    {nextMatch.awayTeam.name}
                  </span>
                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1 relative z-10">სტუმარი</span>
                </div>
              </div>

              {/* Date & Location Pill */}
              <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4 bg-zinc-900/50 backdrop-blur-md px-6 md:px-10 py-4 rounded-3xl border border-white/5 shadow-xl w-fit">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📅</span>
                  <span className="text-white font-bold uppercase tracking-widest text-xs md:text-sm">
                    {new Date(nextMatch.date).toLocaleDateString('ka-GE', { month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <div className="hidden md:block w-px h-6 bg-zinc-800" />
                <div className="flex items-center gap-3">
                  <span className="text-xl">🕐</span>
                  <span className="text-white font-mono font-bold text-lg">
                    {new Date(nextMatch.date).toLocaleTimeString('ka-GE', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="hidden md:block w-px h-6 bg-zinc-800" />
                <div className="flex items-center gap-3 w-full justify-center md:w-auto">
                  <span className="text-xl">📍</span>
                  <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] md:text-sm truncate">
                    {nextMatch.stadium !== 'სტადიონი უცნობია' ? nextMatch.stadium : 'დაზუსტდება'}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </Section>
      )}
    </>
  );
};