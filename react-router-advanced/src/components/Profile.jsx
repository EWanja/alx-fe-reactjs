import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'
import ProtectedRoute from './ProtectedRoute'

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details" style={{ marginRight: '10px' }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route
          path="details"
          element={
            <ProtectedRoute>
              <ProfileDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <ProfileSettings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default Profile;
