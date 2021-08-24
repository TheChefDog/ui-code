import React from "react";

export default class Checkouts extends React.Component {
    render() {
        return (
            <div className="h-full py-20 mr-8 -mt-0.5 -ml-12">
                <h1 className="text-2xl text-white">{!this.props.children ? "No Checkouts" : "Checkouts"}</h1>
                <div className="flex flex-col mt-4 space-y-5 overflow-y-auto rounded-md" style={{maxHeight: "35rem"}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}