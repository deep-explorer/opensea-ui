import { Navbar } from "../Navbar";
import { ShowingSettingPane } from "../ShowingSettingPane";
import { Sidebar } from "../Sidebar";

export const Layout = () => {
  return (
    <div className="min-[1600px]:px-16 min-[1200px]:px-8 px-4">
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
