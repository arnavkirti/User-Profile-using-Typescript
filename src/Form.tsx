import React, { useState } from "react";
import "./form.css";

function UserProfilePage() {
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    birthday: "",
    bio: "",
    profilePicture: null,
  });

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProfileData({
      ...profileData,
      profilePicture: file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., save data to a server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>User Profile</h1>
      <div>
        <label htmlFor="profilePicture">Upload Profile Picture:</label>
        <input type="file" id="profilePicture" onChange={handleImageUpload} />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={profileData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={profileData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={profileData.birthday}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          value={profileData.bio}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Profile</button>
    </form>
  );
}

export default UserProfilePage;
