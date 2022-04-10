import React from "react";
import style from "./style.module.scss";
import { shapeProps } from "../../shapeProps";

export default class BottomZag extends React.Component<shapeProps> {
    render(): JSX.Element {
        return (
            <svg viewBox="0 0 100 5" className={style["bottom-zag"]}>
                <path d="
                    M 100 0
                    l -100 5
                    v -5
                    Z" fill={this.props.fill}></path>
            </svg>
        );
    }
}