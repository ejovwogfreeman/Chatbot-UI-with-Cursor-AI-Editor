import React from "react";
import "./Profile.css"; // Create a CSS file for styling

interface ProfileProps {
  initials: string;
  isUser: boolean; // To differentiate between user and bot
}

const Profile: React.FC<ProfileProps> = ({ initials, isUser }) => {
  return <div className={`profile ${isUser ? "user" : "bot"}`}>{initials}</div>;
};

export default Profile;
