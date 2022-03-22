// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";


const singers = [
  {name: 'Dr. Kamal', job: 'singer'},
  {name: 'Asif Khan', job: 'singer'},
  {name: 'Minar', job: 'singer'},
]

function App() {
  const nayoks = ["Rubel", "BappaRaz", "Joshim", 'Manna', 'Salman Shah', 'Riyaz'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person> )
      }
      {/* <Person name={nayoks[0]} naika="punnima"></Person>
      <Person name={nayoks[1]} naika="Shabunur"></Person>
      <Person name={nayoks[2]} naika="Shabana"></Person> */}
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
      <p></p>
    </div>
  );
}

function Friend() {
  return (
    <div className="container">
      <h2>Name: Jhankar</h2>
      <p>job: master</p>
    </div>
  );
}
export default App;
