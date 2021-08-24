import React from "react";
import { XAxis, YAxis, Area, AreaChart } from "recharts";

export default class Chart extends React.Component {
    render() {
        return (
            <AreaChart width={835} height={450} data={this.props.data} margin={{ top: 5, right: 10, left: 10}}>
                <defs>
                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#b161ff" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#b161ff" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <YAxis dataKey={this.props.YDataKey} tickSize={0} axisLine={false} tickMargin={24} fontSize={10} />
                <XAxis dataKey={this.props.XDataKey} tickSize={0} axisLine={false} tickMargin={14} fontSize={10} padding={{right: 10, left: 10}} />
                <Area type="monotone" dataKey={this.props.YDataKey} stroke="#b161ff" strokeWidth="3" fillOpacity={0.1} fill="url(#colorCount)" />

            </AreaChart>
        )
    }
}