import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import { RoomProvider } from "./contexts/RoomContext";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <RoomProvider>
        <Router>
          <>
            <Header />
            <AppBody>
              <Sidebar />

              <Switch>
                <Route exact path="/">
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        </Router>
      </RoomProvider>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  flex-direction: "row";
  height: 100vh;
`;
