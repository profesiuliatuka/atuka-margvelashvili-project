import { useEffect, useState } from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { news } from '../data';
import type { NewsArticle } from '../types';

type CategoryFilter = NewsArticle['category'] | 'All';

export const News = () => {
  useEffect(() => {
    document.title = 'სიახლეები | FC Torpedo Kutaisi';
  }, []);

  const [filter, setFilter] = useState<CategoryFilter>('All');

  const filteredNews = filter === 'All' 
    ? news 
    : news.filter(item => item.category === filter);

  const categories: CategoryFilter[] = ['All', 'First Team', 'Academy', 'Transfers', 'Club'];

  return (
    <div className="pt-10">
      <Section title="სიახლეები">
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-12 p-1.5 bg-zinc-900/80 border border-zinc-800 rounded-2xl w-full sm:w-fit backdrop-blur-md shadow-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === cat 
                ? 'bg-emerald-500 text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-100' 
                : 'text-zinc-400 hover:text-white hover:bg-white/5 scale-95 hover:scale-100'
              }`}
            >
              {
                cat === 'All' ? 'ყველა' :
                cat === 'First Team' ? 'პირველი გუნდი' :
                cat === 'Academy' ? 'აკადემია' :
                cat === 'Transfers' ? 'ტრანსფერი' :
                cat === 'Club' ? 'კლუბი' : cat
              }
            </button>
          ))}
        </div>

        {filteredNews.length > 0 ? (
          <div key={filter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {filteredNews.map((item) => (
              <Card 
                key={item.id}
                title={item.title}
                description={item.excerpt}
                image={item.imageUrl}
              />
            ))}
          </div>
        ) : (
          <div key={filter} className="animate-fade-in py-20 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <span className="text-2xl">⏳</span>
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-widest mb-2">ინფორმაცია მალე დაემატება</h3>
            <p className="text-zinc-500 font-bold uppercase tracking-wider text-xs">ამ კატეგორიაში ჯერ სიახლეები არ არის</p>
          </div>
        )}
      </Section>
    </div>
  );
};