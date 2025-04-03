import { useState } from "react";
import "./itemForm.css";

const ItemForm = ({ onAddItem }) => {
    const [item, setItem] = useState({
        name: "",
        quantity: 0,
        price: 0,
        category: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!item.name.trim()) {
            alert("Item name cannot be empty!");
            return;
        }
        onAddItem(item);
        setItem({ name: "", quantity: 0, price: 0, category: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="inventory-form">
            <h2 className="form-title">Add New Item</h2>
            <input className="form-input"
                type="text"
                value={item.name}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
                placeholder="Item Name"
            />
            <input className="form-input"
                type="number"
                value={item.quantity}
                onChange={(e) => setItem({ ...item, quantity: Number(e.target.value) })}
                placeholder="Item Quantity"
            />
            <input className="form-input"
                type="number"
                value={item.price}
                onChange={(e) =>
                    setItem({ ...item, price: parseFloat(e.target.value) || 0 })}
                min="0"
                step="0.01"
                placeholder="Item Price"
            />
            <select className="form-select"
                value={item.category}
                onChange={(e) => setItem({ ...item, category: e.target.value })}
               
            >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
            </select><br></br>
            <button className="submit-btn" type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;
