const Button = ({ text, styles }) => {
  return (
    <button
      className={`bg-buttonBg cursor-pointer hover:bg-red-700 text-white py-2 px-4 transition rounded font-300 font-jost ${styles}`}>
      {text}
    </button>
  );
};

export default Button;
