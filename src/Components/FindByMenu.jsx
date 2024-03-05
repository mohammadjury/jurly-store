import React, { createContext, useState } from "react";
import "../App.css";

const SelectedBrandsContext = createContext(null);

export default function FindByMenu() {
  const [isChecked, setIsChecked] = useState({
    Nike: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setIsChecked({ ...isChecked, [name]: checked });
  };

  const checkedKeys = [];
  for (const key in isChecked) {
    if (isChecked[key]) {
      checkedKeys.push(key);
    }
  }
  console.log(checkedKeys);

  return (
    <>
      <SelectedBrandsContext.Provider value={{ isChecked, setIsChecked }}>
        <div className="menu d-none d-md-block p-2">
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
                name="checkbox2"
                checked={isChecked.checkbox2}
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
                name="checkbox3"
                checked={isChecked.checkbox3}
                onChange={handleChange}
              />
              <label className="form-check-label">The Nourth Face</label>
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
          <button type="submit" className="btn btn-outline-dark mt-2  w-95">
            Find
          </button>
        </div>
      </SelectedBrandsContext.Provider>
    </>
  );
}
