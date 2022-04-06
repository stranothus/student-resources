import Link from "next/link";
import React from "react";
import ReactDOM from "react-dom";
import style from "./style.module.scss";

interface State {
    scroll: number
}

export default class NavigationTop extends React.Component {
    state: State = {
        scroll: 0
    };

    constructor(props: {}) {
        super(props);

        this.onscroll = this.onscroll.bind(this);
    }
    render(): JSX.Element {
        return (
            <nav className={`nav top ${style.top} ${this.state.scroll ? style.scrolled : ""}`}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        );
    }
    componentDidMount(): void {
        window.addEventListener('scroll', this.onscroll);
    }
    onscroll(): void {
        const rect = document.body.getBoundingClientRect();
        const top = rect?.top;

        this.setState({ scroll: top });
    }
}