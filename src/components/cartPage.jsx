import { useOutletContext } from "react-router-dom";
import CartProduct from "./cartProduct";

const CartPage = () => {
  const [cartProducts] = useOutletContext();

  const total = cartProducts.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);

  return (
    <>
      <h1>Cart</h1>
      <div className="cartPage-container">
        <section className="cart-products-container">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                quantity={product.quantity}
              />
            ))
          ) : (
            <h2>Your Cart is empty!!</h2>
          )}
        </section>
        <section className="payment-details">
          <ul>
            {cartProducts.map((product) => (
              <li>
                <p>{product.title}</p>
                <p>subtotal: ${product.price * product.quantity}</p>
              </li>
            ))}
          </ul>
          <hr className="divisor" />
          <div className="total">
            <h3>Total</h3>
            <p>{total}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CartPage;
