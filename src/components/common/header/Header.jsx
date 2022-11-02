import { SiRiotgames } from "react-icons/si";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg inline-block">
        <Link to="/" title="Home" className="flex gap-3">
          <SiRiotgames
            size="32"
            className="inline-block hover:animate-ping"
          ></SiRiotgames>
          Game World
        </Link>
      </h1>
    </div>
  );
};
