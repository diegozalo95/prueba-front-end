import React from 'react'
import useGetUser from '../hooks/useGetUser'
import '../styles/UserPerfil.scss'

const UserPerfil = (children) => {
  const dataPost = useGetUser(`https://dummyapi.io/data/v1/user/${children.id}`)

  return (
    <div className='user'>
      <div className='user__image'>
        <img src={dataPost.picture}
          className="user__img"
          alt="" />
      </div>
      <p className='user__text user__text--name'><strong>{dataPost.title} {dataPost.firstName} {dataPost.lastName}</strong></p>
      <p className='user__text'><strong>E-mail:</strong> {dataPost.email}</p>
      <p className='user__text'><strong>Phone:</strong> {dataPost.phone}</p>
      <p className='user__text'><strong>Gender:</strong> {dataPost.gender}</p>
      <p className='user__text'><strong>Birth:</strong> {dataPost.dateOfBirth}</p>
    </div>
	);
}

export default UserPerfil
