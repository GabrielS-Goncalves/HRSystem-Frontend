import { UserCircle, LockCircle } from "reicon-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { loginApi } from "../../services/loginApi";
import "./login.css";

function Login() {
  const passwordRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { data: token } = await loginApi.post("/app/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      cookieStore.set("token", token);
      console.log("Login OK!");
      navigate("/app/dashboard");
    } catch (error) {
      console.error("Login Error!", error);
    }    
  }

  return (
    <>
      <title>HRsystem | Login</title>
      <div className="login-Container">
        <div className="login-Form">
          <form onSubmit={handleSubmit}>
            <h1>HRSystem</h1>
            <div className="input-Fields">
              <input type="email" required placeholder="Type your email..." ref={ emailRef }/>
              <UserCircle className="icon" size={32} />
            </div>
            <div className="input-Fields">
              <input type="password" required placeholder="Type your password..." ref={ passwordRef } />
              <LockCircle className="icon" size={32} />
            </div>
            <div>
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;