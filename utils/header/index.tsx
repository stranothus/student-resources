import React from "react";
import style from "./style.module.scss";

interface headerProps {
    image?: string
}

export default class Header extends React.Component<headerProps> {
    render(): JSX.Element {
        return (
            <div className={"header " + style.header} style={{
                backgroundImage: `url(${this.props.image || "https://media.istockphoto.com/vectors/college-students-concept-illustration-vector-id885368834?k=20&m=885368834&s=612x612&w=0&h=9962PmNMTIdZm2dkbUa4RJ_M4mf9tWggqgdsn8ApbjM="})`
            }}>
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}