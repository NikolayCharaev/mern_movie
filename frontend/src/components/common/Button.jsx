const Button = ({ text, styles, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      className={`bg-buttonBg cursor-pointer hover:bg-red-700 text-white py-2 px-4 transition rounded font-300 font-jost  ${styles} `}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
