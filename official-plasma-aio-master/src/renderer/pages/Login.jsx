import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Base from "../components/Base";
import Logo from "../components/Dashboard/Logo";

function Login() {
    let history = useHistory();

  return (
    <Base>
        <div className="flex flex-col w-screen justify-center items-center text-white font-normal">
            <div>
                <Logo classSelector={"w-36 h-36 pb-4 ml-14 mb-4"} />
                <h1 className="text-lg tracking-wide">Please enter your License Key</h1>
            </div>
            <div className="relative flex flex-wrap items-stretch mt-6 border-b border-pPink">
                <input className="bg-pDark pb-3 placeholder-white placeholder-opacity-10 text-white text-opacity-25 focus:outline-none" style={{width: "28rem"}} placeholder="License Key" />
                <svg className="mt-1" width="23" height="23" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.4821 3.17279C21.9937 -0.31565 16.3179 -0.315596 12.8294 3.17285C10.4466 5.55565 9.61899 9.06714 10.6507 12.253L0.575038 22.3287C0.422511 22.4812 0.336731 22.6877 0.336731 22.9038V27.505C0.336731 27.9545 0.700508 28.3183 1.15007 28.3183H5.75126C5.96728 28.3183 6.17381 28.2325 6.32629 28.08L7.4764 26.9291C7.65191 26.7536 7.73769 26.5074 7.70912 26.2603L7.56613 25.0244L9.27858 24.8632C9.66779 24.8266 9.97517 24.5192 10.0117 24.13L10.173 22.4176L11.4089 22.5613C11.6384 22.5923 11.8695 22.5152 12.0435 22.3612C12.2166 22.2063 12.3159 21.9855 12.3159 21.7536V20.2392H13.8028C14.0188 20.2392 14.2253 20.1534 14.3778 20.0009L16.4636 17.9427C19.6486 18.9753 23.0993 18.21 25.4821 15.8256C28.9706 12.3372 28.9706 6.66124 25.4821 3.17279ZM23.1812 8.92415C22.2297 9.8757 20.6824 9.8757 19.7309 8.92415C18.7794 7.9726 18.7794 6.42537 19.7309 5.47383C20.6824 4.52228 22.2297 4.52228 23.1812 5.47383C24.1328 6.42537 24.1327 7.9726 23.1812 8.92415Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="29.1625" y1="0.557864" x2="-1.33187" y2="0.557864" gradientUnits="userSpaceOnUse"><stop stop-color="#ED71B6"/><stop offset="1" stop-color="#922EBE"/></linearGradient></defs></svg>
            </div>
            <Link to="/dashboard">
                <button className="bg-white bg-opacity-5 rounded-lg focus:outline-none mt-6" style={{color: "#5C5C69", width: "29rem", height: "2.75rem"}}>Activate</button>
            </Link>
        </div>

    </Base>
  );
}

export default Login;
