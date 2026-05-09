function ProfileCard({ name, role, avatarUrl, skills }) {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{role}</p>
      <div className="skills">
        {skills.map((skill) => (
          <span key={skill} className="badge">{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default ProfileCard
