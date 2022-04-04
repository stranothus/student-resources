import Link from "next/link";
import React from "react";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Welcome home</h1>
                <Link href="/about">About</Link>
            </>
        );
    }
}