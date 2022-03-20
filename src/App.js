import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h3>New component.</h3>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className="person">
      <h1>Alvin Arifin</h1>
      <p>Profession: Developer</p>
    </div>
  );
}

function Friend (){
  return(
    <div className="container">
      <h2>Name: Jhankar</h2>
      <p>job: master</p>
    </div>
  )
}
export default App;
