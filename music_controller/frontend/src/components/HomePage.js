import React, {Component} from "react";
import RoomJoinPage  from "./RoomJoinPage";
import CreateRoomPage  from "./CreateRoomPage";
import RoomDetails from "./RoomDetails"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

 export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Router>
                <Routes>
                    <Route path='/join' element={<RoomJoinPage />}/>
                    <Route path='/create' element={<CreateRoomPage />}/>
                    <Route path="/room/:roomCode" element={<RoomDetails />}/>
                    <Route path='/' element={<p> This is the Home Page </p>}/>
                </Routes>
            </Router>
          );
    }
 }

