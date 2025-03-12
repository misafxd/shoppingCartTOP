import { useState } from "react";
import "../css/shoppingCard.css";
import { useOutletContext } from "react-router-dom";

const ShoppingCard = ({ image, title, price, description, id }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartProducts, setCartProducts] = useOutletContext();

  function handleMinusButton() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handlePlusButton() {
    setQuantity(quantity + 1);
  }

  const handleAddToCart = () => {
    setCartProducts((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === id);

      if (!isProductInCart) {
        return [
          ...prevCart,
          {
            image: image,
            title: title,
            price: price,
            description: description,
            id: id,
            quantity: quantity,
          },
        ];
      } else {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
    });
  };

  return (
    <article className="card">
      <img
        width="100"
        className="product-image"
        src={image}
        alt="producto prueba"
      ></img>
      <div className="card-footer">
        <div className="product">
          <h3 className="product-name">{title}</h3>
          <p className="price">${price}</p>
          <p className="description">{description}</p>
        </div>

        <div className="action">
          <div className="add-subs">
            <button
              type="button"
              className="btn-quantity-minus"
              onClick={handleMinusButton}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))
              }
              className="quantity"
              aria-label="Quantity"
            />
            <button
              type="button"
              className="btn-quantity-plus"
              onClick={handlePlusButton}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="add-cart-btn"
            aria-label="Add item to cart"
            onClick={handleAddToCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 -960 960 960"
              width="16px"
              fill="#e3e3e3"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ShoppingCard;
