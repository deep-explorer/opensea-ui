import { NavItems } from "./NavItems";
import { SearchInput } from "./SearchInput";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="h-[72px] min-w-85 flex justify-between min-[1600px]:px-16 min-[1200px]:px-8 px-4">
      <Logo />
      <SearchInput />
      <NavItems />
    </nav>
  );
};
