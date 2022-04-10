import React from "react";
import style from "./style.module.scss";
import { shapeProps } from "../../shapeProps";

export default class TopZag extends React.Component<shapeProps> {
    render(): JSX.Element {
        return (
            <svg viewBox="0 0 100 5" className={style["top-zag"]}>
                <path d="
                    M 100 5
                    l -100 -5
                    v 5
                    Z" fill={this.props.fill}></path>
            </svg>
        );
    }
}