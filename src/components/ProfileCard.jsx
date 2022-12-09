import React from 'react';
import './ProfileCard.css';

export const ProfileCard = ({
  name,
  description,
  coverImage,
  profileImage,
}) => {
  return (
    <div className="Card">
      <div className="cover-image-wrapper">
        <img className="cover-image" src={coverImage} alt="" width="100%" />
      </div>
      <div className="profile-photo-wrapper">
        <img src={profileImage} alt="" width="100%" />
      </div>

      <div className="about">
        <div className="name">{name}</div>
        <div className="description"> {description}</div>
      </div>
      <button className="follow-btn">Follow</button>
    </div>
  );
};

ProfileCard.defaultProps = {
  name: 'Sarah Doe',
  description: 'Full time Associate Software Engineer at ABC Company',
  coverImage:
    'https://res.cloudinary.com/dloekv0xp/image/upload/v1670593591/assets/cover-1_c6xov2.jpg', //replace with cover image
  profileImage:
    'https://res.cloudinary.com/dloekv0xp/image/upload/v1670593587/assets/profile-2_bnpuw9.jpg', //replace with profile image
};
