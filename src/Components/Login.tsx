import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const Reg = async () => {
    const userData = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Hiba a regisztráció során");
      }

      const data = await response.json();
      console.log("Sikeres regisztráció:", data);
    } catch (error) {
      console.error("Hiba:", error);
    }
  };

  const LoginHandler = async () => {
    const userData = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Hiba a bejelentkezés során");
      }

      const data = await response.json();
      console.log("Sikeres bejelentkezés:", data);
    } catch (error) {
      console.error("Hiba:", error);
    }
  };

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={Reg}>Register</button>
      <button onClick={LoginHandler}>Login</button>
    </div>
  );
};

export default Login;