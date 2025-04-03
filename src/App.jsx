import { useState } from 'react'
import './App.css'
import ItemForm from './components/ItemForm.jsx';
import ItemList from './components/ItemList.jsx';

function App() {
 const [items, setItems] = useState([])

 const handleAddItem = (newItem) => {
  setItems([...items, {...newItem, id: Date.now}])
 }

 const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
 }

 const handleEditItem = (id, updatedItem) => {
    setItems(items.map(item => 
        item.id === id ? {...item, ...updatedItem} : item
    ))
}

return (
    <div className="app-container">
        <h1>INVENTORY TRACKER</h1>
        <ItemForm onAddItem={handleAddItem} />
        
    </div>
    )
}
export default App

