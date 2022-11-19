import { Category } from "./Category";
import { Chains } from "./Chains";
import { Collections } from "./Collections";
import { Currency } from "./Currency";
import { Price } from "./Price";
import { Quantify } from "./Quantity";
import { Status } from "./Status";

export const Sidebar = () => {
  return (
    <div className="w-[340px] min-[1600px]:px-16 min-[1200px]:px-8 px-4">
      <Status />
      <Price />
      <Quantify />
      <Collections />
      <Chains />
      <Category />
      <Currency />
    </div>
  );
};
