import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users');
            setUsers(response.data);
            setFilteredUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        setFilteredUsers(
            users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
        );
    }, [filter, users]);

    return (
        <div>
            <h2>Listagem de usuários</h2>
            <div>
                <label>Filtre por nome:</label>
                <input 
                    type="text" 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)} 
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
