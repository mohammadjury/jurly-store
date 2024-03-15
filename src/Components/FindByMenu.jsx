import React, { createContext, useState } from "react";
import "../App.css";

const SelectedBrandsContext = createContext(null);

export default function FindByMenu({ onSelectBrand }) {
  const [isChecked, setIsChecked] = useState({
    Nike: false,
    Adidas: false,
    TNF: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    const checkedBrands = { ...isChecked, [name]: checked };
    setIsChecked(checkedBrands);
    onSelectBrand(checkedBrands);
  };

  //console.log(isChecked);

  return (
    <>
      <div className="menu bg-white d-none d-sm-block p-2">
        <h4>Brand</h4>
        <form action="">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="check1"
              name="Nike"
              checked={isChecked.Nike}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="check1">
              Nike
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="check2"
              name="Adidas"
              checked={isChecked.Adidas}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="check2">
              Adidas
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="TNF"
              checked={isChecked.TNF}
              onChange={handleChange}
            />
            <label className="form-check-label">The North Face</label>
          </div>
        </form>
        <br></br>
        <h4>Size</h4>
        <form action="">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="check1"
              name="option1"
              value="something"
            />
            <label className="form-check-label" htmlFor="check1">
              XS
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="check2"
              name="option2"
              value="something"
            />
            <label className="form-check-label" htmlFor="check2">
              S
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">M</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">L</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">XL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">2XL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">3XL</label>
          </div>
        </form>
      </div>
    </>
  );
}
