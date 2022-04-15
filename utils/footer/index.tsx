import Link from "next/link";
import React from "react";
import styles from "../../public/variables.module.scss";
import TopZag from "../shapes/top/zag";
import style from "./style.module.scss";

interface FooterState {
    inputValue: string
}

export default class Footer extends React.Component {
    emailRef:React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
    state: FooterState = {
        inputValue: ""
    };

    constructor(props: {}) {
        super(props);

        this.checkValue = this.checkValue.bind(this);
    }
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
                <div className={"input " + style.input}>
                    <input onChange={this.checkValue} ref={this.emailRef} name="footer-email"></input>
                    <label htmlFor="footer-email" className={this.state.inputValue ? "inputted" : "empty"}>Get email updates</label>
                </div>
            </footer>
        );
    }
    checkValue(): void {
        this.setState({ inputValue: this.emailRef.current?.value || "" });
    }
}