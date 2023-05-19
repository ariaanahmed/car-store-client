import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-1">
      <div className="relative">
        <div className="bg-[url('https://i.postimg.cc/ZYBRJjXW/banner.jpg')] w-full bg-cover bg-center p-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]"></div>
          <h1 className="text-white uppercase md:text-5xl font-semibold tracking-wider relative z-20 md:pb-5">Unleash the Joy <br /> of Play with Toy!</h1>
          <Link to="/AllToys">
            <button className="btn btn-outline btn-warning z-30 absolute bottom-10">all toys</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;