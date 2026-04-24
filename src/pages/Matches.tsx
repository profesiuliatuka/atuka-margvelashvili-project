import { useEffect, useState, useMemo, useCallback } from 'react';
import { Section } from '../components/Section';
import matchesData from '../data/matches.json';
import type { MatchData } from '../types';

type MatchFilter = 'All' | 'Finished' | 'Upcoming';
type SortOrder = 'asc' | 'desc';

export const Matches = () => {
  const [filter, setFilter] = useState<MatchFilter>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    document.title = 'კალენდარი და შედეგები | FC Torpedo Kutaisi';
  }, []);

  const fixtures = useMemo(() => {
    let filteredData = [...(matchesData as MatchData[])];

    if (filter === 'Finished') {
      filteredData = filteredData.filter(m => m.status === 'Finished');
    } else if (filter === 'Upcoming') {
      filteredData = filteredData.filter(m => m.status === 'Upcoming');
    }

    if (sortOrder === 'asc') {
      filteredData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else {
      filteredData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return filteredData;
  }, [filter, sortOrder]);

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

  const toggleSortOrder = useCallback(() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc'), []);

  return (
    <div className="pt-10">
      <Section title="სეზონის კალენდარი">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 p-1.5 bg-zinc-900/80 border border-zinc-800 rounded-2xl w-full sm:w-fit backdrop-blur-md shadow-xl">
            <button
              onClick={() => setFilter('All')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === 'All'
                ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-100'
                : 'text-zinc-400 hover:text-white hover:bg-white/5 scale-95 hover:scale-100'
                }`}
            >
              ყველა თამაში
            </button>
            <button
              onClick={() => setFilter('Finished')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === 'Finished'
                ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-100'
                : 'text-zinc-400 hover:text-white hover:bg-white/5 scale-95 hover:scale-100'
                }`}
            >
              შედეგები
            </button>
            <button
              onClick={() => setFilter('Upcoming')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === 'Upcoming'
                ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-100'
                : 'text-zinc-400 hover:text-white hover:bg-white/5 scale-95 hover:scale-100'
                }`}
            >
              კალენდარი
            </button>
          </div>

          <button
            onClick={toggleSortOrder}
            className="flex items-center justify-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-emerald-500 rounded-2xl text-zinc-300 hover:text-emerald-400 transition-all duration-300 shadow-lg group w-full sm:w-fit"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              {sortOrder === 'asc' ? 'ძველი მატჩები' : 'ახალი მატჩები'}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${sortOrder === 'desc' ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
          </button>
        </div>

        <div key={`${filter}-${sortOrder}`} className="flex flex-col gap-6 animate-fade-in-up">
          {fixtures.map((item) => {
            const isFinished = item.status === 'Finished';
            const result = isFinished ? getResultBadge(item) : null;
            const scoreColor = getScoreColor(item);

            return (
              <div
                key={item.id}
                className="bg-zinc-950 border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-emerald-500/40 transition-all duration-300 shadow-2xl"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 px-4 sm:px-8 pt-8 pb-6 border-b border-zinc-800/60 text-center md:text-left">
                  <div className="flex flex-col gap-1.5 w-full md:w-auto md:min-w-[180px]">
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
                    <span className="text-zinc-600 text-xs mt-0.5 truncate max-w-full md:max-w-[180px]">
                      📍 {item.stadium !== 'სტადიონი უცნობია' ? item.stadium : 'დაზუსტდება'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-6 md:gap-10 flex-1 justify-center w-full md:w-auto">
                    <div className="flex flex-col items-center gap-3 w-20 sm:w-28">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/5 rounded-full blur-lg" />
                        <img src={item.homeTeam.logo} alt={item.homeTeam.name} loading="lazy" className="relative w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-2xl" />
                      </div>
                      <span className="font-team font-black uppercase text-[10px] sm:text-xs text-center leading-tight text-white">{item.homeTeam.name}</span>
                      <span className="text-zinc-600 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">სახლი</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className={`text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter ${scoreColor}`}>
                        {isFinished ? `${item.homeScore} : ${item.awayScore}` : 'VS'}
                      </div>
                      {isFinished && result && (
                        <span className={`text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full ${result.color}`}>
                          {result.full}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col items-center gap-3 w-20 sm:w-28">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/5 rounded-full blur-lg" />
                        <img src={item.awayTeam.logo} alt={item.awayTeam.name} loading="lazy" className="relative w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-2xl" />
                      </div>
                      <span className="font-team font-black uppercase text-[10px] sm:text-xs text-center leading-tight text-white">{item.awayTeam.name}</span>
                      <span className="text-zinc-600 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">სტუმარი</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto md:min-w-[160px]">
                    <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest text-center md:text-right">ეროვნული ლიგა</p>
                    <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-wider text-center md:text-right">ტური {item.round}</p>
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