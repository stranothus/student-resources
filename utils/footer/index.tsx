import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

export default class Footer extends React.Component {
    render(): JSX.Element {
        return (
            <footer className={"footer " + style.footer}>
                <div className={"links " + style.links}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </div>
                <div className={"information " + style.information}>
                    <h2>Student Resources</h2>
                    <h3>Quinn Gibson</h3>
                </div>
                <input placeholder="Email"></input>
            </footer>
        );
    }
}