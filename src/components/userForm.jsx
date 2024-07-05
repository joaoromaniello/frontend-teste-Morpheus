import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserAdded }) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { id: parseInt(id), name };
        try {
            const response = await axios.post('http://localhost:3000/users', newUser, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            onUserAdded();
            setName('');
            setId('');
            setError('');
        } catch (error) {
            console.error('Error adding user:', error);
            setError('Usuário com esse ID já existe!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adicionar usuário</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>ID:</label>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} required />
            </div>
            <div>
                <label>Nome:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <button type="submit">Adicionar usuário</button>
        </form>
    );
};

export default UserForm;
