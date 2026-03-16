import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const { login } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchData = ()=>{
        axios.get(`https://api.github.com/users/${login}`)
          .then(res => setProfile(res.data));
        axios.get(`https://api.github.com/users/${login}/repos`)
          .then(res => setRepos(res.data.slice(0, 10)));
        }
        fetchData();
      }, [login]);
    return (
      <div
        style={{
          display: "flex",
          border: "1px solid #eee",
          borderRadius: "10px",
          padding: "20px",
          gap: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={profile.avatar_url}
          width="120"
          style={{ borderRadius: "50%", height: "120px", objectFit: "cover" }}
        />
        <div>
          <h2>{profile.login}</h2>
          <p>Repositories:</p>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
                <p>{repo.description || ""}</p>
              </li>
            ))}
          </ul>
          <button onClick={() => navigate('/users')}>Back to Users</button>
        </div>
      </div>
    );
  };

  export default Profile;