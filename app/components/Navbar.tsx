import Link from "next/link";
import Themebutton from "./ThemeButton";
import {GiWeightLiftingUp} from 'react-icons/gi'

export default function Navbar() {
  return (
    <div className="w-full p-5 flex justify-between items-center nav max-w-screen-2xl mx-auto z-50 fixed top-0">
      <Link href="/">
      <div className="flex justify-center items-center text-indigo-500">
        <GiWeightLiftingUp className="w-8 h-8"/>
        <div className="translate-x-10">
        <h4 className="text-xs font-bold">
        VitalEdge
        </h4>
        </div>
      </div>
        </Link>
      <div>
        <Themebutton />
      </div>
    </div>
  );
}
