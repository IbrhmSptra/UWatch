import genremovie from "../Services/TMDB/GenreMovie.json";

const BadgeCategory = ({ category }) => {
  const genre = genremovie;
  const findGenre = genre.find((i) => i.id == category);
  return (
    <div className="py-1 px-2.5 rounded-full text-white font-light text-xs bg-black">
      {findGenre.name}
    </div>
  );
};

export default BadgeCategory;
