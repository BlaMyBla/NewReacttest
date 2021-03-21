import React from "react"

export default function Container(props){ //{data:{name, email,address:{city}}}){
    return (
        <div style={{backgroundColor: "wheat", width: "200px", padding: "20px", margin: "20px"}}>
            <h2>{props.data.name}</h2>
            <p><b>email</b>: {props.data.email}</p>
            <p><b>website</b>: {props.data.website}</p>
            {props.show&&<p><b>city</b>: {props.data.address.city}</p>}
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
