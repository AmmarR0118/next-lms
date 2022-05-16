import Image from "next/image";
import Link from "next/link";

const FormHeading = ({ children }) => {
  return (
    <div className="text-center">
      <Link href="/">
        <a>
          <Image src="/logo.png" width={150} height={56.25} />
        </a>
      </Link>

      <h1 className="text-xl font-medium text-gray-600">{children}</h1>
    </div>
  );
};

export default FormHeading;
