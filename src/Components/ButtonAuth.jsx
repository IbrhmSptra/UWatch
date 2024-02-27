const ButtonAuth = ({ label }) => {
  return (
    <button
      className={`text-black bg-secondary w-full py-2 rounded-xl font-bold md:text-lg`}
      type="submit"
    >
      {label}
    </button>
  );
};

export default ButtonAuth;
