import Link from "next/link";
import React, { ChangeEvent } from "react";
import style from "./style.module.scss";

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

interface FooterState {
    inputValue: string,
    inputValid: boolean
}

export default class Footer extends React.Component {
    emailRef:React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();
    state: FooterState = {
        inputValue: "",
        inputValid: false
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
                    <h3>© Quinn Gibson</h3>
                </div>
                <form className={"input " + style.input} action="/api/email/sign-up" method="POST" encType="multipart/form-data">
                    <input onChange={this.checkValue} ref={this.emailRef} name="footer-email"></input>
                    <label htmlFor="footer-email" className={this.state.inputValue ? "inputted" : "empty"}>Get email updates</label>
                    <button type="submit" style={{ visibility: this.state.inputValid ? "visible" : "hidden" }}>Sign up</button>
                </form>
            </footer>
        );
    }
    checkValue(event: ChangeEvent<HTMLInputElement>): void {
        event.preventDefault();
        this.setState({ inputValue: this.emailRef.current?.value || "" });
        this.setState({ inputValid: emailRegex.test(this.emailRef.current?.value || "") });
    }
}