import { useState } from "react";
import "../styles/EditModal.css";

const EditModal = ({ item, onSave, onClose }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedItem);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit Item</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Item Name</label>
            <input
              id="name"
              type="text"
              className="form-input"
              value={editedItem.name}
              onChange={(e) => 
                setEditedItem({ ...editedItem, name: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              type="number"
              className="form-input"
              value={editedItem.quantity}
              onChange={(e) =>
                setEditedItem({ 
                  ...editedItem, 
                  quantity: e.target.valueAsNumber 
                })
              }
              min="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              className="form-input"
              value={editedItem.price}
              onChange={(e) =>
                setEditedItem({
                  ...editedItem,
                  price: parseFloat(e.target.value) || 0,
                })
              }
              min="0"
              step="0.01"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className="form-select"
              value={editedItem.category}
              onChange={(e) => 
                setEditedItem({ ...editedItem, category: e.target.value })
              }
              required
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
            </select>
          </div>

          <div className="modal-actions">
            <button 
              type="button" 
              className="cancel-btn" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="save-btn"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;