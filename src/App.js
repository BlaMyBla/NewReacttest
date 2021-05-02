import React,{useState, useEffect} from "react"
// import Container from "./Container";
// import {Button, Card} from 'react-bootstrap'
import Header from './Components/Header'
import InfoBox from './Components/InfoBox'
// let data = [{
//   color: "red",
//   title: "NewTitle"
// },
// {
//   color: "blue",
//   title: "VeryNewTitle"
// }]


function App(props) {
  // const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([])
  const [filtered, setFiltered] = useState(null)
  const [show] = useState(false)
  const [genderRadio, setGenderRadio] = useState(null)
  const [searchInput, setSearchInput] = useState("")


  useEffect(() => {
    console.log(`HALLO`);
  },[searchInput, genderRadio])

  useEffect(() => {
    console.log('privet')
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      setUsers(data) 
      setFiltered(data)
    })
  },[]) 
  function findGender(name) {
   let fullName = name.split(/[ ,]+/);
   let char = fullName[0].slice(-1);
   if (char === "e" || char === "a") {
     return "f"
   } else {
     return "m"
   }
  }
  function searchHandler(e) {
      // const genderRadio = document.querySelectorAll('input[name="gender"]');
      // let selectedValue;
      //       for (const rb of genderRadio) {
      //           if (rb.checked) {
      //               selectedValue = rb.value;
      //               break;
      //           }
      //       }
      // console.log(genderRadio);
      setSearchInput(e.target.value)
      console.log(e.target.value);
      let filtered = users.filter(user => {
      if(genderRadio){
      return findGender(user.name)===genderRadio && ( user.name.match( new RegExp(e.target.value,"i")) || user.email.match( new RegExp(e.target.value,"i")))
      }else{
         return user.name.match( new RegExp(e.target.value,"i")) || user.email.match( new RegExp(e.target.value,"i"))
      }
    })
      setFiltered(filtered);
  }
  function radioHandler(e) {
      let genderRadio = e.target.value; 
      setGenderRadio(genderRadio);
      let filtered = users.filter(user => {
        if(searchInput){
        return findGender(user.name)===genderRadio && ( user.name.match( new RegExp(searchInput,"i")) || user.email.match( new RegExp(searchInput,"i")))
        }else{
           return findGender(user.name)===genderRadio
        }
      })
        setFiltered(filtered);    
  }
  return (
    <div>
      <Header searchHandler={searchHandler} radioHandler={radioHandler}/>
      {/* <div style = {{display: "flex", flexWrap: "wrap"}}>
          {filtered.map(item => <Container data = {item} show = {show} />)}
     </div> */}
     <div style = {{display: "flex", flexWrap: "wrap"}}>
          {filtered&&filtered.map(item => <InfoBox key={item.id} data = {item} show = {show} />)}
     </div>
      {/* <div>Hallo {props.user.name} lives in {props.user.city}</div>
      <div>{counter}</div>
      <button onClick = {
        ()=>setCounter(counter+1)
      }>increment</button>
      <button onClick= {() => setShow(!show)}>Show</button>
      <Button variant="primary">Primary</Button>{' '}
      <input type="search" onChange={searchHandler} />
      <label>Male</label>
      <input type="radio" name="gender" value="m" onChange={radioHandler}/>
      <label>Female</label>
      <input type="radio" name="gender" value="f" onChange={radioHandler}/>
      <div style = {{display: "flex", flexWrap: "wrap"}}>
          {filtered.map(item => <Container data = {item} show = {show} />)}
        </div> */}
      {/* <Container color = "yellow" title="Apple"/>
      <Container color = "green" title="Banana" /> */}
    </div>


  );

}

export default App;
