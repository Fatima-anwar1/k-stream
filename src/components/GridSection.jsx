import { useState } from 'react';
import { dramaList } from '../Data/dramaDatas.js'; // Ensure this path is correct

const GridSection = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Unique genres nikalna (All + list se filter huye unique genres)
  const genres = ["All", ...new Set(dramaList.map((d) => d.genre))];

  // Filtering Logic: Agar 'All' hai to sab dikhao, warna genre match karo
  const filteredDramas = selectedGenre === "All" 
    ? dramaList 
    : dramaList.filter((d) => d.genre === selectedGenre);

  return (
    <div className="px-6 md:px-10 py-12 bg-black text-white">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-8 tracking-tight">Explore Dramas</h2>

      {/* Genre Filter Buttons */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 font-medium ${
              selectedGenre === genre 
                ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-900/20' 
                : 'bg-transparent border-gray-700 text-gray-300 hover:border-gray-500'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Drama Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredDramas.map((drama) => (
          <div key={drama.id} className="group cursor-pointer">
            {/* Image Container with Hover Effect */}
            <div className="overflow-hidden rounded-xl h-72 mb-4 bg-gray-800">
              <img 
                src={drama.image} 
                alt={drama.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            {/* Title */}
            <h3 className="font-semibold text-lg truncate group-hover:text-red-500 transition-colors">
              {drama.title}
            </h3>
            <p className="text-sm text-gray-400">{drama.genre}</p>
          </div>
        ))}
      </div>

      {/* Agar koi drama na mile */}
      {filteredDramas.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No dramas found for this genre.
        </div>
      )}
    </div>
  );
};

export default GridSection;