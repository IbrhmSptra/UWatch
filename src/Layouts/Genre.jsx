import CardGenre from "../Components/CardGenre";
import genreJson from "../Services/TMDB/GenreMovie.json";

const Genre = ({ addClass }) => {
  const data = genreJson;
  return (
    <div className={`${addClass}`}>
      <h1 className="font-semibold text-3xl xl:text-3xl text-white">GENRE</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-4">
        {data.map((value, i) => (
          <CardGenre key={i} data={value} />
        ))}
      </div>
    </div>
  );
};

export default Genre;
