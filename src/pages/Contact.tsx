import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Section } from '../components/Section';

export const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.title = 'კონტაქტი | FC Torpedo Kutaisi';
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('სახელი სავალდებულოა'),
      email: Yup.string().email('არასწორი ელ-ფოსტა').required('ელ-ფოსტა სავალდებულოა'),
      subject: Yup.string().required('თემა სავალდებულოა'),
      message: Yup.string().min(10, 'მინ. 10 სიმბოლო').required('შეტყობინება სავალდებულოა')
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Message sent:', values);
      setIsSuccess(true);
      resetForm();
      setTimeout(() => setIsSuccess(false), 5000);
    }
  });

  return (
    <div className="pt-10">
      <Section title="დაგვიკავშირდით">
        <div className="max-w-2xl mx-auto bg-zinc-950/80 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-3xl pointer-events-none" />
          
          {isSuccess && (
            <div className="absolute top-0 left-0 w-full p-6 z-20 animate-fade-in-up">
              <div className="bg-zinc-900 border border-emerald-500/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 shadow-[0_10px_40px_rgba(16,185,129,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-transparent pointer-events-none" />
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-bold text-lg tracking-wide text-center">წარმატებით გაიგზავნა!</span>
                <span className="text-zinc-400 text-sm text-center">თქვენი შეტყობინება მიღებულია, მალე დაგიკავშირდებით.</span>
              </div>
            </div>
          )}

          <form className="space-y-6 relative z-10 mt-2" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <label className={`text-[10px] uppercase tracking-[0.2em] font-bold ml-1 transition-colors ${formik.touched.name && formik.errors.name ? 'text-red-500' : 'text-zinc-500 group-focus-within:text-emerald-400'}`}>სახელი</label>
                <input 
                  type="text" 
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full bg-zinc-900/50 border ${formik.touched.name && formik.errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-zinc-800 focus:border-emerald-500 focus:ring-emerald-500/50'} rounded-xl px-5 py-4 text-white focus:bg-zinc-900 focus:ring-1 outline-none transition-all duration-300 placeholder:text-zinc-700 font-medium`}
                  placeholder="თქვენი სახელი"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-xs font-bold ml-1">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="space-y-2 group">
                <label className={`text-[10px] uppercase tracking-[0.2em] font-bold ml-1 transition-colors ${formik.touched.email && formik.errors.email ? 'text-red-500' : 'text-zinc-500 group-focus-within:text-emerald-400'}`}>ელ-ფოსტა</label>
                <input 
                  type="email" 
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full bg-zinc-900/50 border ${formik.touched.email && formik.errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-zinc-800 focus:border-emerald-500 focus:ring-emerald-500/50'} rounded-xl px-5 py-4 text-white focus:bg-zinc-900 focus:ring-1 outline-none transition-all duration-300 placeholder:text-zinc-700 font-medium`}
                  placeholder="example@mail.com"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-xs font-bold ml-1">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="space-y-2 group">
              <label className={`text-[10px] uppercase tracking-[0.2em] font-bold ml-1 transition-colors ${formik.touched.subject && formik.errors.subject ? 'text-red-500' : 'text-zinc-500 group-focus-within:text-emerald-400'}`}>თემა</label>
              <input 
                type="text" 
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full bg-zinc-900/50 border ${formik.touched.subject && formik.errors.subject ? 'border-red-500 focus:ring-red-500/50' : 'border-zinc-800 focus:border-emerald-500 focus:ring-emerald-500/50'} rounded-xl px-5 py-4 text-white focus:bg-zinc-900 focus:ring-1 outline-none transition-all duration-300 placeholder:text-zinc-700 font-medium`}
                placeholder="წერილის სათაური"
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="text-red-500 text-xs font-bold ml-1">{formik.errors.subject}</div>
              ) : null}
            </div>
            <div className="space-y-2 group">
              <label className={`text-[10px] uppercase tracking-[0.2em] font-bold ml-1 transition-colors ${formik.touched.message && formik.errors.message ? 'text-red-500' : 'text-zinc-500 group-focus-within:text-emerald-400'}`}>შეტყობინება</label>
              <textarea 
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={5}
                className={`w-full bg-zinc-900/50 border ${formik.touched.message && formik.errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-zinc-800 focus:border-emerald-500 focus:ring-emerald-500/50'} rounded-xl px-5 py-4 text-white focus:bg-zinc-900 focus:ring-1 outline-none transition-all duration-300 resize-none placeholder:text-zinc-700 font-medium`}
                placeholder="რით შეგვიძლია დაგეხმაროთ?"
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-xs font-bold ml-1">{formik.errors.message}</div>
              ) : null}
            </div>
            <div className="pt-6">
              <button 
                type="submit" 
                disabled={formik.isSubmitting}
                className="relative w-full py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed bg-zinc-800 border border-zinc-700 text-white hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {formik.isSubmitting ? 'იგზავნება...' : 'გაგზავნა'}
                  <svg className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
};