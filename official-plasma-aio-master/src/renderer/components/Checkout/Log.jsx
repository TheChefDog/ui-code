import React from "react";

export default class Log extends React.Component {
    render() {
        return (
            <div className="flex flex-row w-screen h-20 mr-4 rounded-md bg-pLightDark" style={{width: "22rem"}}>
                <img className="object-cover w-20 rounded-l-lg" src={this.props.Image} />

                <div className="px-6 py-3 space-y-1 text-xs truncate mr-14">
                    <h1 className=" text-pPink overflow-clip">{this.props.Date}</h1>
                    <h1 className="text-white overflow-clip" style={{maxWidth: "16rem"}}>{this.props.Product}</h1>
                    <h1 className="text-pGray overflow-clip">{this.props.Details}</h1>
                </div>

                <div className="flex py-6 pr-4">
                    <button className="transition duration-300 ease-in-out transform hover:scale-125 focus:outline-none">
                        <svg className="text-white rounded-md bg-pLighterDark" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"></path></svg>
                    </button>
                </div>
            </div>
        )
    }
}