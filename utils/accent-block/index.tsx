import React from "react";
import style from "./style.module.scss";

export default class AccentBlock extends React.Component {
    render(): JSX.Element {
        return (
            <div className={"accent-block text-block " + style["accent-block"]}>
                {this.props.children}
            </div>
        );
    }
}