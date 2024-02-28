import Rating from "../Components/Rating";
const Card = () => {
  return (
    <div>
      <img
        src="https://image.tmdb.org/t/p/original/zap5hpFCWSvdWSuPGAQyjUv2wAC.jpg"
        alt="thumbnail"
      />
      <div className="p-2">
        <h1>The Shawshank Redemption</h1>
        <Rating />
      </div>
    </div>
  );
};

export default Card;
