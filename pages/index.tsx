import Link from "next/link";
import React from "react";
import Footer from "../utils/footer";
import Header from "../utils/header";
import NavigationTop from "../utils/navigation/top";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <NavigationTop></NavigationTop>
                <Header image="https://st4.depositphotos.com/6064568/23023/v/600/depositphotos_230236108-stock-illustration-male-and-female-students-in.jpg">Student Resources</Header>
                <Footer></Footer>
            </>
        );
    }
}