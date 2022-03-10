import { useEffect, useState } from 'react'

const useGetPosts = (API) => {
	const [dataPost, setDataPost] = useState([])

	const fetchData = async () => {
		try {
			const response = await fetch(`${API}`, {
				headers: new Headers({
						'app-id': '6227b27f73942ae73b6b1b49'
				})
			});
			const data = await response.json()
			setDataPost(data.data);
	} catch (error) {
			console.log(error)
		}
	}

  useEffect(() => {
		fetchData()
	}, [])

  return dataPost
}

export default useGetPosts
