import { Navbar } from "../Navbar";
import { ShowingSettingPane } from "../ShowingSettingPane";
import { Sidebar } from "../Sidebar";

export const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <ShowingSettingPane />
      <div className="flex">
        <div className="max-[1023px]:hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
