import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  return <div>id movienya {id}</div>;
};

export default MovieDetail;
