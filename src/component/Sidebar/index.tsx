import { Category } from "./Category";
import { Chains } from "./Chains";
import { Collections } from "./Collections";
import { Currency } from "./Currency";
import { Price } from "./Price";
import { Quantify } from "./Quantity";
import { Status } from "./Status";

export const Sidebar = () => {
  return (
    <div className="w-[340px]">
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
