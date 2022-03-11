import React from 'react';
import PostItem from './PostItem'
import useGetPosts from '../hooks/useGetPosts'
import '../styles/PostList.scss'

const PostList = () => {
	const dataPost = useGetPosts('https://dummyapi.io/data/v1/post?limit=30')

	return (
    <div className='posts'>
			<div className='posts__container'>
				<h2 className='posts__title'>Últimos posts</h2>
				<div className='posts__list'>
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
			</div>
		</div>
	);
}

export default PostList;