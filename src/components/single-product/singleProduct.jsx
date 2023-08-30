/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";
import { CartState } from "../../context/context";

const SingleProduct = ({ products }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={products.image} alt={products.name} />
        <Card.Body>
          <Card.Title>
            {products.brand}'s {products.name}
          </Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {products.price}</span>
          </Card.Subtitle>
          {cart.some((product) => product.id === products.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: products,
                });
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              disabled={!products.inStock}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: products,
                })
              }
            >
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
export default SingleProduct;
