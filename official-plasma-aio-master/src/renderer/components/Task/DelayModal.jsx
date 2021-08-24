export default function DelayModal({ open, setOpen }) {
    return (
        <div>
            { open ? 
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-25 outline-none backdrop-filter backdrop-blur-sm focus:outline-none">
                <div className="rounded-md bg-pDark" style={{ width: "60rem", height: "32rem" }}>

                </div>
            </div>    
            : null}
        </div>
    )
}