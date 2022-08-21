import { useContext, useEffect, useState } from "react";
import { BsTrash, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { GlobalContext } from "./context/Global";

function App() {
  const { products, setProduct, fetchProducts, DeleteProduct, AddProduct } =
    useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      id: parseInt(products.length + 1),
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    AddProduct(form);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div class="container mt-4">
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="alert alert-primary"
      >
        <div>
          <h5>All Products:</h5>
        </div>
        <button className="btn btn-info" onClick={() => setShow(!show)}>
          {show ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
        </button>
      </div>
      {show && (
        <form className="p-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            className="form-control mt-4"
            placeholder="title"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="price"
            className="form-control mt-4"
            placeholder="price"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="description"
            className="form-control mt-4"
            placeholder="description"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="image"
            className="form-control mt-4"
            placeholder="image"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="category"
            className="form-control mt-4"
            placeholder="category"
            onChange={onChangeHandler}
          />
          <button type="submit" className="btn btn-success mt-4">
            submit
          </button>
        </form>
      )}
      <hr />
      <div className="p-4">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">price</th>
              <th scope="col">category</th>
              <th scope="col">image</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map(
              ({ id, title, price, description, category, image }) => {
                return (
                  <tr>
                    <th scope="row">{id}</th>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{category}</td>
                    <td>
                      <img src={image} alt={title} width="40px" />
                    </td>
                    <td>
                      <span
                        className="btn btn-danger"
                        onClick={() => DeleteProduct(id)}
                      >
                        <BsTrash />
                      </span>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
