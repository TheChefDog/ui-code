import React, { useState } from "react";
import useStore from "../../store/index";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Group from "./Group";

export default function GroupSection() {
    const tasks = useStore(state => state.taskGroups)
    const activeGroup = useStore(state => state.activeGroup)
    const [showModal, setShowModal] = useState(false);
    const [showShopify, setShowShopify] = useState(true);
    const [showFootsite, setShowFootsite] = useState(false);
    // const [profile, setProfile] = useState('');
    // const [store, setStore] = useState('');
    // const [login, setLogin] = useState('');
    // const [keywords, setKeywords] = useState('Keywords');
    // const [size, setSize] = useState('');
    // const [quantity, setQuantity] = useState(0);
    // const [sku, setSKU] = useState('');
    // const [proxy, setProxy] = useState('');
    // const [monitorDelay, setMonitorDelay] = useState(0);
    // const [mode, setMode] = useState('');

    const createGroup = useStore(state => state.createTaskGroup)

    // function clearItems() {
    //     setProfile('');
    //     setStore('')
    //     setLogin('');
    //     setKeywords('Keywords');
    //     setSize('');
    //     setQuantity(0);
    //     setSKU('');
    // }

    return (
        <div className="w-screen border-r border-pSideBarBorder" style={{ width: "14.65rem" }}>
            <div className="flex flex-row px-6 py-10 space-x-4">
                <h1 className="pb-2 text-xl text-white">Tasks Groups</h1>
                <button onClick={() => setShowModal(true)} className="-mt-2 transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none">
                    <svg width="32" height="32" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7266 37.2399C8.65023 37.2399 0.453186 29.0429 0.453186 18.9665C0.453186 8.89016 8.65023 0.693115 18.7266 0.693115C28.8029 0.693115 37 8.89016 37 18.9665C37 29.0429 28.8029 37.2399 18.7266 37.2399ZM18.7266 2.97729C9.9097 2.97729 2.73736 10.1496 2.73736 18.9665C2.73736 27.7834 9.9097 34.9557 18.7266 34.9557C27.5435 34.9557 34.7158 27.7834 34.7158 18.9665C34.7158 10.1496 27.5435 2.97729 18.7266 2.97729Z" fill="url(#paint0_linear)" /><path d="M26.7212 20.1086H10.732C10.1016 20.1086 9.5899 19.597 9.5899 18.9666C9.5899 18.3361 10.1016 17.8245 10.732 17.8245H26.7212C27.3517 17.8245 27.8633 18.3361 27.8633 18.9666C27.8633 19.597 27.3517 20.1086 26.7212 20.1086Z" fill="url(#paint1_linear)" /><path d="M18.7266 28.103C18.0962 28.103 17.5845 27.5913 17.5845 26.9609V10.9717C17.5845 10.3412 18.0962 9.82959 18.7266 9.82959C19.3571 9.82959 19.8687 10.3412 19.8687 10.9717V26.9609C19.8687 27.5913 19.3571 28.103 18.7266 28.103Z" fill="url(#paint2_linear)" /><defs><linearGradient id="paint0_linear" x1="38.4007" y1="0.694926" x2="-1.74344" y2="0.694926" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient><linearGradient id="paint1_linear" x1="28.5637" y1="17.8246" x2="8.49159" y2="17.8246" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient><linearGradient id="paint2_linear" x1="19.9563" y1="9.8305" x2="17.4472" y2="9.8305" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient></defs></svg>
                </button>
            </div>

            <div className="flex flex-col px-5 space-y-6 overflow-y-auto" style={{ height: "40rem" }}>
                <Group key={activeGroup["id"]} ID={activeGroup["id"]} Name={activeGroup["name"]} Amount={activeGroup["taskCount"]} Active={true} />
                {
                    tasks.filter((g) => g["id"] != activeGroup["id"]).map((group, _) => {
                        return <Group key={group["id"]} ID={group["id"]} Name={group["name"]} Amount={group["taskCount"]} Active={activeGroup["id"] == group["id"] ? true : false} />
                    })
                }
            </div>

            {/* Modal Show Condition */}
            { showModal ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-25 outline-none backdrop-filter backdrop-blur-sm focus:outline-none">
                    <div className="rounded-md bg-pDark" style={{ width: "60rem", height: "32rem" }}>
                        <div className="flex flex-row px-10 py-5 space-x-3">
                            <svg className="mt-1.5" width="26" height="26" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7266 37.2399C8.65023 37.2399 0.453186 29.0429 0.453186 18.9665C0.453186 8.89016 8.65023 0.693115 18.7266 0.693115C28.8029 0.693115 37 8.89016 37 18.9665C37 29.0429 28.8029 37.2399 18.7266 37.2399ZM18.7266 2.97729C9.9097 2.97729 2.73736 10.1496 2.73736 18.9665C2.73736 27.7834 9.9097 34.9557 18.7266 34.9557C27.5435 34.9557 34.7158 27.7834 34.7158 18.9665C34.7158 10.1496 27.5435 2.97729 18.7266 2.97729Z" fill="url(#paint0_linear)" /><path d="M26.7212 20.1086H10.732C10.1016 20.1086 9.5899 19.597 9.5899 18.9666C9.5899 18.3361 10.1016 17.8245 10.732 17.8245H26.7212C27.3517 17.8245 27.8633 18.3361 27.8633 18.9666C27.8633 19.597 27.3517 20.1086 26.7212 20.1086Z" fill="url(#paint1_linear)" /><path d="M18.7266 28.103C18.0962 28.103 17.5845 27.5913 17.5845 26.9609V10.9717C17.5845 10.3412 18.0962 9.82959 18.7266 9.82959C19.3571 9.82959 19.8687 10.3412 19.8687 10.9717V26.9609C19.8687 27.5913 19.3571 28.103 18.7266 28.103Z" fill="url(#paint2_linear)" /><defs><linearGradient id="paint0_linear" x1="38.4007" y1="0.694926" x2="-1.74344" y2="0.694926" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient><linearGradient id="paint1_linear" x1="28.5637" y1="17.8246" x2="8.49159" y2="17.8246" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient><linearGradient id="paint2_linear" x1="19.9563" y1="9.8305" x2="17.4472" y2="9.8305" gradientUnits="userSpaceOnUse"><stop stopColor="#ED71B6" /><stop offset="1" stopColor="#922EBE" /></linearGradient></defs></svg>
                            <h1 className="pb-2 text-3xl text-white">Create Task</h1>
                        </div>


                        {/* Modal View */}
                        <div className="flex flex-col px-10">
                            <div className="flex flex-row">
                                <button onClick={() => {
                                    setShowShopify(true)
                                    setShowFootsite(false)
                                }} className={`flex flex-row justify-center items-center space-x-2 rounded-sm ${showShopify ? "bg-pPink text-pPink shadow-bShadow focus:outline-none" : "focus:outline-none"}`} style={{ width: "20rem", height: "2.75rem", backgroundColor: showShopify ? "#D962B8" : "#653257" }}>
                                    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4265 2.80041C14.4399 2.80976 14.4524 2.82033 14.4639 2.83198L15.8436 4.2012L17.7145 4.34151C17.7998 4.34853 17.9016 4.41284 17.9179 4.52976L20.4576 21.7099L13.2689 23.265L0 20.7791C0 20.7791 1.70246 7.6108 1.76677 7.14426C1.85213 6.53156 1.87318 6.51168 2.52446 6.30706L4.62447 5.65577C5.07347 3.75103 6.507 0 9.50619 0C9.89789 0 10.3516 0.210469 10.7187 0.694548L10.8275 0.69104C12.1148 0.69104 12.8468 1.78899 13.2619 2.98282L13.9576 2.76767C14.0512 2.73961 14.2827 2.70219 14.4253 2.80041H14.4265ZM10.8286 8.31353C10.8286 8.31353 10.2288 7.96626 9.01626 7.96626C5.86858 7.96626 4.30877 10.0686 4.30877 12.2411C4.30877 14.8229 6.88468 14.893 6.88468 16.4634C6.88468 16.8434 6.61575 17.3637 5.95511 17.3637C4.94486 17.3637 3.74752 16.3347 3.74752 16.3347L3.13833 18.3506C3.13833 18.3506 4.30292 19.7677 6.58067 19.7677C8.4784 19.7677 9.8862 18.3389 9.8862 16.1196C9.8862 13.2981 6.74671 12.8374 6.74671 11.6331C6.74671 11.4109 6.81686 10.5363 8.21297 10.5363C8.81245 10.5457 9.4025 10.687 9.94116 10.9502L10.8286 8.31353ZM12.5299 3.20848C12.2458 2.33972 11.8038 1.58436 11.1397 1.50135C11.3045 1.9749 11.4086 2.5724 11.4086 3.31372L11.4074 3.55693L12.5299 3.20848ZM10.3165 1.64867C9.58453 1.96204 8.74733 2.79456 8.30184 4.51807L10.6205 3.80014V3.67035C10.6205 2.77468 10.5012 2.11054 10.3165 1.64751V1.64867ZM9.42551 0.80446C7.26937 0.80446 6.05917 3.6341 5.54937 5.37047L7.38162 4.8022C7.81776 2.5268 8.84789 1.38793 9.8102 0.935418C9.69777 0.854077 9.56309 0.809184 9.42434 0.806798L9.42551 0.80446Z" fill={showShopify ? "#FFFFFF" : "#B5589C"} /></svg>
                                    <span style={{ color: showShopify ? "#FFFFFF" : "#B5589C" }}>Shopify</span>
                                </button>
                                <button onClick={() => {
                                    setShowShopify(false)
                                    setShowFootsite(true)
                                }} className={`flex flex-row justify-center items-center space-x-2 rounded-sm ${showFootsite ? "text-pPink shadow-bShadow focus:outline-none" : "text-white text-opacity-50 shadowbShadow focus:outline-none"}`} style={{ width: "20rem", height: "2.75rem", backgroundColor: showFootsite ? "#D962B8" : "#653257" }}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0454 11.3636L13.1932 9.05219L10.9091 6.08173C10.8281 5.97547 10.727 5.88627 10.6114 5.81923C10.4959 5.7522 10.3682 5.70867 10.2358 5.69114C10.1034 5.67361 9.96878 5.68243 9.83977 5.71709C9.71076 5.75174 9.58988 5.81156 9.48407 5.8931C9.3521 5.99832 9.24877 6.13511 9.18362 6.29082C9.11848 6.44653 9.09362 6.61615 9.11134 6.784H9.09316V9.09082H4.54543V7.95446C4.54543 7.65308 4.42571 7.36404 4.2126 7.15093C3.99949 6.93782 3.71045 6.8181 3.40907 6.8181C3.10769 6.8181 2.81865 6.93782 2.60554 7.15093C2.39243 7.36404 2.27271 7.65308 2.27271 7.95446V13.6363H10.2273C12.5 13.6363 13.6363 15.909 15.9091 15.909H22.7273L22.7363 14.7726C22.7363 13.5136 17.0454 11.3636 17.0454 11.3636Z" fill={showFootsite ? "#FFFFFF" : "#B5589C"} /><path d="M12.5613 17.2365C11.6295 16.6137 10.5704 15.9092 9.09089 15.9092H2.27271V19.2501C2.27271 19.916 2.81134 20.4546 3.47725 20.4546H7.88634C8.20581 20.4546 8.51219 20.3277 8.73808 20.1018C8.96398 19.8759 9.09089 19.5696 9.09089 19.2501V18.1819C9.88407 18.1819 10.5409 18.6183 11.3023 19.1274C12.2341 19.7501 13.2932 20.4546 14.7727 20.4546H21.5909C21.8923 20.4546 22.1813 20.3349 22.3944 20.1218C22.6075 19.9087 22.7273 19.6197 22.7273 19.3183V18.1819H14.7727C13.9795 18.1819 13.3227 17.7433 12.5613 17.2365Z" fill={showFootsite ? "#FFFFFF" : "#B5589C"} /></svg>
                                    <span style={{ color: showFootsite ? "#FFFFFF" : "#B5589C" }}>Footsite</span>
                                </button>
                            </div>

                            {/* Modal Body View */}
                            <div className="pt-4 space-y-5 divide-y-1">
                                <div>
                                    <div style={{ position: "absolute" }}>
                                        <Dropdown name={"Profile"} placeholder={"Profile"} width={"40rem"} items={["Mastercard", "Visa"]} />
                                    </div>
                                    <div className="flex flex-row space-x-8" style={{ position: "absolute", top: "24rem" }}>
                                        <Dropdown name={"Store"} placeholder={"Store"} width={"19rem"} items={["Supreme", "Footlocker"]} />
                                        {showFootsite ?
                                            <Input name={"SKU"} placeholder={""} width={"19rem"} />
                                            : <Dropdown name={"Login"} placeholder={"None"} width={"19rem"} items={["Login 1", "Login 2"]}/>}
                                    </div>
                                    <div style={{ position: "absolute", top: "29.3rem" }}>
                                        <Input name={"Keywords"} placeholder={""} width={"40rem"} />
                                    </div>
                                    <div className="flex flex-row space-x-8" style={{ position: "absolute", top: "34.5rem" }}>
                                        <Dropdown name={"Size"} placeholder={"9, 9.5, 10"} width={"19rem"} items={["9", "9.5", "10"]}/>
                                        <Input name={"Task Quantity"} placeholder={"2"} width={"19rem"}/>
                                    </div>
                                </div>
                                <div className="flex flex-col" style={{position: "absolute", left: "57.3rem", top: "13.5rem"}}>
                                    <Dropdown name={"Proxy"} placeholder={"Local"} width="14.6rem" items={["Proxy 1", "Proxy 2"]} />
                                </div>
                                <div className="space-y-4" style={{position: "absolute", left: "57.3rem", top: "32.7rem"}}>
                                    <button onClick={() => {
                                        setShowModal(false);
                                        createGroup({
                                            name: "University Blue",
                                            taskCount: Math.floor(Math.random() * 30)+1,
                                            storeName: "Footlocker",
                                            itemSize: "9.5",
                                            profileName: "Profile 1",
                                        })
                                    }} className="text-white rounded-sm text-semibold focus:outline-none" style={{ backgroundColor: "#29DA8B", width: "14.6rem", height: "2.3rem"}}>Save</button>
                                    <button onClick={() => setShowModal(false)} className="text-white rounded-sm text-semibold focus:outline-none" style={{ backgroundColor: "#FF5781", width: "14.6rem", height: "2.3rem"}}>Delete</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ) : null}


        </div>
    )

}