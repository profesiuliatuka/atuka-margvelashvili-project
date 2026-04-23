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
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === cat 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' 
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              {cat === 'All' ? 'ყველა' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <Card 
              key={item.id}
              title={item.title}
              description={item.excerpt}
              image={item.imageUrl}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};