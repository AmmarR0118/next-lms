const Input = ({ label, type, name, placeholder, showForgot, required }) => {
  return (
    <div className="mb-3 sm:mb-4">
      <div className="flex justify-between items-center">
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-600 block pb-1"
        >
          {label}
        </label>
        {type === "password" && showForgot && (
          <p className="text-xs pb-2 cursor-pointer hover:underline text-gray-500">
            Forgot Password?
          </p>
        )}
      </div>
      <input
        className="border rounded w-full py-2 px-4 text-base text-gray-700 focus:outline-2 focus:outline-blue-200 focus:outline focus:border-blue-400 placeholder:text-gray-400 placeholder:text-sm placeholder:font-light"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

Input.defaultProps = {
  label: undefined,
  type: "text",
  name: undefined,
  placeholder: undefined,
  showForgot: false,
  required: false,
};

export default Input;
