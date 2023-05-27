const Title = ({ text }) => {
  return (
    <div>
      <h3 className="font-medium text-2xl my-10 pb-3 inline-block relative">
        {text}
        <span
          className="absolute left-0 bottom-0 w-1/2 "
          style={{ borderBottomWidth: '3px' }}></span>
      </h3>
    </div>
  );
};

export default Title;
