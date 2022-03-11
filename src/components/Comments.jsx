import React from 'react'
import useGetComments from '../hooks/useGetComments'
import '../styles/Comments.scss'

const Comments = (children) => {
  const dataPost = useGetComments(`https://dummyapi.io/data/v1/post/${children.id}/comment?limit=30`)

  return (
    <div className='comments'>
      <div className='comments__list'>
        {
          dataPost.map(item => {
            return(
              <div className='comments__item' key={item.id}>
                <div className='comments__user'>
                  <div className="comments__image">
                    <img src={item.owner.picture}
                      className="comments__img"
                      alt="" />
                  </div>
                  <div className='comments__info'>
                    <p className='comments__user-name'>{item.owner.title} {item.owner.firstName} {item.owner.lastName}</p>
                    <p className='comments__date'>{item.publishDate}</p>
                  </div>
                </div>
                  <p className='comments__text'>{item.message}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Comments
