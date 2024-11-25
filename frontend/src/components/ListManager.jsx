import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/ListManager.css';

const ListManager = ({ title, placeholder, onBack }) => {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/items');
        const data = await response.json();
        setList(data);
        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Create item
  const handleCreate = async () => {
    if (newItem.trim()) {
      try {
        const response = await fetch('http://localhost:5000/items', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: newItem }),
        });
        const createdItem = await response.json();
        setList([...list, createdItem]);
        setNewItem('');
        console.log('Created item:', createdItem);
      } catch (error) {
        console.error('Error creating item:', error);
      }
    }
  };

  // Delete item
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/items/${id}`, { method: 'DELETE' });
      const updatedList = list.filter((item) => item._id !== id);
      setList(updatedList);
      console.log('Deleted item ID:', id);
      console.log('Updated list after delete:', updatedList);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Start editing
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(list[index].name);
    console.log('Editing item:', list[index]);
  };

  // Save edited item
  const handleSaveEdit = async () => {
    if (editValue.trim() && editIndex !== null) {
      const item = list[editIndex];
      try {
        const response = await fetch(`http://localhost:5000/items/${item._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: editValue }),
        });
        const updatedItem = await response.json();
        const updatedList = [...list];
        updatedList[editIndex] = updatedItem;
        setList(updatedList);
        setEditIndex(null);
        setEditValue('');
        console.log('Updated item:', updatedItem);
        console.log('Updated list after edit:', updatedList);
      } catch (error) {
        console.error('Error updating item:', error);
      }
    }
  };

  return (
    <div className="topic-content">
      <button className="back-button" onClick={onBack}>
        &#8592; Back
      </button>
      <h2>{title}</h2>
      <div className="add-item">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
        />
        <button onClick={handleCreate}>Add</button>
      </div>
      <div className="card-container">
        {list.map((item, index) => (
          <div key={item._id} className="topic-card">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                <h3>{item.name}</h3>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

ListManager.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ListManager;
