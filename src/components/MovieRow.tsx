import React from 'react';

interface Movie {
  id: number;
  title: string;
  image: string;
}

const MOCK_MOVIES: Movie[] = [
  {
    id: 1,
    title: "Movie 1",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    title: "Movie 2",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    title: "Movie 3",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    title: "Movie 4",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    title: "Movie 5",
    image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?auto=format&fit=crop&w=500&q=80"
  },
];

interface MovieRowProps {
  title: string;
  category: string;
}

const MovieRow: React.FC<MovieRowProps> = ({ title }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {MOCK_MOVIES.map((movie) => (
            <div key={movie.id} className="flex-none w-[250px] relative group">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-[140px] object-cover rounded-md transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-center">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;