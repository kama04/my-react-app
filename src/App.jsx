import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleClear = () => {
    setEmail("");
    setPassword("");
  };

  const handleRegister = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <label>Email</label>
      <Input
        placeholder="Enter your email"
        type="text"
        value={email}
        onChange={handleEmailChange}
      />

      <label>Password</label>
      <Input
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <div className="button-group">
        <Button text="Clear" type="button" onClick={handleClear} />
        <Button text="Register" type="submit" onClick={handleRegister} />
      </div>
    </div>
  );
}

export default App;
