import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
    <Container fluid>
      {/* <CreateForm recordType="AddTransaction" recordFields={FormBuilder["AddTransaction"]} /> */}
      <Navbar.Brand href="#">Finance Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link
            href="/"
            style={{
              color: window.location.pathname === "/dashboard" && "white",
            }}
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            href="/finances"
            style={{
              color: window.location.pathname === "/finances" && "white",
            }}
          >
            Transactions
          </Nav.Link>
          <Nav.Link
            href="/accounts"
            style={{
              color: window.location.pathname === "/accounts" && "white",
            }}
          >
            Accounts
          </Nav.Link>
          <Nav.Link
            href="/categories"
            style={{
              color: window.location.pathname === "/categories" && "white",
            }}
          >
            Categories
          </Nav.Link>
          <Nav.Link href="#">Reports</Nav.Link>
          <Nav.Link href="#">Settings</Nav.Link>
        </Nav>

        {/* username and icon */}
        {/* <Nav>
          <Nav.Link>Hi, {currentUser && currentUser.name}</Nav.Link>
          <Button onClick={() => logout()}>Logout</Button>
        </Nav> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;