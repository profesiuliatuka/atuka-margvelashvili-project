interface CardProps {
  title: string;
  image: string;
  description: string;
}

export const Card = ({ title, image, description }: CardProps) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-500 transition-colors duration-300 group cursor-pointer">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">{description}</p>
      </div>
    </div>
  );
};