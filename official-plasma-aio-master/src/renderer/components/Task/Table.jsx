import React from "react";
import useStore from "../../store";
import TableItem from "./TableItem";

export default function Table() {
    const tasks = useStore(state => state.taskGroups)
    const activeGroup = useStore(state => state.activeGroup)

    return (
        <div className="flex flex-col mt-6 px-14">
            <div className="flex w-screen py-4 rounded-md bg-pSideBarDark text-pGray" style={{width: "58rem", height: "2.75rem", fontSize: "14.5px"}}>
                <span className="px-4 pb-4 -mt-1">ID</span>
                <span className="pl-6 -mt-1">Store</span>
                <span className="pl-24 -mt-1">Item</span>
                <span className="-mt-1 pl-40">Size</span>
                <span className="pl-10 -mt-1">Profile</span>
                <span className="pl-16 -mt-1">Proxy</span>
                <span className="-mt-1 pl-16">Status</span>
                <span className="-mt-1 pl-32">Actions</span>
            </div>
            
            <div className="flex flex-col mt-3 space-y-2 overflow-y-auto" style={{ height: "34rem" }}>
                {
                    new Array(activeGroup["taskCount"]).fill(0).map((_, i) => {
                        return <TableItem ID={i+1} Store={"Footlocker"} Item={"Jordan 1 University Blue"} Size={"10.5"} Profile={"MasterCard"} Proxy={"DC"} Status={"Checkout Successful"} />
                    })
                }
            </div>
        </div>
    )
}