import React from 'react'
import './css/inviteform.css';
import { useState, useRef } from 'react';
import { serviceId, templateId, publickey, templateParams } from '../utils/emailJsIds';
import emailjs from '@emailjs/browser';

const InviteForm = () => {
    const [form, setForm] = useState({
        name:'',
        email:'',
    });
    const ref = useRef(null);
    ref.current = JSON.parse(localStorage.getItem('pmsUser'));

const submitHandler = (e) => {
    e.preventDefault();
    templateParams.to_name = form.name;
    templateParams.to_email = form.email;
    if( ref.current.role !== 'admin' ) { 
        alert('Only admin is allowed to send an invite');
        setForm({
            name:'',
            email:'',  
        })
        return;
    }
    emailjs.send(serviceId, templateId, templateParams, publickey )
        .then( (res) => {
            alert('successfully sent invite');
            setForm({
                name:'',
                email:'',  
            })
        }).catch((err)=> {
            console.error("Failed to send invitation:", err);
        })
        
}

  return (
    <>
        <h3 className='text-xl mt-10 border-b-2 border-green-400 font-semibold'> Invite a member via Email </h3>
        <form onSubmit={(e) => {submitHandler(e)}} >
            <div className='invite-form-container'>
                <div className="form-floating mb-3">
                    <input onChange={(e)=>setForm({...form, 'name': e.currentTarget.value })} value={form.name} type="text" className="form-control" id="floatingPassword" placeholder="Name" required />
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e)=>setForm({...form, 'email': e.currentTarget.value })} value={form.email}  type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                </div>
                <button type="submit" className="btn btn-success bg-green-600">Send Invite!</button>
            </div>
        </form>
    </>
  )
}

export default InviteForm