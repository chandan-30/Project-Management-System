import React, {useState} from 'react'
import './css/login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addLoggedUser } from '../reducers/loggedUserSlice';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignup, setSignup] = useState(false);

    const [signupform, setSignUpForm] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        role:'user',
    });

    const [form, setForm] = useState({
        email:'',
        password:'',
    });

    const toggleSignup = () => {
        setSignup((prevSignup) => !prevSignup);
      };

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        // Make a POST request to register user
        axios.post(`http://localhost:8000/login`, form)
        .then(res => {
             if (res.status !== 201 && res.statusText !== 'OK' ) {
                 throw new Error(`HTTP error! Status: ${res.status}`);
             }
             const loggedUser = res.data;
             if (loggedUser.token) {
                setForm({
                    email:'',
                    password:'',
                });
                localStorage.setItem('token', loggedUser.token);
                localStorage.setItem('pmsUser', JSON.stringify(loggedUser.user) );
                dispatch( addLoggedUser( loggedUser.user ));
                navigate('/');

             } else {
                throw new Error('Token generation failed, Please try again !')
             }
        })
        .catch(error => {
             console.error('Error Signing In:', error);
        });
    }

    const signupSubmitHandler = (e) => {
        e.preventDefault();

        if(signupform.confirmPassword !== signupform.password) {
            alert('Passwords Mismatch !');
            return;
        }
        
        // Make a POST request to register user
        axios.post(`http://localhost:8000/register`, {
            name: signupform.name,
            email: signupform.email,
            password: signupform.password,
            role: 'user',
        })
        .then(res => {
             if (res.status !== 201 && res.statusText !== 'OK' ) {
                 throw new Error(`HTTP error! Status: ${res.status}`);
             }
             const newUser = res.data;
             if (newUser.token) {
                alert('Registered successfully!');
                setSignUpForm({
                    name:'',
                    email:'',
                    password:'',
                    confirmPassword:'',
                    role:'user',
                });
                setSignup(!isSignup);

             } else {
                throw new Error('Token generation failed, Please try again !')
             }
        })
         .catch(error => {
             console.error('Error registering user:', error);
     });

    }
    
  return (
    <>
        <div className='container-fluid login-container'>
            <div className='row'>
                <div className='col'>
                <h2 className='text-xl font-bold p-1 border-b-2 border-green-400'> { isSignup ? 'Sign Up' : 'Sign In'} </h2>

                {isSignup ? (
                    <form id={'signupform'} onSubmit={(e) => {signupSubmitHandler(e)}} >
                        <div className='invite-form-container'>
                            <div className="form-floating mb-3">
                                <input onChange={(e)=>setSignUpForm({...signupform, 'name': e.currentTarget.value })} value={signupform.name} type="name" className="form-control" id="" placeholder="Prabhas" required />
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={(e)=>setSignUpForm({...signupform, 'email': e.currentTarget.value })} value={signupform.email} type="email" className="form-control" id="" placeholder="name@example.com" required />
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={(e)=>setSignUpForm({...signupform, 'password': e.currentTarget.value })} value={signupform.password}  type="password" className="form-control" placeholder="password" required />
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={(e)=>setSignUpForm({...signupform, 'confirmPassword': e.currentTarget.value })} value={signupform.confirmPassword}  type="password" className="form-control" placeholder="confirm password" required />
                            </div>
                            <button type="submit" className="btn btn-success bg-green-600">Sign Up</button>
                            <p className='mt-4'>
                                Already a User ?
                                <Link className="border-b-2 ml-2 border-green-400 "  onClick={toggleSignup}> Sign In</Link>
                            </p>
                        </div>
                    </form>
                ) :
                
                (
                    <form id={'loginform'} onSubmit={(e) => {loginSubmitHandler(e)}} >
                        <div className='invite-form-container'>
                            <div className="form-floating mb-3">
                                <input onChange={(e)=>setForm({...form, 'email': e.currentTarget.value })} value={form.email} type="email" className="form-control" id="floatingPassword" placeholder="name@example.com" required />
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={(e)=>setForm({...form, 'password': e.currentTarget.value })} value={form.password}  type="password" className="form-control" id="floatingInput" placeholder="password" required />
                            </div>
                            <button type="submit" className="btn btn-success bg-green-600">Sign In</button>
                            <p className='mt-4'>
                                New to this platform ?
                                <Link className="border-b-2 ml-2 border-green-400 " onClick={toggleSignup}> Sign Up</Link>
                            </p>
                        </div>
                    </form>
                )}

                </div>
            </div>
        </div>
    </>
  )
}

export default Login