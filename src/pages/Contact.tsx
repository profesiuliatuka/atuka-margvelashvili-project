import { Section } from '../components/Section';
import { Button } from '../components/Button';

export const Contact = () => {
  return (
    <div className="pt-10">
      <Section title="დაგვიკავშირდით">
        <div className="max-w-2xl mx-auto bg-zinc-950 border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">სახელი</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-colors"
                  placeholder="თქვენი სახელი"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">ელ-ფოსტა</label>
                <input 
                  type="email" 
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-colors"
                  placeholder="example@mail.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">შეტყობინება</label>
              <textarea 
                rows={5}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-colors resize-none"
                placeholder="რით შეგვიძლია დაგეხმაროთ?"
              />
            </div>
            <Button variant="Primary" className="w-full py-5 text-base">გაგზავნა</Button>
          </form>
        </div>
      </Section>
    </div>
  );
};