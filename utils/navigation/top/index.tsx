import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

export default class NavigationTop extends React.Component {
    render(): JSX.Element {
        return (
            <nav className={"nav top " + style.top}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        );
    }
}