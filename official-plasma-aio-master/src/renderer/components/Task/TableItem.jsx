import React from "react";

// { ID, Store, Item, Size, Profile, Proxy, Status }
export default function TableItem({ ID, Store, Item, Size, Profile, Proxy, Status }) {
    return (
        <div>
              <div className="flex w-screen py-4 text-white rounded-md bg-pLightDark" style={{width: "58rem", height: "2.75rem", fontSize: "13.5px"}}>
                <span className="px-4 pb-4 -mt-1 overflow-x-auto" style={{width: "2.5rem", maxWidth: "2.5rem"}}>{ ID} </span>
                <span className="ml-7 mr-2 -mt-1 truncate" style={{width: "6.75rem", maxWidth: "6.75rem"}}>{ Store }</span>
                <span className="ml-4 -mt-1 truncate" style={{width: "10.5rem", maxWidth: "10.5rem"}}>{ Item }</span>
                <span className="pl-6 -mt-1">{ Size }</span>
                <span className="pl-10 -mt-1">{ Profile }</span>
                <span className="-mt-1 pl-11">{ Proxy }</span>
                <span className="pl-16 -mt-1" style={{color: '#62E2B0'}}>{ Status }</span>
                <span className="flex flex-row -mt-0.5 space-x-1.5 pl-12">
                    <button className="transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none">
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3795 6.64804C14.4011 7.2379 14.4011 8.71256 13.3795 9.30243L3.03501 15.2748C2.01334 15.8647 0.736246 15.1273 0.736246 13.9476L0.736247 2.00287C0.736247 0.823139 2.01334 0.0858079 3.03501 0.675672L13.3795 6.64804Z" fill="#62E2B0"/></svg>
                    </button>
                        <button className="transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1293 2.08611C12.6609 1.55451 13.4357 1.3469 14.1619 1.54148C14.8881 1.73605 15.4553 2.30326 15.6499 3.02944C15.8445 3.75562 15.6368 4.53044 15.1052 5.06203L5.0615 15.1058L0.969604 16.2218L2.08558 12.1299L12.1293 2.08611Z" fill="#676B7C" stroke="#676B7C" stroke-width="1.48796" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                    <button className="transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none">
                        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.08643 4.17895H2.73972H15.9661" stroke="#FF5781" stroke-width="1.65329" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.3127 4.17901V15.7521C14.3127 16.6651 13.5725 17.4053 12.6594 17.4053H4.39292C3.47983 17.4053 2.73962 16.6651 2.73962 15.7521V4.17901M5.21959 4.1789V2.52561C5.21959 1.61252 5.95979 0.872314 6.87288 0.872314H10.1795C11.0925 0.872314 11.8328 1.61252 11.8328 2.52561V4.1789" fill="#FF5781"/><path d="M15.1393 4.17901C15.1393 3.72247 14.7692 3.35237 14.3127 3.35237C13.8561 3.35237 13.486 3.72247 13.486 4.17901H15.1393ZM3.56627 4.17901C3.56627 3.72247 3.19617 3.35237 2.73962 3.35237C2.28308 3.35237 1.91298 3.72247 1.91298 4.17901H3.56627ZM4.39294 4.1789C4.39294 4.63544 4.76304 5.00554 5.21959 5.00554C5.67613 5.00554 6.04623 4.63544 6.04623 4.1789H4.39294ZM11.0061 4.1789C11.0061 4.63544 11.3762 5.00554 11.8328 5.00554C12.2893 5.00554 12.6594 4.63544 12.6594 4.1789H11.0061ZM13.486 4.17901V15.7521H15.1393V4.17901H13.486ZM13.486 15.7521C13.486 16.2086 13.1159 16.5787 12.6594 16.5787V18.232C14.029 18.232 15.1393 17.1217 15.1393 15.7521H13.486ZM12.6594 16.5787H4.39292V18.232H12.6594V16.5787ZM4.39292 16.5787C3.93637 16.5787 3.56627 16.2086 3.56627 15.7521H1.91298C1.91298 17.1217 3.02328 18.232 4.39292 18.232V16.5787ZM3.56627 15.7521V4.17901H1.91298V15.7521H3.56627ZM6.04623 4.1789V2.52561H4.39294V4.1789H6.04623ZM6.04623 2.52561C6.04623 2.06906 6.41633 1.69896 6.87288 1.69896V0.0456687C5.50325 0.0456687 4.39294 1.15597 4.39294 2.52561H6.04623ZM6.87288 1.69896H10.1795V0.0456687H6.87288V1.69896ZM10.1795 1.69896C10.636 1.69896 11.0061 2.06906 11.0061 2.52561H12.6594C12.6594 1.15597 11.5491 0.0456687 10.1795 0.0456687V1.69896ZM11.0061 2.52561V4.1789H12.6594V2.52561H11.0061Z" fill="#FF5781"/></svg>
                    </button>
                </span>
            </div>
        </div>
    )
}