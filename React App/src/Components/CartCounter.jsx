export default function CartCounter(props) {
  const cartItems = props.cartItems;
  return (
    <>
      <div
        className="countercart"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        {cartItems.length}
      </div>
    </>
  );
}
