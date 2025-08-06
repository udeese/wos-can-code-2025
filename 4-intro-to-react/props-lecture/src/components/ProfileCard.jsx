function ProfileCard({ title, description, url, age }) {
  // age = age + 1; <-- this is a no-no

  return (
    <div className="card" style={{ width: 434 }}>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{age}</p>
        <p>{description}</p>
        <img src={url} alt="cat" />
      </div>
    </div>
  );
}

export default ProfileCard;
