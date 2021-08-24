
export default function Input({ name, placeholder, width }) {
    return (
        <div className="flex flex-col">
            <span className="font-normal text-white px-0.5">{ name }</span>
            <input className="py-3 font-normal rounded-md select-none bg-pLightDark placeholder-pGray text-pGray px-7 focus:outline-none" placeholder={placeholder} style={{ width: width, height: "3rem" }}></input>
        </div>
    )
}