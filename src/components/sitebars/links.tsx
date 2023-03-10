import { AiOutlineHome } from "solid-icons/ai";
import { CgMoreO, CgProfile } from "solid-icons/cg";
import { IoNotificationsCircleOutline } from "solid-icons/io";
import { RiMapCompassLine } from "solid-icons/ri";
const SIZE = 24;

export const links = [
  {
    name: "Home",
    href: "/",
    icon: () => <AiOutlineHome size={SIZE} />,
  },
  {
    name: "Profile",
    href: "/Profile",
    icon: () => <CgProfile size={SIZE} />,
  },
  {
    name: "More",
    href: "/More",
    icon: () => <CgMoreO size={SIZE} />,
  },
  {
    name: "Login",
    href: "/login",
    icon: () => <IoNotificationsCircleOutline size={SIZE} />,
  },
  {
    name: "Register",
    href: "/register",
    icon: () => <RiMapCompassLine size={SIZE} />,
  },
];
