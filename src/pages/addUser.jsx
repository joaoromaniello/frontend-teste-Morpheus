import React from 'react';
import UserForm from '../components/userForm';

const AddUser = () => {
    const handleUserAdded = () => {
        // You can add additional functionality here if needed
    };

    return (
        <div>
            <UserForm onUserAdded={handleUserAdded} />
        </div>
    );
};

export default AddUser;
