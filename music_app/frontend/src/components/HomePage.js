import React, { Component } from "react"
import { render } from "react-dom"
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,  
} from "react-router-dom";

import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Router>
            <Switch>
                <Route path="/"><p>This is the home page</p></Route>
                <Route path="/join" Component={RoomJoinPage} />
                <Route path="/create" Component={CreateRoomPage} />
            </Switch>
        </Router>
        );
    }
}

// const appDiv = document.getElementById("app")
// render(<App/>, appDiv)