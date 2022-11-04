import { createUseStyles } from 'react-jss'
import { useQuery } from '@tanstack/react-query'

import * as api from '@services/apiService'
import { PostedImage } from '@services/apiService'

import Post from '@components/Post'

const useStyles = createUseStyles({
  posts: {
    display: 'grid',
    'grid-gap': 10,
    'grid-template-columns': 'repeat(auto-fill, minmax(270px, 1fr))',
  },
})

type PostsProps = {
  onSelectPost: (post: PostedImage) => void
  search?: string
  limit?: number
}

const Posts = ({ onSelectPost, search, limit }: PostsProps) => {
  const classes = useStyles()

  const { data: posts = [], isLoading } = useQuery({ 
    cacheTime: 1000 * 60 * 20,
    queryKey: ['images', limit], 
    queryFn: () => api.images.list({ limit }),
  })

  const filteredPosts = search
    ? posts?.filter(({ description, user: { name }}) => {
      const tokens = [description, name].filter(Boolean).map(token => token.toLowerCase())
      
      return tokens.some(token => token.includes(search))
    })
    : posts
  
  return (
    <ul className={classes.posts}>
      {isLoading && Array.from({ length: 10 }).map((_, idx) => <Post key={`${Date.now()}+${idx}}`} />)}
      {filteredPosts?.map(post => (
        <Post post={post} 
          key={post.id} 
          onClick={() => onSelectPost(post)}
        />))}
    </ul>
  )
}

export default Posts

