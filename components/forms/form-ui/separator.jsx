import Link from "next/link";
const Separator = ({ children, link }) => {
  return (
    <div className="relative">
      <p className="uppercase text-xs text-gray-400 absolute -top-2 bg-white left-2/4 -translate-x-2/4 w-44 text-center">
        {link ? (
          <span className="hover:underline">
            <Link href={link} className="">
              {children}
            </Link>
          </span>
        ) : (
          <>{children}</>
        )}
      </p>
      <hr className="block my-6 sm:my-8" />
    </div>
  );
};

export default Separator;
