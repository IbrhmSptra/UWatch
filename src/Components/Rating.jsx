import { IoIosStar } from "react-icons/io";

const Rating = ({ rating }) => {
  return (
    <div className="flex gap-x-2">
      <IoIosStar className="text-tertiary text-xl lg:text-2xl" />
      <p className="text-white font-bold text-xl lg:text-2xl">{rating}</p>
    </div>
  );
};

export default Rating;
