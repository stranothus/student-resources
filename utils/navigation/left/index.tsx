import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

export default class NavigationLeft extends React.Component {
    render(): JSX.Element {
        return (
            <nav className={"nav left " + style.left}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        );
    }
}