import React from "react";

export default class Title extends React.Component {
    render() {
        return (
            <div className="py-14 mx-16">
                <h1 className="text-3xl text-white dragRegion">{this.props.name}</h1>
                {this.props.children}
            </div>
        )
    }
}