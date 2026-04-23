import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4 animate-pulse">
          404
        </h1>
        <div className="bg-blue-500 px-2 text-sm rounded rotate-12 absolute mx-auto left-0 right-0 w-max top-[30%] sm:top-[25%] shadow-lg">
          გვერდი ვერ მოიძებნა
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-6 text-gray-200">
          ვაი, ეს გვერდი არ არსებობს!
        </h2>
        <p className="text-gray-400 mb-10 max-w-md mx-auto text-lg">
          ბოდიშს გიხდით, მაგრამ გვერდი რომელსაც ეძებთ, წაშლილია ან მისამართი არასწორია.
        </p>
        <Link
          to="/"
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <span>მთავარზე დაბრუნება</span>
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12h18m-9-9l9 9-9 9"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};
