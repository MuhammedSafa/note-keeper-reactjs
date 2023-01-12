import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Notes from "../notes.js";
import Note from "./Note.jsx";

function App(){

	return <div><Header />{Notes.map( note => <Note key={note.key} title={note.title} content={note.content} />)}<Footer /></div>;
}

export default App;

