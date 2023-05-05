import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8000/admin/trainerLogin',
        // Replace the URL with the endpoint for your server API that returns the data for the dashboard
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Field 1</th>
            <th>Field 2</th>
            <th>Field 3</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.field1}</td>
              <td>{item.field2}</td>
              <td>{item.field3}</td>
              {/* Add more table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = true; // Replace with your authentication logic
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/adminLogin" />
        )
      }
    />
  );
};

export {AdminDashboard, PrivateRoute} ;
