// src/components/NewRelease.jsx

const NewRelease = () => {
  return (
    <div className="px-10 py-16 bg-black">
      {/* Section Header */}
      <h2 className="text-white text-3xl font-bold mb-8 border-l-4 border-red-600 pl-4">
        Coming Soon
      </h2>

      {/* Main Banner: Flex Layout (Text Left, Image Right) */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-left">
          <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-widest">
            Exclusive on K-STREAM
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-4 leading-tight">
            When Life Gives You Tangerines
          </h1>
          <p className="text-gray-400 mt-4 max-w-md">
            A heartwarming story coming exclusively to K-STREAM this November. Get ready for the premiere!
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/3 h-64 rounded-xl overflow-hidden shadow-2xl shrink-0">
          <img 
            src="/assets/Tangerines.jpg" 
            alt="When Life Gives You Tangerines" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default NewRelease;