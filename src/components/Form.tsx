import { useState } from "react";

function Form() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(`Hi,${name}.You are Logged in`)
    console.log(`from Form -1 : Name:${name} Email:${email} Password:${password}`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password : </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
