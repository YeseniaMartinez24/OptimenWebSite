import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../css/login.css"; // Archivo CSS donde se encuentra la clase "login-container"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="logo-container"
      >
        <img src="https://optimen.com.mx/media/external/logo_optimen.ico" alt="Logo" className="logo" />
        <h2>Log In</h2>
      </motion.div>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onSubmit={handleSubmit}
        className="form-container"
      >
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="input-container"
        >
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
          Log In
        </motion.button>
      </motion.form>
      
    </div>
  );
}

export default Login;
