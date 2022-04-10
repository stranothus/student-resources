import React from "react";
import style from "./style.module.scss";
import { shapeProps } from "../../shapeProps";

export default class BottomZig extends React.Component<shapeProps> {
    render(): JSX.Element {
        return (
            <svg viewBox="0 0 50 5" className={style["bottom-zig"]}>
                <path d="
                    M 0 0
                    l 100 5
                    v -5
                    Z" fill={this.props.fill}></path>
            </svg>
        );
    }
}