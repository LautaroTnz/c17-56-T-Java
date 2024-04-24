import React from "react";
import { FormLogin } from "../../components";
import { ImagenLogin } from "../../assets";

const Login = ({ onLogin }) => {
  return (
    <div className="flex justify-center">
      <div className="xl:grid xl:grid-cols-2">
        <div className="xl:h-auto xl:w-[683px] w-[360px]">
          <FormLogin onLogin={onLogin} />
        </div>

        <div
          className=" hidden xl:w-[683px] w-[360px]
                bg-primarygrey xl:h-auto xl:flex justify-center xl:items-center"
        >
          <img src={ImagenLogin} alt="Hospital" />
        </div>
      </div>
    </div>
  );
};

export default Login;