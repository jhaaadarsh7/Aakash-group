import { Link } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const industries = [
  { name: "Food And Beverages", path: "/industries" },
  { name: "Information And Technology", path: "/industries" },
  { name: "Banking", path: "/industries" },
  { name: "Promoter Of Insurance Companies", path: "/industries" },
  { name: "Real Estate", path: "/industries" },
];

const Footer = () => {
  return (
    <footer className="bg-[#042433] text-white px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 font-sans">
      {/* Grid for mobile, flex for desktop */}
      <div className="
        max-w-7xl mx-auto
        grid grid-cols-2 gap-x-6 gap-y-8
        md:flex md:flex-row md:justify-between md:gap-12
      ">
        {/* Left column: Company Info */}
        <div className="col-span-1 flex flex-col items-center md:items-start md:max-w-sm">
          <img src={logo} alt="Logo" className="h-20 sm:h-24 mb-4" />
          <p className="text-gray-300 text-sm sm:text-base leading-6 text-center md:text-left">
            The group diversified into packaged food manufacturing, restaurants,
            insurance, real estate and banking over the years.
          </p>
        </div>

        {/* Right column: Industries */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4 sm:mb-5 text-center md:text-left">Industries</h3>
          <ul className="space-y-2 sm:space-y-3 text-center md:text-left">
            {industries.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-white transition duration-200 text-sm sm:text-base"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Left column (row 2): Quick Access */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4 sm:mb-5 text-center md:text-left">Quick Access</h3>
          <ul className="space-y-2 sm:space-y-3 text-center md:text-left">
            {navLinks.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-white transition duration-200 text-sm sm:text-base"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column (row 2): Contact Us */}
        <div className="col-span-1 flex flex-col items-center md:items-start md:max-w-sm">
          <h3 className="text-lg font-semibold text-white mb-4 sm:mb-5 text-center md:text-left">Contact Us</h3>
          <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base text-center md:text-left">
            <li>
              <strong className="text-white">Address:</strong><br />
              Laxmi Plaza, Putalisadak Kathmandu
            </li>
            <li>
              <strong className="text-white">Phone:</strong>{" "}
              <a href="tel:+977-1-4430196" className="hover:text-white">
                +977-1-4430196
              </a>
            </li>
            <li>
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:info@aakash.group" className="hover:text-white break-all">
                info@aakash.group
              </a>
            </li>
            <li>
              <strong className="text-white">Opening Hours:</strong><br />
              Sunday to Friday (10:00 AM – 6:00 PM)
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 text-center text-gray-400 text-xs sm:text-sm">
        © 2019 - 2025 AakashLabs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

