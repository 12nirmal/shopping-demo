import React, { useContext } from "react";
import AuthContext from "../context/auth-context";
function HomePage() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <div>
        <h1 className="home">This is Home Page</h1>
        {isAuthenticated && <p>I'm Here to Konw you</p>}
      </div>
    </>
  );
}

export default HomePage;
