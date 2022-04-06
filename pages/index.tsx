import Link from "next/link";
import React from "react";
import AccentBlock from "../utils/accent-block";
import Footer from "../utils/footer";
import Header from "../utils/header";
import NavigationTop from "../utils/navigation/top";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <NavigationTop></NavigationTop>
                <Header image="https://st4.depositphotos.com/6064568/23023/v/600/depositphotos_230236108-stock-illustration-male-and-female-students-in.jpg">Student Resources</Header>
                <AccentBlock>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </AccentBlock>
                <Footer></Footer>
            </>
        );
    }
}