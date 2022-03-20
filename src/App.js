import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Person name="Manna" naika='punnima'></Person>
      <Person name='Sakib' naika='opu'></Person>
      <h3>New component.</h3>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Naika: {props.naika}</p>
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
