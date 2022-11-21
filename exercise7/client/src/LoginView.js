import { useState, useRef} from "react";
import "./LoginView.css";



function Login() {

    // refs
    const usernameRef = useRef();
    const passwordRef = useRef();
    let onSubmit;
    
    // states
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
  
  const LoginForm = ({onSubmit}) => {      

  const handleUsernameChange = (event) => {
      setUsernameValue(event.target.value);
  };
  const handlePasswordChange = (event) => {
      setPasswordValue(event.target.value);
  };


  <>
  <form onSubmit={handleSubmit}>
     username:
     <input
  ref={usernameRef}
  label="username"
  id="username"
  type="text"
  value={usernameValue}
  onChange={handleUsernameChange}
/>
     password:
     <input
  ref={passwordRef}
  label="password"
  id="password"
  type="text"
  value={passwordValue}
  onChange={handlePasswordChange}
/>
<button
id="login-button"
type="submit">
    submit
</button>
</form>
</>

  };


const handleSubmit = (e) => {
    e.preventDefault(); // this prevents the browser to refresh when the submit button is clicked
    const formData = {
      username: usernameRef.current.value, // we are accessing the value of the input field through the ref's current instance
      password: passwordRef.current.value,
    };
    onSubmit(formData); // upon submission we are calling the onSubmit function
  };

  return (
    <div className="Login">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;



