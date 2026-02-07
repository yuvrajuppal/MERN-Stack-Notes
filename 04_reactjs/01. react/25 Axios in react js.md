Axios is a promise-based HTTP client for making API calls in React. Install with `npm install axios`, then import and use simple methods like `.get()`, `.post()`.
```
npm install axios
```
## GET Request Example (Complete)
```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function GetUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{color: 'red'}}>{error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

```

## POST Request Example (Complete)

```jsx
import { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      setResult(`Added: ${response.data.name}`);
      setFormData({ name: '', email: '' }); // Reset form
    } catch (err) {
      setError('Failed to add user');
      console.error(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={e => setFormData({...formData, name: e.target.value})}
      />
      <input
        placeholder="Email"
        value={formData.email}
        onChange={e => setFormData({...formData, email: e.target.value})}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Adding...' : 'Add User'}
      </button>
      
      {result && <p style={{color: 'green'}}>{result}</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}
```

