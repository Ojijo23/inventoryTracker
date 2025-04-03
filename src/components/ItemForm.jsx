import { useState } from "react";
import "./itemForm.css";

const ItemForm = ({ onAddItem }) => {
  const [item, setItem] = useState({
    name: "",
    quantity: "",
    price: "",
    category: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.name.trim()) {
      alert("Item name cannot be empty!");
      return;
    }
    onAddItem({ ...item, id: Date.now() });
    setItem({ name: "", quantity: 0, price: 0, category: "" });
  };

  return (
    <div className="item-form">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-group">
          <label htmlFor="name">Item Name</label>
          <input
            id="name"
            type="text"
            className="form-input"
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            className="form-input"
            value={item.quantity}
            placeholder="Enter Quantity"
            onChange={(e) => setItem({ ...item, quantity: e.target.valueAsNumber })}
            
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            className="form-input"
            value={item.price}
            onChange={(e) => setItem({ ...item, price: parseFloat(e.target.valueAsNumber) })}
            placeholder="Enter price"
            
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="form-select"
            value={item.category}
            onChange={(e) => setItem({ ...item, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
