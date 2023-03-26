import {
  FaPizzaSlice,
  FaHamburger,
  FaBeer,
  FaGlobeEurope,
} from "react-icons/fa";
import {
  GiNoodles,
  GiChopsticks,
  GiHotSpices,
  GiFrance,
  GiArabicDoor,
  GiCoolSpices,
  GiEarthAmerica,
  GiFastNoodles,
  GiGreekTemple,
  GiIndianPalace,
  GiPotionBall,
  GiSouthAmerica,
  GiSouthKorea,
  GiSpain,
  GiTexas,
  GiVampireDracula,
} from "react-icons/gi";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { SiGitea, SiNordvpn } from "react-icons/si";
import { AiOutlineEuroCircle } from "react-icons/ai";
import { TbJewishStar } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";

export interface ICategories {
  type: string;
  icon?: JSX.Element;
}

export const categories: ICategories[] = [
  { type: "African", icon: <BsGlobeEuropeAfrica /> },
  { type: "American", icon: <FaHamburger /> },
  { type: "British", icon: <SiGitea /> },
  { type: "Cajun", icon: <GiHotSpices /> },
  { type: "Caribbean", icon: <GiEarthAmerica /> },
  { type: "Chinese", icon: <GiNoodles /> },
  { type: "Eastern European", icon: <GiVampireDracula /> },
  { type: "European", icon: <AiOutlineEuroCircle /> },
  { type: "French", icon: <GiFrance /> },
  { type: "German", icon: <FaBeer /> },
  { type: "Greek", icon: <GiGreekTemple /> },
  { type: "Indian", icon: <GiIndianPalace /> },
  { type: "Irish", icon: <GiPotionBall /> },
  { type: "Italian", icon: <FaPizzaSlice /> },
  { type: "Japanese", icon: <GiChopsticks /> },
  { type: "Jewish", icon: <TbJewishStar /> },
  { type: "Korean", icon: <GiSouthKorea /> },
  { type: "Latin American", icon: <GiSouthAmerica /> },
  { type: "Mediterranean", icon: <FaGlobeEurope /> },
  { type: "Mexican", icon: <GiCoolSpices /> },
  { type: "Middle Eastern", icon: <GiArabicDoor /> },
  { type: "Nordic", icon: <SiNordvpn /> },
  { type: "Southern", icon: <GiTexas /> },
  { type: "Spanish", icon: <GiSpain /> },
  { type: "Thai", icon: <GiFastNoodles /> },
  { type: "Vietnamese", icon: <CiBowlNoodles /> },
];
