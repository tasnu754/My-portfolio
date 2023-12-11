import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
      <div className="font-Raleway header text-[#fff] ">
        <Outlet></Outlet>
        
      </div>
    );
};

export default MainPage;