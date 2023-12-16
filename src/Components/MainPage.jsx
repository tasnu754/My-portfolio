import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
      <div
        className="font-noto header scroll-smooth text-[#fff] overflow-hidden
 "
        style={{ scrollBehavior: "smooth", color: "#fff" }}
      >
        <Outlet></Outlet>
      </div>
    );
};

export default MainPage;