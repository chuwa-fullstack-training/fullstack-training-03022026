import { useState, useEffect } from "react";
import axios from "axios";

const GithubProfiles = () => {
  const [cards, setCards] = useState([]);
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);

  const handleClick = (id) => {
    console.log(id);
    setProfile(cards.find((card) => card.id === id));
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const url = "https://api.github.com/users";
        const res = await axios.get(url);
        setCards(res.data);
        setProfile(res.data[0]);
        console.log(res.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchRepo = async () => {
      if (!profile.repos_url) return;
      try {
        const res = await axios.get(profile.repos_url);
        setRepos(res.data.slice(0, 3));
        console.log(res.data.slice(0, 3));
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchRepo();
  }, [profile]);

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                handleClick={() => handleClick(card.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: "left", width: "600px" }}>
        <Profile profile={profile} repos={repos} />
      </div>
    </div>
  );
};

const Profile = ({ profile, repos }) => {
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
      </div>
    </div>
  );
};

const Card = ({ card, handleClick }) => {
  return (
    <tr onClick={handleClick}>
      <td>{card.id}</td>
      <td>{card.login}</td>
      <td>
        <img src={card.avatar_url} width="50" />
      </td>
    </tr>
  );
};

export default GithubProfiles;
