import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    let address = ''
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky='top'>
      <Container>
        <Navbar.Brand>GnoFundMe</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
          {!address ? 
          <Button type='primary' className=" mr-sm-2">
            Connect Wallet
          </Button> : 
          <Navbar.Text>Connected</Navbar.Text>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
