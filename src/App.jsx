import { useState } from "react";
import "./App.css";
import ItemForm from "./components/ItemForm.jsx";
import ItemList from "./components/ItemList.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now }]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditItem = (id) => {
    const newName = prompt("Enter the new name: ");
    if (newName) {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, name: newName } : item
        )
      );
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>INVENTORY TRACKER</h1>

      <ItemForm onAddItem={handleAddItem} />

      <SearchBar  searchTerm={searchTerm} onSearch={setSearchTerm} />

      <ItemList
        items={filteredItems}
        // items={items}
        onDelete={handleDeleteItem}
        onEdit={handleEditItem}
      />
    </div>
  );
}
export default App;
