import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
      <div className="font-Raleway header text-[#fff] py-10">
        <Outlet></Outlet>
        
      </div>
    );
};

export default MainPage;