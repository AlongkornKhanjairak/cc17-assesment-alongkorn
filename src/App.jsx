import { useState } from "react";
import "./App.css";
import Router from "./routes/Router";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
      <div className="home2">
        <h1>My Todo</h1>
        <p>new task</p>
        <span></span>
        <p>
          <input
            type="radio"
            name="gender"
            value="Here's a task item"
            // checked
          />
          Here's a task item
          <button>X</button>
        </p>
        <p>
          <input
            type="radio"
            name="gender"
            value="Here's a task item"
            // checked
          />
          Here's a task item
          <button>X</button>
        </p>
        <p>
          <input type="radio" name="gender" value="Here's a task item" />
          Here's a task item
          <button>X</button>
        </p>
        <p>
          <input
            type="radio"
            name="gender"
            value="Here's a task item"
            // checked
          />
          Here's a task item
          <button>X</button>
        </p>
        <p>
          <input
            type="radio"
            name="gender"
            value="Here's a task item"
            // checked
          />
          Here's a task item
          <button>X</button>
        </p>
        <p>
          <input
            type="radio"
            name="gender"
            value="Here's a task item"
            // checked
          />
          Here's a task item
          <button>X</button>
        </p>
        <p>
          <input
            type="radio"
            name="gender"
            value="Here's a task item"
            // checked
          />
          Here's a task item
          <button>X</button>
        </p>
        <p>
          <input
            type="radio"
            name="gender"
            value="Here's a task item"
            // checked
          />
          Here's a task item
          <button>X</button>
        </p>
        <div className="login">
          <button className="login__Btu">
            <h1>LOG OUT</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
