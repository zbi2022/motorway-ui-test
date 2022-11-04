import { createUseStyles } from 'react-jss'

import { User } from '@services/apiService'

import Avatar from '@components/ui/Avatar'
import Button from '@components/ui/Button'

type PostHeaderProps = {
  user: User
  onClose?: () => void
}

const useStyles = createUseStyles({
  postHeader: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 10,
  },
  userInfo: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    textShadow: '.5px .5px #000000',
  },
  closeButton: {
    marginLeft: 'auto',
    marginRight: 10,
  }
})

const PostHeader = ({ user: { name, profile_image, first_name, last_name, location }, onClose }: PostHeaderProps) => {
  const classes = useStyles()

  return (
    <header className={classes.postHeader}>
      <Avatar imageUrlWithoutExt={profile_image} name={name}/>
      <div className={classes.userInfo}>
        <p>{first_name} <span>{last_name}</span></p>
        <p>{location}</p>
      </div>
      {onClose && <Button className={classes.closeButton} onClick={onClose}>X</Button>}
    </header>
  )
}

export default PostHeader
