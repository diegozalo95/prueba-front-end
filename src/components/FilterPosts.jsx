import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem'
import useGetFilteredPost from '../hooks/useGetFilteredPost'

const FilterPosts = (children) => {
  const dataPost = useGetFilteredPost(`https://dummyapi.io/data/v1/tag/${children.tag}/post?limit=30`)
  // console.log(countPosts);

  return (
    <div className='posts__container'>
      <h2 className='posts__title'>{children.tag} Posts</h2>
      <div className='posts__list'>
        {dataPost.length < 1 ? (
          <div className='posts__empty'>
            <p className='posts__empty-text'>No hay posts con ese tag</p>
            <a href='/' className='posts__empty-link'>Volver</a>
          </div>
          ) : (
          <div>
            {
              dataPost.map(item => {
                return(
                  <PostItem key={item.id}
                    idPost={item.id}
                    userPhoto={item.owner.picture}
                    userId={item.owner.id}
                    userName={item.owner.firstName}
                    userLastName={item.owner.lastName}
                    date={item.publishDate}
                    postImage={item.image}
                    postTags={item.tags}
                    postLikes={item.likes}
                    postText={item.text} />
                )
              })
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterPosts
