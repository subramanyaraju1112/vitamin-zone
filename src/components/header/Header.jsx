import {
  Badge,
  Button,
  Container,
  Dropdown,
  Form,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { PiShoppingCartFill } from "react-icons/pi";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../../context/context";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Image
              src="/public/images/logo/vitamin-shoppe.svg"
              width={40}
              height={40}
              alt="logo"
            />
            <Link to="/">Vitamin Zone</Link>
          </Navbar.Brand>

          <Navbar.Text className="search">
            <Form className="d-flex">
              <Form.Control
                className="me-2"
                style={{ width: 300 }}
                placeholder="Search Product"
                onChange={(e) => {
                  console.log("search", e.target.value);
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
              />
            </Form>
          </Navbar.Text>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                <PiShoppingCartFill color="white" fontSize="20px" />
                <Badge bg="none">{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 350 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((product) => (
                      <span className="cart-item" key={product.id}>
                        <img
                          className="cart-item-image"
                          src={product.image}
                          alt={product.name}
                        />
                        <div className="cart-item-detail">
                          <span>{product.name}</span>
                          <span>₹ {product.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/Cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
