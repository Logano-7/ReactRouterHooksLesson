import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserInfo() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://www.codewars.com/api/v1/users/${username}`)
      .then((res) => res.json())
      .then((result) => setUserData(result))
      .catch((err) => console.log(err));
  }, [username]);
console.log(userData)
  const { name, honor, clan } = userData;
console.log(name)

  return (
    <>
      <h1>{name}'s Stats</h1>
      <p>Honor: {honor}</p>
      <p>Clan: {clan}</p>
    </>
  );
}
