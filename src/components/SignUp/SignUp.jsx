import React from 'react'
import './SignUp.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    name: name
                })
            }
            console.log("User created successfully!");
            toast.success("User created successfully!", { position: 'top-center' });
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error(error.message,{position:'bottom-center'});
        }
    };

  return (
    <div className='signup'>
        <h1 className='title is-2 signup-title'>Sign Up</h1>
        <form class="box signup-container" onSubmit={handleRegister}>
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                <input class="input" type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
              
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

            <button class="button is-primary sign-up-btn">Sign Up</button>
        </form>
        <p className='login-footer-signup'>Already have an account? <a href='/'>Sign In</a></p>
      </div>
  )
}

export default SignUp