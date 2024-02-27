const Logo = ({ addClass }) => {
  return (
    <div className={`text-white font-bold ${addClass}`}>
      <span className="text-secondary">UW</span>atch
    </div>
  );
};

export default Logo;
