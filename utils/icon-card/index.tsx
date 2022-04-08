import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

interface IconProps {
    icon: string,
    href: string
}

export default class IconCard extends React.Component<IconProps> {
    render(): JSX.Element {
        return (
            <Link href={this.props.href}>
                <div className={"icon-card " + style["icon-card"]}>
                    <i id="icon" className="material-icons">{this.props.icon}</i>
                    <p>{this.props.children}</p>
                </div>
            </Link>
        );
    }
}