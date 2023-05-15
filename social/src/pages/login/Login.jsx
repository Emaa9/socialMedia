import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContex";

const Login =() => {
  
  
  const [inputs, setInputs]= useState({
    username:"",
    password:"",
  });
  const [err, setErr]= useState(null);

  const navigate= useNavigate();

  const handleChange= (e) =>{
    setInputs((prev)=>({...prev, [e.target.name]:e.target.value}));
  }
  const {login} = useContext(AuthContext);

const handleLogin = async(e) => {
    e.preventDefault();
  try{
    await login(inputs);
    navigate("/");
  }catch(err){
    setErr(err.response.data)
  }

};

  return (
    <div className="login">
      <div className="card">
     <div className="left">
      <h1>Hello World.</h1>
      <p>Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. Sunt accusantium voluptates atque, 
        pariatur non dignissimos dolore quia repellat repellendus 
         quod ea quisquam voluptas sed! Aperiam a sint nostrum enim.
    </p>
    <span>Don't you have an account?</span>
    <Link to="/register">
      <button>Register</button>
      </Link>
   
     </div>
     <div className="right">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" name="username" onChange= {handleChange}/>
        <input type="password" placeholder="password" name="password" onChange= {handleChange}/>
        {err && err}
        <button onClick={handleLogin}>Login</button>
      </form>
     </div>
     </div>
    </div>
  )
}

export default Login;

