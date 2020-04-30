import React from "react";
import "./App.css";
import { connect } from "react-redux";
//import { userPost } from "./store/action/postAction";
import { postMiddleware } from "./store/middlewar/postMiddle";

function App(props) {
  console.log(props);
  return (
    <div>
      <h1>Redux Practise</h1>
      <button onClick={props.userPost}>Fetch Data</button>
      {props.post.map((post,id) => (
        <p key={id}>{post.title}</p>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapsDispatchToProps = (dispatch) => ({
  userPost: () => {
    dispatch(postMiddleware());
  },
});

export default connect(mapStateToProps, mapsDispatchToProps)(App);
