import React, { useState } from "react"
import Display from "./Display"
import Keyboard from "./Keyboard"
export default function Calculator() {
    const [display, setDisplay] = useState("")

    const buttonClicked = (buttonValue) => {
        if (display === "ERROR!!") {
            setDisplay("")
        }
        else {
            if (buttonValue === "=") {
                try {
                    setDisplay(eval(display))
                }
                catch {
                    setDisplay("ERROR!!")
                }
            }
            else if (buttonValue === "←") {

                setDisplay(display.slice(0, -1))
                console.log(display)
            }
            else if (buttonValue === "C") {
                setDisplay("")
            }
            else {

                setDisplay(display + buttonValue)
            }
        }
    }
    return (
        <div>
            <div className="calculator">
                <Display answer={display} />
                <Keyboard buttonClicked={buttonClicked} />

            </div>
            <div>
                <footer>
                    <p id="p1">Created by <span id="credit"> Rushikesh Somvanshi</span></p>
                    <p className="social">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rushikesh-somvanshi-bba96a289/">LinkedIn</a>|
                        <a target="_blank" rel="noreferrer" href="https://github.com/rushi67">GitHub</a>|
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rushi_6_7/">Instagram</a>|
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/rushi_6_7">Twitter</a>|
                        <a target="_blank" rel="noreferrer" href="mailto:somvanshihrishikesh7@gmail.com">Email</a>
                    </p>
                </footer>
            </div>
        </div>
    )
}