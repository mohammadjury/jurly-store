import cartIcon from "./images/cart-icon.ico";

export default function Cart() {
  return (
    <>
      <div className="Cart rounded-circle">
        <img
          className="cart-image rounded-circle"
          src={cartIcon}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        />
      </div>
    </>
  );
}
