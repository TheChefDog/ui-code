import React from "react";

export default class Base extends React.Component {
    render() {
        return (
            <div className="flex flex-row w-screen min-h-screen overflow-y-hidden font-semibold border-2 bg-pDark border-pSideBarBorder rounded-xl">
                {this.props.children}
            </div>
        )
    }
}