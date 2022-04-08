import React from "react";
import style from "./style.module.scss";

export default class FlexCont extends React.Component {
    render(): JSX.Element {
        return (
            <div className={"flex-cont " + style["flex-cont"]}>
                {this.props.children}
            </div>
        );
    }
}