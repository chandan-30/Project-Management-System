import React from 'react'
import Header from './Header';
import { useSelector } from 'react-redux';
import './css/users.css';
import InviteForm from './InviteForm';

const Users = () => {
  const allUsers = useSelector( (state) => {
    return state.user.users;
  })
  return (
    <>
        <Header title={'All Users'} addbtn={false} />
        <ul className="list-group user-list">
          { allUsers && allUsers.map((user) => {
            return (

                <li key={user.email} className="list-group-item ">
                  {user.name}
                </li> 
              )
          })}
        </ul>
        <InviteForm />
    </>
  )
}

export default Users;