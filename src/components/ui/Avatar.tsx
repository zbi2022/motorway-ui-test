import { createUseStyles } from 'react-jss'

import Picture from '@components/ui/Picture'

import theme from '@styles/theme'

type AvatarProps = {
  imageUrlWithoutExt: string
  name: string,
  className?: string
}

const useStyles = createUseStyles({
  avatar: {
    width: 40,
    height: 40,
    display: 'flex',
    borderRadius: '50%',
    border: [1, 'solid', theme.colors.primary],
    color: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }
})

const Avatar = ({ imageUrlWithoutExt, name }: AvatarProps) => {
  const classes = useStyles()

  return (
    <div className={classes.avatar}>
      <Picture 
        imageUrlWithoutExt={imageUrlWithoutExt} 
        alt={name}
      />
    </div>
  )
}

export default Avatar
