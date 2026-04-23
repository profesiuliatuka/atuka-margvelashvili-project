import { useEffect, useState } from 'react';
import { Section } from '../components/Section';
import matchesData from '../data/matches.json';
import type { MatchData } from '../types';

type MatchFilter = 'All' | 'Finished' | 'Upcoming';

export const Matches = () => {
  const [fixtures, setFixtures] = useState<MatchData[]>([]);
  const [filter, setFilter] = useState<MatchFilter>('All');

  useEffect(() => {
    document.title = 'კალენდარი და შედეგები | FC Torpedo Kutaisi';
    
    let filteredData = matchesData as MatchData[];
    
    if (filter === 'Finished') {
      filteredData = filteredData.filter(m => m.status === 'Finished');
    } else if (filter === 'Upcoming') {
      filteredData = filteredData.filter(m => m.status === 'Upcoming');
    }
    
    filteredData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    setFixtures(filteredData);
  }, [filter]);

  const getResultBadge = (item: MatchData) => {
    if (item.status === 'Upcoming') return null;
    
    const isTorpedoHome = item.homeTeam.name === 'ტორპედო';
    const torpedoGoals = isTorpedoHome ? item.homeScore! : item.awayScore!;
    const oppGoals = isTorpedoHome ? item.awayScore! : item.homeScore!;
    
    if (torpedoGoals > oppGoals) return { label: 'გ', color: 'bg-emerald-600 text-white', full: 'გამარჯვება' };
    if (torpedoGoals < oppGoals) return { label: 'წ', color: 'bg-red-600 text-white', full: 'წაგება' };
    return { label: 'ფ', color: 'bg-zinc-600 text-white', full: 'ფრე' };
  };

  const getScoreColor = (item: MatchData) => {
    if (item.status === 'Upcoming') return 'text-zinc-500';
    const isTorpedoHome = item.homeTeam.name === 'ტორპედო';
    const torpedoGoals = isTorpedoHome ? item.homeScore! : item.awayScore!;
    const oppGoals = isTorpedoHome ? item.awayScore! : item.homeScore!;
    if (torpedoGoals > oppGoals) return 'text-emerald-400';
    if (torpedoGoals < oppGoals) return 'text-red-400';
    return 'text-zinc-300';
  };

  return (
    <div className="pt-10">
      <Section title="სეზონის კალენდარი">
        
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setFilter('All')}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              filter === 'All' 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' 
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
            }`}
          >
            ყველა თამაში
          </button>
          <button
            onClick={() => setFilter('Finished')}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              filter === 'Finished' 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' 
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
            }`}
          >
            შედეგები
          </button>
          <button
            onClick={() => setFilter('Upcoming')}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              filter === 'Upcoming' 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' 
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
            }`}
          >
            კალენდარი
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {fixtures.map((item) => {
            const isFinished = item.status === 'Finished';
            const result = isFinished ? getResultBadge(item) : null;
            const scoreColor = getScoreColor(item);

            return (
              <div
                key={item.id}
                className="bg-zinc-950 border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-emerald-500/40 transition-all duration-300 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 pt-8 pb-6 border-b border-zinc-800/60">
                  <div className="flex flex-col gap-1.5 min-w-[180px]">
                    <span className="text-emerald-400 font-mono text-sm font-bold tracking-wider">
                      {new Date(item.date).toLocaleDateString('ka-GE', {
                        year: 'numeric', month: 'long', day: 'numeric'
                      })}
                    </span>
                    <span className="text-zinc-500 text-xs font-bold tracking-wider">
                      🕐 {new Date(item.date).toLocaleTimeString('ka-GE', {
                        hour: '2-digit', minute: '2-digit'
                      })}
                    </span>
                    <span className="text-zinc-600 text-xs mt-0.5 truncate max-w-[180px]">
                      📍 {item.stadium !== 'სტადიონი უცნობია' ? item.stadium : 'დაზუსტდება'}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 md:gap-10 flex-1 justify-center">
                    <div className="flex flex-col items-center gap-3 w-28">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/5 rounded-full blur-lg" />
                        <img src={item.homeTeam.logo} alt={item.homeTeam.name} className="relative w-16 h-16 object-contain drop-shadow-2xl" />
                      </div>
                      <span className="font-black uppercase text-xs text-center leading-tight text-white">{item.homeTeam.name}</span>
                      <span className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">სახლი</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className={`text-5xl md:text-6xl font-black italic tracking-tighter ${scoreColor}`}>
                        {isFinished ? `${item.homeScore} : ${item.awayScore}` : 'VS'}
                      </div>
                      {isFinished && result && (
                        <span className={`text-xs font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full ${result.color}`}>
                          {result.full}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col items-center gap-3 w-28">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/5 rounded-full blur-lg" />
                        <img src={item.awayTeam.logo} alt={item.awayTeam.name} className="relative w-16 h-16 object-contain drop-shadow-2xl" />
                      </div>
                      <span className="font-black uppercase text-xs text-center leading-tight text-white">{item.awayTeam.name}</span>
                      <span className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">სტუმარი</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 min-w-[160px]">
                    <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest text-right">ეროვნული ლიგა</p>
                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-wider text-right">ტური {item.round}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
};