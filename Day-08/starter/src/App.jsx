import ProfileCard from './components/ProfileCard'

const profiles = [
  { name: 'Alice Johnson', role: 'Frontend Developer', avatarUrl: 'https://i.pravatar.cc/150?img=1', skills: ['React', 'CSS', 'TypeScript'] },
  { name: 'Bob Smith', role: 'Backend Developer', avatarUrl: 'https://i.pravatar.cc/150?img=2', skills: ['Java', 'Spring Boot', 'MySQL'] },
  { name: 'Carol Williams', role: 'Full Stack Developer', avatarUrl: 'https://i.pravatar.cc/150?img=3', skills: ['React', 'Node.js', 'PostgreSQL'] },
]

function App() {
  return (
    <div className="app">
      <h1>Team Profiles</h1>
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
      </div>
    </div>
  )
}

export default App
