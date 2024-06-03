import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8000/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUser(response.data);
        };
        fetchUser();
    }, []);

    return (
        <div>
            {user && user.role === 'admin' ? (
                <h1>Welcome Admin</h1>
            ) : (
                <h1>Welcome User</h1>
            )}
        </div>
    );
};

export default Dashboard;
