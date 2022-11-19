import { NavItems } from "./NavItems";
import { SearchInput } from "./SearchInput";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="h-[72px] min-w-85 flex justify-between">
      <Logo />
      <SearchInput />
      <NavItems />
    </nav>
  );
};
