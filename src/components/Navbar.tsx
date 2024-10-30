type menuItems = {
  name: string;
  href: string;
  id: number;
};
import { WHATSAPP } from "../utils/constants";
const menuItems: menuItems[] = [
  {
    name: "Inicio",
    href: "#home",
    id: 1,
  },
  {
    name: "Sobre",
    href: "#about",
    id: 5,
  },
  {
    name: "Missão",
    href: "#mission",
    id: 2,
  },
  {
    name: "Visão",
    href: "#vision",
    id: 3,
  },
  {
    name: "Valores",
    href: "#values",
    id: 4,
  },
];
function Navbar() {
  return (
    <nav className="flex flex-row ">
      {menuItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="text-black hover:text-green-500 px-2 py-2 rounded-md text-xs  md:text-base font-medium"
        >
          {item.name}
        </a>
      ))}
      <a
        key={6}
        href={WHATSAPP}
        className="text-black hover:text-green-500 px-3 py-2 rounded-md text-xs  md:text-base font-medium"
        target="_blank"
      >
        {"Contato"}
      </a>
    </nav>
  );
}

export default Navbar;
