import React,{useState, useEffect} from "react"
import Container from "./Container";

let data = [{
  color: "red",
  title: "NewTitle"
},
{
  color: "blue",
  title: "VeryNewTitle"
}]



function App(props) {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([])
  // const [show, setShow] = useState(false)
  let show = false;
  function setShow(newValue) {
      show = newValue;
      console.log(show);
      document.querySelectorAll('.city').forEach((item) => {
          item.style.display = show?'block':'none'
      })
  }
  useEffect(() => {
    console.log('privet')
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <div>Hallo {props.user.name} lives in {props.user.city}</div>
      <div>{counter}</div>
      <button onClick = {
        ()=>setCounter(counter+1)
      }>increment</button>
      <button onClick= {() => setShow(!show)}>Show</button>
      <div style = {{display: "flex", flexWrap: "wrap"}}>
          {users.map(item => <Container data = {item} show = {show}/>)}
        </div>
      {/* <Container color = "yellow" title="Apple"/>
      <Container color = "green" title="Banana" /> */}
    </div>


  );

}

export default App;
