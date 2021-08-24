import { useState } from "react";

export default function Dropdown({ name, placeholder, width, items }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <span className="font-normal text-white px-0.5">{ name }</span>
            <div onClick={toggle} className="flex flex-row rounded-md bg-pLightDark" style={{ width: width, height: "3rem", cursor: "pointer" }}>
                <h1 className="py-3 font-normal select-none text-pGray px-7">{ selected == '' ? placeholder : selected }</h1>
                <svg className="right-0 mt-5 mr-6" style={{position: "relative", marginLeft: "auto"}} width="14" height="9" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.997559H14.85L7.425 9.35688L0 0.997559Z" fill="#676B7C"/></svg>
            </div>
            { isOpen ? 
            <div className="left-0 mt-1 text-white rounded-md bg-pLightDark" style={{ position: "relative", maxWidth: width, zIndex: "99999" }}>
                { items.map((item) => {
                    return <button onClick={() => { setSelected(item); toggle(); }} className="w-screen p-3 transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none " style={{position: "relative", marginLeft: "auto", maxWidth: width }}>{ item }</button>
                })}
            </div> : null}
        </div>
    )
}