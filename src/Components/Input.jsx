const Input = ({ type, label, placeholder }) => {
  return (
    <div>
      <h3 className={`text-white font-bold lg:text-xl`}>{label}</h3>
      <input
        className={`w-full text-xs py-2 px-4 rounded-lg text-white border-2 border-tertiary bg-card mt-1 lg:text-lg`}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
