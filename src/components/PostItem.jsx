import React, { Fragment, useState } from 'react';
import Modal from './Modal';
import UserPerfil from './UserPerfil';
import Comments from './Comments';

import likeIcon from '../assets/icons/like.svg'
import commentIcon from '../assets/icons/comment.svg'
import '../styles/PostItem.scss'

const PostItem = (children) => {

  const [openModalUser, setOpenModalUser] = useState(false)
  const [openModalComments, setOpenModalComments] = useState(false)

  const activateModalUser = (id) => {
    setOpenModalUser(true)
  }

  const activateModalComments = (id) => {
    setOpenModalComments(true)
  }

  document.addEventListener('click', e => {
    if (e.target.classList.contains('modal__close')) {
      setOpenModalUser(false)
      setOpenModalComments(false)
    }
  })

  return (
    <Fragment>
      {openModalUser ? <Modal><UserPerfil id={children.userId} /></Modal> : null}
      {openModalComments ? <Modal><Comments id={children.idPost} /></Modal> : null}
      <div className='post' key={children.id}>
        <div className='post__user' onClick={() => activateModalUser()}>
            <div className='post__user-photo'>
              <img src={children.userPhoto}
                className='post__user-img'
                alt="" />
            </div>
          <div className='post__user-info'>
            <p className='post__user-name'>{children.userName} {children.userLastName}</p>
            <p className='post__user-date'>{children.date}</p>
          </div>
        </div>
        <div className='post__data'>
          <div className='post__data-photo'>
            <img src={children.postImage}
            className='post__data-img'
            alt="" />
          </div>
          <div className='post__reacts'>
            <div className='post__like'>
              <img src={likeIcon}
                className="post__like-img"
                alt="" />
              <span className='post__like-number'>{children.postLikes}</span>
            </div>
            <div className='post__comment' onClick={() => activateModalComments()}>
              <img src={commentIcon}
                className="post__comment-img"
                alt="" />
            </div>
          </div>
          <div className='post__data-info'>
            <p className='post__text'>{children.postText}</p>
          </div>
        </div>
      </div>
    </Fragment>
	);
}

export default PostItem;