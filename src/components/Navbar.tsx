"use client";
import { usePathname } from "next/navigation";
import { CategoryNames } from "@/constants/categories";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navbar = () => {
  const pathname = usePathname();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
    ],
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-40">
      <div className="lg:hidden px-4">
        <Slider {...settings}>
          {CategoryNames.map((item, index) => {
            const isActive =
              (item === "Home" && pathname === "/") ||
              pathname.includes(`/categoryDetail/${item.toLowerCase()}`);

            return (
              <div key={index} className="px-2">
                <Link
                  href={
                    item === "Home"
                      ? `/`
                      : `/categoryDetail/${item.toLowerCase()}`
                  }
                  className={`block px-4 py-2 rounded-lg transition duration-300 text-center text-sm ${
                    isActive
                      ? "bg-blue-600 text-white shadow-xl"
                      : "text-black font-bold hover:bg-gray-300"
                  }`}
                >
                  {item}
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>

      <ul className="hidden lg:flex md:justify-center lg:space-x-6 p-4">
        {CategoryNames.map((item, index) => {
          const isActive =
            (item === "Home" && pathname === "/") ||
            pathname.includes(`/categoryDetail/${item.toLowerCase()}`);

          return (
            <li key={index}>
              <Link
                href={
                  item === "Home"
                    ? `/`
                    : `/categoryDetail/${item.toLowerCase()}`
                }
                className={`block px-4 py-2 rounded-lg transition duration-300 text-lg ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xl"
                    : "text-black font-bold hover:bg-gray-300"
                }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
