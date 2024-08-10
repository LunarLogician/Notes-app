import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function no(x) {
  return <Note title={x.title} content={x.content} />;
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(no)}
      <Footer />
    </div>
  );
}

export default App;
