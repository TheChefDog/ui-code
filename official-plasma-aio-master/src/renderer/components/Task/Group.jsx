import React from "react";
import useStore from "../../store/index";

var activeCard = "w-screen p-1 rounded-md text-pPink activeGroup shadow-bShadow"
var activeTrash = <svg width="16" height="16" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00003 3.60014H2.30001H12.6999" stroke="#121218" stroke-width="1.29998" stroke-linecap="round" strokeLinejoin="round" /><path fillRule="evenodd" clipRule="evenodd" d="M11.3998 3.60011V12.7C11.3998 13.418 10.8178 14 10.0998 14H3.5999C2.88194 14 2.29991 13.418 2.29991 12.7V3.60011M4.2499 3.59997V2.29998C4.2499 1.58202 4.83192 1 5.54988 1H8.14985C8.86781 1 9.44983 1.58202 9.44983 2.29998V3.59997" fill="#121218" /><path d="M12.0498 3.60011C12.0498 3.24112 11.7588 2.95011 11.3998 2.95011C11.0408 2.95011 10.7498 3.24112 10.7498 3.60011H12.0498ZM2.9499 3.60011C2.9499 3.24112 2.65889 2.95011 2.29991 2.95011C1.94093 2.95011 1.64992 3.24112 1.64992 3.60011H2.9499ZM3.5999 3.59997C3.5999 3.95895 3.89091 4.24996 4.2499 4.24996C4.60888 4.24996 4.89989 3.95895 4.89989 3.59997H3.5999ZM8.79984 3.59997C8.79984 3.95895 9.09085 4.24996 9.44983 4.24996C9.80881 4.24996 10.0998 3.95895 10.0998 3.59997H8.79984ZM10.7498 3.60011V12.7H12.0498V3.60011H10.7498ZM10.7498 12.7C10.7498 13.059 10.4588 13.35 10.0998 13.35V14.65C11.1768 14.65 12.0498 13.7769 12.0498 12.7H10.7498ZM10.0998 13.35H3.5999V14.65H10.0998V13.35ZM3.5999 13.35C3.24092 13.35 2.9499 13.059 2.9499 12.7H1.64992C1.64992 13.7769 2.52295 14.65 3.5999 14.65V13.35ZM2.9499 12.7V3.60011H1.64992V12.7H2.9499ZM4.89989 3.59997V2.29998H3.5999V3.59997H4.89989ZM4.89989 2.29998C4.89989 1.941 5.1909 1.64999 5.54988 1.64999V0.350008C4.47294 0.350008 3.5999 1.22304 3.5999 2.29998H4.89989ZM5.54988 1.64999H8.14985V0.350008H5.54988V1.64999ZM8.14985 1.64999C8.50883 1.64999 8.79984 1.941 8.79984 2.29998H10.0998C10.0998 1.22304 9.22679 0.350008 8.14985 0.350008V1.64999ZM8.79984 2.29998V3.59997H10.0998V2.29998H8.79984Z" fill="#121218" /></svg>
var activeName = "text-black text-md"
var activeTask = "-ml-14 text-sm text-black"
var activeCTrash = "flex flex-row mt-auto ml-auto -mr-0.5 -mt-5 pb-2 mr-1 transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none"

var regularTrash = <svg width="16" height="16" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00003 3.60014H2.30001H12.6999" stroke="#676B7C" stroke-width="1.29998" stroke-linecap="round" strokeLinejoin="round" /><path d="M12.0498 3.60011C12.0498 3.24112 11.7588 2.95011 11.3998 2.95011C11.0408 2.95011 10.7498 3.24112 10.7498 3.60011H12.0498ZM2.9499 3.60011C2.9499 3.24112 2.65889 2.95011 2.29991 2.95011C1.94093 2.95011 1.64992 3.24112 1.64992 3.60011H2.9499ZM3.5999 3.59997C3.5999 3.95895 3.89091 4.24996 4.2499 4.24996C4.60888 4.24996 4.89989 3.95895 4.89989 3.59997H3.5999ZM8.79984 3.59997C8.79984 3.95895 9.09085 4.24996 9.44983 4.24996C9.80881 4.24996 10.0998 3.95895 10.0998 3.59997H8.79984ZM10.7498 3.60011V12.7H12.0498V3.60011H10.7498ZM10.7498 12.7C10.7498 13.059 10.4588 13.35 10.0998 13.35V14.65C11.1768 14.65 12.0498 13.7769 12.0498 12.7H10.7498ZM10.0998 13.35H3.5999V14.65H10.0998V13.35ZM3.5999 13.35C3.24092 13.35 2.9499 13.059 2.9499 12.7H1.64992C1.64992 13.7769 2.52295 14.65 3.5999 14.65V13.35ZM2.9499 12.7V3.60011H1.64992V12.7H2.9499ZM4.89989 3.59997V2.29998H3.5999V3.59997H4.89989ZM4.89989 2.29998C4.89989 1.941 5.1909 1.64999 5.54988 1.64999V0.350008C4.47294 0.350008 3.5999 1.22304 3.5999 2.29998H4.89989ZM5.54988 1.64999H8.14985V0.350008H5.54988V1.64999ZM8.14985 1.64999C8.50883 1.64999 8.79984 1.941 8.79984 2.29998H10.0998C10.0998 1.22304 9.22679 0.350008 8.14985 0.350008V1.64999ZM8.79984 2.29998V3.59997H10.0998V2.29998H8.79984Z" fill="#676B7C" /></svg>
var regularName = "text-white text-md"
var regularCard = "w-48 p-1 rounded-md bg-pLightDark"
var regularTask = "-ml-14 text-sm regularTextGradient"
var regularCTrash = "flex flex-row mt-auto ml-auto -mt-5 my-8 transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none"

const Group = ({ ID, Name, Active, Amount }) => {
    const tasks = useStore(state => state.taskGroups)
    const removeGroup = useStore(state => state.removeTaskGroup)
    const setActiveG = useStore(state => state.setActiveGroup)
    function setActive() {

        setActiveG(ID)
    }

    return (
        <div style={{maxHeight: "4rem"}}>
            <button onClick={setActive} className="transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none">
                <div className={Active ? activeCard : regularCard} style={{ width: "12.5rem", maxWidth: "12.5rem", height: "4.50rem", maxHeight: "4.50rem" }}>
                    <div className="py-2 font-semibold truncate -ml-9">
                        <h1 className={Active ? activeName : regularName}>{Name}</h1>
                        <h1 className={Active ? activeTask : regularTask}>{Amount} Tasks</h1>
                    </div>
                </div>
            </button>
            <button onClick={() => {
                setActiveG(tasks[tasks.length-1]["id"])
                removeGroup(ID)
            }} className={Active ? activeCTrash : regularCTrash}>
                {Active ? activeTrash : regularTrash}
            </button>
        </div>
    )
}

export default Group;