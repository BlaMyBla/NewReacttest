import {Card, Button} from 'react-bootstrap'

export default function InfoBox(props) {
    
    return(
        <Card style={{ width: '18rem' }} bg="light">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
            <p><b>email</b>: {props.data.email}</p>
            <p><b>website</b>: {props.data.website}</p>
            {props.show&&<p><b>city</b>: {props.data.address.city}</p>}

            {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card>
    )
}