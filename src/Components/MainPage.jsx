import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
      <div
        className="font-Raleway header scroll-smooth text-[#fff] "
        style={{ scrollBehavior: "smooth", color: "#fff" }}
      >
        <Outlet></Outlet>
      </div>
    );
};

export default MainPage;