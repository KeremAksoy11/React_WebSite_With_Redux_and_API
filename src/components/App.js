import React from "react";
import PostList from "./PostList";

const App = () =>{
    return <div className="ui container">{<PostList/>}</div> // neticesinde yazılan action, reducersların hepsi componenteki postlist.js toplandı ve toplanan verileri göster dedik.
};

export default App;