import React, { useState } from "react";
import Input from "./Input";

export default function TableButtons() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="flex flex-row -mt-6 space-x-4 px-16">
            <div className="flex flex-row space-x-2 -ml-2">
                <h1 className="pb-2 text-md text-white">University Blue</h1>
                <button className="-mt-2 transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none">
                    <svg width="26" height="26" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7266 37.2399C8.65023 37.2399 0.453186 29.0429 0.453186 18.9665C0.453186 8.89016 8.65023 0.693115 18.7266 0.693115C28.8029 0.693115 37 8.89016 37 18.9665C37 29.0429 28.8029 37.2399 18.7266 37.2399ZM18.7266 2.97729C9.9097 2.97729 2.73736 10.1496 2.73736 18.9665C2.73736 27.7834 9.9097 34.9557 18.7266 34.9557C27.5435 34.9557 34.7158 27.7834 34.7158 18.9665C34.7158 10.1496 27.5435 2.97729 18.7266 2.97729Z" fill="url(#paint0_linear)" /><path d="M26.7212 20.1086H10.732C10.1016 20.1086 9.5899 19.597 9.5899 18.9666C9.5899 18.3361 10.1016 17.8245 10.732 17.8245H26.7212C27.3517 17.8245 27.8633 18.3361 27.8633 18.9666C27.8633 19.597 27.3517 20.1086 26.7212 20.1086Z" fill="url(#paint1_linear)" /><path d="M18.7266 28.103C18.0962 28.103 17.5845 27.5913 17.5845 26.9609V10.9717C17.5845 10.3412 18.0962 9.82959 18.7266 9.82959C19.3571 9.82959 19.8687 10.3412 19.8687 10.9717V26.9609C19.8687 27.5913 19.3571 28.103 18.7266 28.103Z" fill="url(#paint2_linear)" /><defs><linearGradient id="paint0_linear" x1="38.4007" y1="0.694926" x2="-1.74344" y2="0.694926" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient><linearGradient id="paint1_linear" x1="28.5637" y1="17.8246" x2="8.49159" y2="17.8246" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient><linearGradient id="paint2_linear" x1="19.9563" y1="9.8305" x2="17.4472" y2="9.8305" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient></defs></svg>
                </button>
            </div>

            <div className="flex flex-row px-2 -mt-3 space-x-3">
                <button className="flex flex-row rounded-md h-14 bg-pGreen text-pGreen shadow-bShadow focus:outline-none hover:bg-opacity-95" style={{ width: "8rem", height: "3rem" }}>
                    <div className="px-3 my-2">
                        <svg className="p-2 text-white rounded-md bg-pLightGreen" width="32" height="32" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6004 6.8283C13.6177 7.41565 13.6177 8.88403 12.6004 9.47138L2.29999 15.4183C1.28267 16.0057 0.0110199 15.2715 0.01102 14.0968L0.0110205 2.20291C0.0110205 1.02821 1.28267 0.294023 2.29999 0.881374L12.6004 6.8283Z" fill="white" /></svg>
                    </div>

                    <h1 className="py-3.5 text-sm text-white">Start All</h1>
                </button>
                <button className="flex flex-row rounded-md h-14 shadow-bShadow focus:outline-none" style={{ width: "8rem", height: "3rem", background: "#F8BD65", color: "#FFD89D" }}>
                    <div className="px-3 my-2">
                        <svg className="p-2 text-white rounded-md" style={{ background: "#FFD89D" }} width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.689697" y="0.936035" width="14.4275" height="14.4275" rx="2.27802" fill="white" /></svg>
                    </div>

                    <h1 className="py-3.5 -ml-0.5 text-sm text-white">Stop All</h1>
                </button>
                <button className="flex flex-row rounded-md h-14 shadow-bShadow focus:outline-none" style={{ width: "8rem", height: "3rem", background: "#3F78E5", color: "#5F96FF" }}>
                    <div className="px-3 my-2">
                        <svg className="p-2 text-white rounded-md" style={{ background: "#5F96FF" }} width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5856 1.92162C12.0621 1.44514 12.7566 1.25905 13.4075 1.43345C14.0584 1.60786 14.5668 2.11626 14.7412 2.76715C14.9156 3.41804 14.7295 4.11253 14.253 4.58902L5.25056 13.5915L1.58289 14.5918L2.58316 10.9241L11.5856 1.92162Z" fill="white" stroke="white" stroke-width="1.3337" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    </div>

                    <h1 className="py-3.5 text-sm text-white">Edit All</h1>
                </button>
                <button
                    className="flex flex-row rounded-md h-14 bg-pRed text-pRed shadow-bShadow focus:outline-none hover:bg-opacity-95" style={{ width: "8.2rem", height: "3rem" }}>
                    <div className="px-3 my-2">
                        <svg className="p-2 text-white rounded-md bg-pLightRed" width="32" height="32" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.45752 3.89977H2.93941H14.7945" fill="white" /><path d="M1.45752 3.89977H2.93941H14.7945" stroke="white" stroke-width="1.48189" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3128 3.8999V14.2731C13.3128 15.0915 12.6493 15.755 11.8309 15.755H4.42146C3.60304 15.755 2.93958 15.0915 2.93958 14.2731V3.8999M5.16242 3.89981V2.41792C5.16242 1.5995 5.82588 0.936035 6.6443 0.936035H9.60808C10.4265 0.936035 11.09 1.5995 11.09 2.41792V3.89981" fill="white" /><path d="M14.0537 3.8999C14.0537 3.49069 13.722 3.15896 13.3128 3.15896C12.9036 3.15896 12.5718 3.49069 12.5718 3.8999H14.0537ZM3.68052 3.8999C3.68052 3.49069 3.34879 3.15896 2.93958 3.15896C2.53036 3.15896 2.19863 3.49069 2.19863 3.8999H3.68052ZM4.42147 3.89981C4.42147 4.30902 4.7532 4.64075 5.16242 4.64075C5.57163 4.64075 5.90336 4.30902 5.90336 3.89981H4.42147ZM10.349 3.89981C10.349 4.30902 10.6808 4.64075 11.09 4.64075C11.4992 4.64075 11.8309 4.30902 11.8309 3.89981H10.349ZM12.5718 3.8999V14.2731H14.0537V3.8999H12.5718ZM12.5718 14.2731C12.5718 14.6823 12.2401 15.0141 11.8309 15.0141V16.4959C13.0585 16.4959 14.0537 15.5007 14.0537 14.2731H12.5718ZM11.8309 15.0141H4.42146V16.4959H11.8309V15.0141ZM4.42146 15.0141C4.01225 15.0141 3.68052 14.6823 3.68052 14.2731H2.19863C2.19863 15.5007 3.19383 16.4959 4.42146 16.4959V15.0141ZM3.68052 14.2731V3.8999H2.19863V14.2731H3.68052ZM5.90336 3.89981V2.41792H4.42147V3.89981H5.90336ZM5.90336 2.41792C5.90336 2.00871 6.23509 1.67698 6.6443 1.67698V0.195091C5.41667 0.195091 4.42147 1.19029 4.42147 2.41792H5.90336ZM6.6443 1.67698H9.60808V0.195091H6.6443V1.67698ZM9.60808 1.67698C10.0173 1.67698 10.349 2.00871 10.349 2.41792H11.8309C11.8309 1.19029 10.8357 0.195091 9.60808 0.195091V1.67698ZM10.349 2.41792V3.89981H11.8309V2.41792H10.349Z" fill="white" /></svg>
                    </div>

                    <h1 className="py-3.5 -ml-1 text-sm text-white">Delete All</h1>
                </button>
                <button onClick={() => setModalOpen(true)} className="flex flex-row rounded-md h-14 shadow-bShadow focus:outline-none" style={{ width: "8rem", height: "3rem", background: "#D962B8", color: "#F47ED4" }}>
                    <div className="px-4 my-2">
                        <svg className="p-2 text-white rounded-md" style={{ backgroundColor: "#F47ED4" }} width="32" height="32" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.39175 0.666748H12.6167C15.4417 0.666748 17.3334 2.65008 17.3334 5.60008V12.4092C17.3334 15.3501 15.4417 17.3334 12.6167 17.3334H5.39175C2.56675 17.3334 0.666748 15.3501 0.666748 12.4092V5.60008C0.666748 2.65008 2.56675 0.666748 5.39175 0.666748ZM8.52505 11.4918L12.4834 7.53343C12.7667 7.2501 12.7667 6.79176 12.4834 6.5001C12.2001 6.21676 11.7334 6.21676 11.4501 6.5001L8.00839 9.94176L6.55005 8.48343C6.26672 8.2001 5.80005 8.2001 5.51672 8.48343C5.23339 8.76676 5.23339 9.2251 5.51672 9.51676L7.50005 11.4918C7.64172 11.6334 7.82505 11.7001 8.00839 11.7001C8.20005 11.7001 8.38339 11.6334 8.52505 11.4918Z" fill="white" /></svg>
                    </div>

                    <h1 className="py-3.5 -ml-2 text-sm text-white">Delays</h1>
                </button>
                <div className="flex flex-row space-x-2 ml-8">
                    <button className="focus:outline-none">
                        <svg width="22" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1419 21.4891L15.1427 21.4881L19.7301 15.9833L15.1419 21.4891ZM15.1419 21.4891C15.0284 21.6265 14.8592 21.7052 14.6798 21.7052C14.5004 21.7052 14.3312 21.6265 14.2177 21.4891L14.2168 21.4881L9.62935 15.9831L9.62935 15.9831L9.62783 15.9813C9.5369 15.8739 9.4894 15.7376 9.4894 15.5973C9.4894 15.5115 9.50853 15.423 9.54611 15.3414C9.64698 15.1286 9.85917 14.9944 10.0923 14.9944L12.8448 14.9944L13.1594 14.9944L13.1594 14.6798L13.1594 0.917489C13.1594 0.584766 13.4296 0.314568 13.7623 0.314568L15.5973 0.314568C15.93 0.314568 16.2002 0.584766 16.2002 0.917489L16.2002 14.6798L16.2002 14.9944L16.5147 14.9944L19.2672 14.9944C19.5018 14.9944 19.7149 15.1298 19.8133 15.3412L19.8136 15.3418M15.1419 21.4891L19.8136 15.3418M19.8136 15.3418C19.9121 15.5519 19.8799 15.8031 19.7302 15.9831L19.8136 15.3418Z" fill="white" fill-opacity="0.14" stroke="#121218" stroke-width="0.629136" /><path d="M26.0044 3.66996L26.0044 3.35539L25.6898 3.35539L18.6644 3.35539L18.6644 0.314567L27.5248 0.314568C28.3639 0.314568 29.0452 0.995802 29.0452 1.83498L29.0452 27.5247C29.0452 28.3655 28.3641 29.0451 27.5248 29.0451L1.83506 29.0451C0.994042 29.0451 0.314643 28.3657 0.314643 27.5247L0.314644 1.83498C0.314644 0.995596 0.994247 0.314567 1.83506 0.314567L10.6954 0.314567L10.6954 3.35539L3.67003 3.35539L3.35547 3.35539L3.35547 3.66996L3.35547 25.6897L3.35547 26.0043L3.67003 26.0043L25.6898 26.0043L26.0044 26.0043L26.0044 25.6897L26.0044 3.66996Z" fill="white" fill-opacity="0.14" stroke="#121218" stroke-width="0.629136" /></svg>
                    </button>
                    <button className="focus:outline-none">
                        <svg width="22" height="24" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.103 0.048584H4.18575C2.35637 0.048584 0.868042 1.53691 0.868042 3.36629V25.042C0.868042 26.8714 2.35637 28.3597 4.18575 28.3597H25.8614C27.6908 28.3597 29.1792 26.8714 29.1792 25.042V4.12472L25.103 0.048584ZM7.50346 2.26039H20.2213V8.78522H7.50346V2.26039ZM22.5437 26.1479H7.50346V17.4113H22.5437V26.1479ZM26.9673 25.042C26.9673 25.6518 26.4712 26.1479 25.8614 26.1479H24.7555V15.1995H5.29165V26.1479H4.18575C3.57596 26.1479 3.07985 25.6518 3.07985 25.042V3.36629C3.07985 2.7565 3.57596 2.26039 4.18575 2.26039H5.29165V10.997H22.4331V2.26039H24.1869L26.9673 5.04085V25.042Z" fill="white" fill-opacity="0.14" /><path d="M15.085 2.26245H12.8732V6.63077H15.085V2.26245Z" fill="white" fill-opacity="0.14" /></svg>
                    </button>
                </div>

                {modalOpen ?
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-25 outline-none backdrop-filter backdrop-blur-sm focus:outline-none">
                        <div className="rounded-md bg-pDark" style={{ width: "46rem", height: "16rem" }}>
                            <div className="flex flex-row px-10 py-5 space-x-3">
                                <svg className="mt-1.5" width="26" height="26" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7266 37.2399C8.65023 37.2399 0.453186 29.0429 0.453186 18.9665C0.453186 8.89016 8.65023 0.693115 18.7266 0.693115C28.8029 0.693115 37 8.89016 37 18.9665C37 29.0429 28.8029 37.2399 18.7266 37.2399ZM18.7266 2.97729C9.9097 2.97729 2.73736 10.1496 2.73736 18.9665C2.73736 27.7834 9.9097 34.9557 18.7266 34.9557C27.5435 34.9557 34.7158 27.7834 34.7158 18.9665C34.7158 10.1496 27.5435 2.97729 18.7266 2.97729Z" fill="url(#paint0_linear)" /><path d="M26.7212 20.1086H10.732C10.1016 20.1086 9.5899 19.597 9.5899 18.9666C9.5899 18.3361 10.1016 17.8245 10.732 17.8245H26.7212C27.3517 17.8245 27.8633 18.3361 27.8633 18.9666C27.8633 19.597 27.3517 20.1086 26.7212 20.1086Z" fill="url(#paint1_linear)" /><path d="M18.7266 28.103C18.0962 28.103 17.5845 27.5913 17.5845 26.9609V10.9717C17.5845 10.3412 18.0962 9.82959 18.7266 9.82959C19.3571 9.82959 19.8687 10.3412 19.8687 10.9717V26.9609C19.8687 27.5913 19.3571 28.103 18.7266 28.103Z" fill="url(#paint2_linear)" /><defs><linearGradient id="paint0_linear" x1="38.4007" y1="0.694926" x2="-1.74344" y2="0.694926" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient><linearGradient id="paint1_linear" x1="28.5637" y1="17.8246" x2="8.49159" y2="17.8246" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient><linearGradient id="paint2_linear" x1="19.9563" y1="9.8305" x2="17.4472" y2="9.8305" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient></defs></svg>
                                <h1 className="pb-2 text-3xl text-white">Delays</h1>
                            </div>

                            <div className="flex flex-row ml-12 space-x-6">
                                <Input name={"Monitor Delay"} placeholder={"5000"} width={"19rem"} />
                                <Input name={"Checkout Delay"} placeholder={"5000"} width={"19rem"} />
                            </div>

                            <button onClick={() => setModalOpen(false)} className="text-white ml-60 mt-7 rounded-sm text-semibold focus:outline-none" style={{ backgroundColor: "#29DA8B", width: "14.6rem", height: "2.3rem"}}>Save</button>
                        </div>
                    </div>
                    : null}
            </div>
        </div>
    )
}