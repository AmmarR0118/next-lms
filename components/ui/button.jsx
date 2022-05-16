const Button = ({ children, type }) => {
  return (
    <button
      type={type}
      className="bg-gray-700 text-white rounded py-2 px-3 my-2 w-full"
    >
      {children}
    </button>
  );
};
export default Button;
