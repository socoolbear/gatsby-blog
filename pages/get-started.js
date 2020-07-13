import Nav from '../components/nav';
import React from "react";

export default () => {
    return (
        <>
            <Nav/>
            <div className={"container"}>
                <h1>시작하기</h1>

                <p> npm install </p>

                <code>npm i -g socoolbear-cli</code>
            </div>
        </>
    )
}