export default function Search() {
  return (
    <>
      <div className="search ps-0 container-xxl d-flex">
        <div className="input-group me-3 ">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
