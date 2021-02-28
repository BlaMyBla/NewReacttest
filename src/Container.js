import React from "react"

export default function Container(props){ //{data:{name, email,address:{city}}}){
    return (
        <div style={{backgroundColor: "wheat", width: "200px", padding: "20px", margin: "20px"}}>
            <h1>{props.data.name}</h1>
            <p><b>email</b>: {props.data.email}</p>
            {<p className="city" style = {{display: "none"}} ><b>city</b>: {props.data.address.city}</p>}

        </div>
    )
}

// const test = {
// 	"userId": 1,
// 	"id": 1,
// 	"title": "delectus aut autem",
// 	"completed": false,
//     "adress":{
//         "city": 'berlin'
//     }
// }



// const {title:name,adress:{city}} = test
