import { createUseStyles } from 'react-jss'
import { MouseEventHandler } from 'react'

import { PostedImage } from '@services/apiService'

import Picture from '@components/ui/Picture'
import PostHeader from '@components/PostHeader'

import theme from '@styles/theme'

const useStyles = createUseStyles({
  post: {
    display: 'flex',
    flexDirection: 'column',
    border: [1, 'solid', theme.colors.black],
    borderRadius: 5,
    height: 420,
    padding: 10,
    color: theme.colors.primary,
    cursor: 'pointer',
    background: 'linear-gradient(to bottom, rgba(2,0,36,0.57) 0%, rgba(18,18,33,0.59) 16%, rgba(36,48,60,1) 60%, rgba(10,30,34,1) 100%)',
  },
  postExtended: {
    extend: 'post',
    height: '100%',
  },
  main: {
    flex: 1,
    overflow: 'hidden'
  },
  picture: {
    objectFit: 'scale-down'
  },
  pictureThumbnail: {
    border: [1, 'solid', 'rgba(255,255,255, 0.5)'],
    height: 250,
    '&:hover': {
      animation: '$enter 2s 0.2s forwards',
    },
  },
  '@keyframes enter': {
    '0%': {
      transform: 'scale(1) rotateY(0deg)',
      opacity: 1,
    },
    '50%': {
      transform: 'scale(0.5)',
      opacity: 0.2,
    },
    '100%': {
      transform: 'scale(1) rotateY(180deg)',
      opacity: 1,
    },
  },
  pictureDescription: {
    fontSize: 16,
  },
  pictureDescriptionShort: {
    extend: 'pictureDescription',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  createdAtLabel: {
    fontSize: 10,
    textAlign: 'right'
  },
})

type PostProps = {
  post?: PostedImage
  extended?: boolean,
  onClick?: MouseEventHandler<HTMLLIElement>
  onClose?: () => void
}

const Post = ({ post, extended, onClick, onClose }: PostProps) => {
  const classes = useStyles()

  if (!post) {
    return (<li className={classes.post}/>)
  }

  const { user, url, alt_description, description, created_at } = post
  const createdAtDate = new Date(created_at)

  return (
    <li className={extended ? classes.postExtended : classes.post} onClick={onClick}>
      <PostHeader user={user} onClose={onClose} />
      {extended && <p>{user.bio}</p> }
      <main className={classes.main} >
        <Picture
          imageUrlWithoutExt={url} 
          alt={alt_description} 
          imageProps={{ width: '280', height: '250', className: extended ? classes.picture : classes.pictureThumbnail }} 
        />
      </main>
      <p className={extended ? classes.pictureDescription : classes.pictureDescriptionShort}>
        {description}
      </p>
      <footer>
        <p className={classes.createdAtLabel}>Created at: { createdAtDate.toDateString()}</p>
      </footer>
    </li>
  )
}

export default Post

