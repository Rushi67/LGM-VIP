import React, { useState } from "react";
import UserCard from "./UserCard";
import './css/navbar.css'
import Spinner from "./Spinner";
import "./css/userCard.css";


export default function Navbar() {
    const [user, setUser] = useState([]);
    const [isLoader, setIsLoader] = useState(false);

    const loadData = async() => {
        setIsLoader(true);
        setTimeout( async() => {
        const url = "https://reqres.in/api/users?page=1"
        const responce = await fetch(url)
        const info = await responce.json()
        setIsLoader(false);
        setUser(info.data);
        }, 3000);
    }

    return (
        <>
            <nav>
                <h2><b>LinkedIn USERS</b></h2>
                <button className="btn" onClick={loadData}>Get Users
                    {/* {isLoader? <Spinner/> :("Get User")
                    } */}
                    </button>
            </nav>
                {isLoader ? (<Spinner/>): (null)}
            <div>
                {user.map((element) => {
                    return <div className="card" key={element.id}>
                        <UserCard  avatar={element.avatar} first_name={element.first_name} last_name={element.last_name} email={element.email} />
                    </div>
                })}
            </div>
            <br/>
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
        </>
    )
}
