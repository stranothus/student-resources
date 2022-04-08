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
                    <p>Welcome to Student Resources! Student Resources is a global platform enabling students from all backgrounds to connect with each other for study, assistance, and friendships all in one place. You can access a pomodoro timer, set goals, track progress, and more if you're a solo player. No matter who you are, if you're a student, Student Resources has something to offer to you. </p>
                </AccentBlock>
                <Footer></Footer>
            </>
        );
    }
}