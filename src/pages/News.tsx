import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { news } from '../data';

export const News = () => {
  return (
    <div className="pt-10">
      <Section title="სიახლეები">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {news.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              <Badge>{item.category}</Badge>
              <Card 
                title={item.title}
                description={item.excerpt}
                image={item.imageUrl}
              />
              <span className="text-zinc-500 text-xs font-mono">{new Date(item.publishDate).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};