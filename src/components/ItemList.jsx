import react from "react";
import "./ItemList.css";

const ItemList = ({ items, onDelete, onEdit }) => {
  return (
    <div className="item-list">
      <h2>Current Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr className={item.quantity <= 5 ? "low-stock" : ""}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.category}</td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(item.id)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => onDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {items.length === 0 && <p>No items found.</p>}
    </div>
  );
};

export default ItemList;
