import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import type { ContactForm } from '../types';

export const Contact = () => {
  useEffect(() => {
    document.title = 'კონტაქტი | FC Torpedo Kutaisi';
  }, []);

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="pt-10">
      <Section title="დაგვიკავშირდით">
        <div className="max-w-2xl mx-auto bg-zinc-950 border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">სახელი</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-colors placeholder:text-zinc-700"
                  placeholder="თქვენი სახელი"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">ელ-ფოსტა</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-colors placeholder:text-zinc-700"
                  placeholder="example@mail.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">თემა</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-colors placeholder:text-zinc-700"
                placeholder="წერილის სათაური"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold ml-1">შეტყობინება</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-colors resize-none placeholder:text-zinc-700"
                placeholder="რით შეგვიძლია დაგეხმაროთ?"
              />
            </div>
            <Button variant="Primary" type="submit" className="w-full py-5 text-base shadow-lg shadow-emerald-900/10">
              გაგზავნა
            </Button>
          </form>
        </div>
      </Section>
    </div>
  );
};