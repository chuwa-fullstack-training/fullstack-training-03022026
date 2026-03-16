import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Profile from "./GithubProfile";

const GithubProfiles = () => {
  const [cards, setCards] = useState([]);
  // const [profile, setProfile] = useState({});
  // const [repos, setRepos] = useState([]);
  const navigate = useNavigate();

  const handleClick = (card) => {
    console.log(card.id);
    // setProfile(cards.find((card) => card.id === id));
    navigate(`/users/${card.login}`);
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const url = "https://api.github.com/users";
        const res = await axios.get(url);
        setCards(res.data);
        // setProfile(res.data[0]);
        console.log(res.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchUser();
  }, []);

  // useEffect(() => {
  //   const fetchRepo = async () => {
  //     if (!profile.repos_url) return;
  //     try {
  //       const res = await axios.get(profile.repos_url);
  //       setRepos(res.data.slice(0, 3));
  //       console.log(res.data.slice(0, 3));
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   };
  //   fetchRepo();
  // }, [profile]);

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
                handleClick={() => handleClick(card)}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* <div style={{ textAlign: "left", width: "600px" }}>
        <Profile profile={profile} repos={repos} />
      </div> */}
    </div>
  );
};

const Card = ({ card, handleClick }) => {
  return (
    <tr onClick={handleClick}>
      <td>{card.id}</td>
      <td style={{color:'blue'}}>{card.login}</td>
      <td>
        <img src={card.avatar_url} width="50" />
      </td>
    </tr>
  );
};

export default GithubProfiles;
