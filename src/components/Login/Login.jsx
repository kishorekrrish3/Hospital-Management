import React,{useState} from 'react'
import './Login.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully!");
            toast.success("User logged in successfully!", { position: 'top-center' });
            navigate('/home');
        } catch (error) {
            console.log(error);
            toast.error(error.message,{position:'bottom-center'});
        }
  }
  
  return (
      <div className='login'>
        <h1 className='title is-2 signin-title'>Sign In</h1>
        <form class="box login-container" onSubmit={handleSubmit}>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                <input class="input" type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>

            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                <input class="input" type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>

            <button class="button is-primary sign-in-btn">Sign in</button>
        </form>
          <p className='login-footer-signup'>Don't have an account? <a href='/signup'>Sign Up</a></p>
      </div>
  )
}

export default Login