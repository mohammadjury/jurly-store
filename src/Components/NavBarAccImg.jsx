import accountImage from "./images/img_avatar5.png";

export default function accountImg() {
  return (
    <>
      <div className="accountImage mx-2">
        <img
          className="account-image rounded-circle"
          src={accountImage}
          alt="Card image"
        />
      </div>
    </>
  );
}
