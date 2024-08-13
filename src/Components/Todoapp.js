import React, { useState } from "react";

function TodoApp() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    // Function to handle changes in the input field
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    // Function to handle adding a new task
    const handleAddTask = () => {
        if (input.trim()) { // Check if the input is not empty
            setTasks([...tasks, { text: input, completed: false }]);
            setInput(""); // Clear the input field after adding the task
        }
    };

    // Function to handle removing a task
    const handleRemoveTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    // Function to handle updating a task
    const handleUpdateTask = (index) => {
        const updatedText = prompt("Update task:", tasks[index].text);
        if (updatedText !== null) {
            setTasks(tasks.map((task, i) =>
                i === index ? { ...task, text: updatedText } : task
            ));
        }
    };

    // Function to handle toggling the completion status of a task
    const handleToggleComplete = (index) => {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        ));
    };

    // Styles
    const containerStyle = {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
    };

    const inputContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px"
    };

    const inputStyle = {
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        width: "calc(100% - 80px)",
        maxWidth: "400px",
        outline: "none",
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)"
    };

    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
        marginLeft: "10px",
        transition: "background-color 0.3s ease"
    };

    const buttonHoverStyle = {
        backgroundColor: "#0056b3"
    };

    const listStyle = {
        listStyleType: "none",
        padding: "0",
        margin: "0",
        textAlign: "left"
    };

    const itemStyle = {
        padding: "10px",
        borderBottom: "1px solid #ddd",
        fontSize: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    };

    const removeButtonStyle = {
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        transition: "background-color 0.3s ease"
    };

    const removeButtonHoverStyle = {
        backgroundColor: "#c82333"
    };

    const updateButtonStyle = {
        backgroundColor: "#ffc107",
        color: "black",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        transition: "background-color 0.3s ease"
    };

    const updateButtonHoverStyle = {
        backgroundColor: "#e0a800"
    };

    const completeButtonStyle = (completed) => ({
        backgroundColor: completed ? "#28a745" : "#6c757d",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        transition: "background-color 0.3s ease"
    });

    const completeButtonHoverStyle = (completed) => ({
        backgroundColor: completed ? "#218838" : "#5a6268"
    });

    return (
        <div style={containerStyle}>
            <h1>Todo App</h1>
            <div style={inputContainerStyle}>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="New task"
                    style={inputStyle}
                />
                <button
                    onClick={handleAddTask}
                    style={buttonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Add
                </button>
            </div>
            <ul style={listStyle}>
                {tasks.map((task, index) => (
                    <li key={index} style={{ ...itemStyle, textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.text}
                        <div>
                            <button
                                onClick={() => handleToggleComplete(index)}
                                style={completeButtonStyle(task.completed)}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = completeButtonHoverStyle(task.completed).backgroundColor}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = completeButtonStyle(task.completed).backgroundColor}
                            >
                                {task.completed ? "Undo" : "Complete"}
                            </button>
                            <button
                                onClick={() => handleUpdateTask(index)}
                                style={updateButtonStyle}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = updateButtonHoverStyle.backgroundColor}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = updateButtonStyle.backgroundColor}
                            >
                                Update
                            </button>
                            <button
                                onClick={() => handleRemoveTask(index)}
                                style={removeButtonStyle}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = removeButtonHoverStyle.backgroundColor}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = removeButtonStyle.backgroundColor}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
