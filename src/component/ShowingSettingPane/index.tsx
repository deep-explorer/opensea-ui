import { Button } from "../common/Button";
import { ImageLayoutSettingPane } from "./ImageLayoutSettingPane";
import { SideBarSettingButton } from "./SideBarSettingButton";
import { SortByInput } from "./SortByInput";

export const ShowingSettingPane = () => {
  return (
    <div className="h-[66px]">
      <div className="max-[1023px]:hidden flex items-center w-[100%]">
        <SideBarSettingButton />
        <SortByInput />
        <ImageLayoutSettingPane />
      </div>
      <div className="min-[1024px]:hidden flex items-center w-[100%]  gap-2">
        <Button>Filters</Button>
        <Button>Sort</Button>
      </div>
    </div>
  );
};
