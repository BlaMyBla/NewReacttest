import {Navbar, Nav, NavDropdown, Form, FormControl,InputGroup, Button} from 'react-bootstrap'
export default function Header({searchHandler, radioHandler}) {
    
    return(
        <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Radio aria-label="Radio button for following text input" name="gender" value="f" onChange={radioHandler} />
                    <InputGroup.Radio aria-label="Radio button for following text input" name="gender" value="m" onChange={radioHandler} />
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with radio button" onChange={searchHandler} />
            </InputGroup>
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}