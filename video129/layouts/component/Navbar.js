import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-6 bg-blue-500">
        <div>
          <Link className="text-white text-lg mx-2" href="/">
            {" "}
            Home
          </Link>
          <Link className="text-white text-lg mx-2" href="/about">
            About
          </Link>
          <Link className="text-white text-lg mx-2" href="/contact">
            {" "}
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
