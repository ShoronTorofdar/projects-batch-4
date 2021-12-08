import logo from './logo.svg';
import './App.css';

function App() {
const nayoks = ['Rubel','bapparaz','koober', 'bappi', 'shuvo'];

const cinema = [
  {nayok:'koober', nayika:'kopila'},
  {nayok:'Rubel', nayika:'Moushum'},
  {nayok:'Razzak', nayika:'shabana'} 
]

  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="Chekha"></Person>
      <Person name={nayoks[2]} nayika="kopila"></Person>
      </div>
  );
}

/* <p id="title">Title</p>
<Friend phone="0163505724" address="Naogaon"></Friend>
      <Friend phone="01679173877" address="Dhaka"></Friend>
      <Friend phone="016" address="Khulna"></Friend>
      <Friend phone="0189" address="Bogura"></Friend>
 */


function Person(props){
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '10px'
  }
  return(
    <div style={person}>
    <h1> Name: {props.name}</h1>
    <h4>Hero of:{props.nayika }</h4>
  </div>
  );
}

function cinema(props){
  return (
    <div>
      <h2>nayok:{props.nayok}</h2>
      <h4>Nayika:{props.nayika}</h4>
    </div>
  )
}

function Friend(props){
  console.log(props)
  return(
    <div className="person">
      <h3>Phone:{props.phone}</h3>
      <h5>Address:{props.address}</h5>
    </div>
  )
}

export default App;
/* <Person name="Rubel" nayika="Moushumi"></Person>
<Person name="BappaRaz" nayika="Chekha"></Person>
<Person name="Koober" nayika="kopila"></Person> */