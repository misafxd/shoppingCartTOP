import "../css/cartProduct.css";

const CartProduct = ({ image, title, price, description, quantity }) => {
  return (
    <article className="cart-product">
      <div className="cart-product_img">
        <img src={image} alt={title} />
      </div>

      <div className="product-description">
        <div className="product-description_header">
          <h3>{title}</h3>
          <p>$ {price}</p>
        </div>
        <p className="cart-product_description">{description}</p>
        <p className="cart-product_price">Quantity: {quantity}</p>
      </div>
    </article>
  );
};

export default CartProduct;
