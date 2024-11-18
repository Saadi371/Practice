import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editInput, setEditInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditing = (index) => {
    setIsEditing(index);
    setEditInput(tasks[index]);
  };

  const saveEdit = (index) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? editInput : task));
    setTasks(updatedTasks);
    setIsEditing(null);
    setEditInput("");
  };

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', padding: '20px' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          style={{
            padding: '10px',
            fontSize: '16px',
            marginRight: '5px',
            width: '200px',
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '20px 0', textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              backgroundColor: '#f8f9fa',
              padding: '10px',
              marginBottom: '5px',
              border: '1px solid #dee2e6',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  style={{
                    padding: '5px',
                    fontSize: '14px',
                    flex: 1,
                    marginRight: '5px',
                  }}
                />
                <button
                  onClick={() => saveEdit(index)}
                  style={{
                    padding: '5px 10px',
                    fontSize: '14px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    marginRight: '5px',
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(null)}
                  style={{
                    padding: '5px 10px',
                    fontSize: '14px',
                    backgroundColor: '#6c757d',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span style={{ flex: 1 }}>{task}</span>
                <button
                  onClick={() => startEditing(index)}
                  style={{
                    padding: '5px 10px',
                    fontSize: '14px',
                    backgroundColor: '#ffc107',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    marginRight: '5px',
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  style={{
                    padding: '5px 10px',
                    fontSize: '14px',
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
