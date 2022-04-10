import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { ThemeContext } from "../context/theme";

function Interests() {

  const {user} = useContext(UserContext);
  const {theme} = useContext(ThemeContext);

  return (
    <div>
      <h4>Interests</h4>
      <ul className={theme}>
        {user.interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interests;
