import { useState } from "react";
import "./App.css";
import ItemForm from "./components/ItemForm.jsx";
import ItemList from "./components/ItemList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import EditModal from "./components/EditModal.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (updatedItem) => {
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditingItem(null);
  };

 

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>INVENTORY TRACKER</h1>

      <ItemForm onAddItem={handleAddItem} />

      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      <ItemList
        items={filteredItems}
        onDelete={handleDeleteItem}
        onEdit={setEditingItem}
      />

      {editingItem && (
        <EditModal
          item={editingItem}
          onSave={handleUpdateItem}
          onClose={() => setEditingItem(null)}
        />
      )}
    </div>
  );
}
export default App;
