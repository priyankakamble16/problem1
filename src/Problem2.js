import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com/users";

const Problem2 = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        getRecords();
    }, []);

 
    const getRecords = async () => {
        try {
            const response = await axios.get(API_URL);
            setRecords(response.data.slice(0, 5)); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    
    const addRecord = async () => {
        try {
            const newRecord = { name: "New User", email: "newuser@example.com" };
            const response = await axios.post(API_URL, newRecord);
            setRecords([...records, response.data]);
            alert("Record added successfully!");
        } catch (error) {
            console.error("Error adding record:", error);
        }
    };

 
    const deleteRecord = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setRecords(records.filter(record => record.id !== id));
            alert("Record deleted successfully!");
        } catch (error) {
            console.error("Error deleting record:", error);
        }
    };

    return (
        <div>
            <button className='btn btn-primary' onClick={getRecords}>Refresh Records</button>
            <button className='btn btn-success' onClick={addRecord}>Add Record</button>
            
            <div className='card'>
                <div className='card-header'>
                    <h2>Record List</h2>
                </div>
                <div className='card-body'>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.length > 0 ? (
                                records.map((record) => (
                                    <tr key={record.id}>
                                        <td>{record.id}</td>
                                        <td>{record.name}</td>
                                        <td>{record.email}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => deleteRecord(record.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No records found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem2;
