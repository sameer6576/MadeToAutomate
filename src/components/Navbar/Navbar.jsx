import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import Back from "./Back";
import Barcode from "./Barcode";

function Navbar() {
  return (
    <nav className="flex justify-between  w-[90%] h-[80px] content-center py-auto m-auto bg-slate-300  rounded-[50px]   ">
      <div className="w-[100%] flex justify-between content-center align-center my-auto px-8  text-slate-700   ">
        <ul className="hover:text-slate-950 my-auto">
          <li className="font-bold my-auto ">
            <Link to="/"> MadeToAutomate</Link>
          </li>
        </ul>
        <ul className="flex ">
          <li className="my-auto hover:text-slate-950 font-bold w-8 mr-8 ">
            <Link to="/barcode">
              <img src="/qrcode.png" alt="" />
            </Link>
          </li>
          <li className="hover:text-slate-950 font-bold my-auto ">
            <Link to="/">Back</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
