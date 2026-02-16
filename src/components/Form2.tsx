import { useState } from "react";

function Form2() {
  const [userOremail, setUserOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmite = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("From form -2 :","user or email:",userOremail,"password:", password);
  };
  return (
    <form onSubmit={handleSubmite}>
      <div>
        <label>username or email:</label>
        <input
          type="text"
          value={userOremail}
          onChange={(e) => setUserOrEmail(e.target.value)}
        />
      </div>
      <div>
        <label>password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">submite</button>
    </form>
  );
}

export default Form2;
