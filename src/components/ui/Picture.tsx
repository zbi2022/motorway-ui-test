import { ComponentProps } from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

type ImgType = ('jpg' | 'webp')

type PictureProps = {
  imageUrlWithoutExt: string,
  alt: string
  supportedTypes?: ImgType[],
  imageProps?: ComponentProps<'img'>
}

const useStyles = createUseStyles({
  picture: {
    height: '100%',
  },
  pictureImage: {
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    objectFit: 'cover',
  }
})

const SUPPORTED_TYPES: ImgType[] = ['jpg', 'webp']

const Picture = ({ imageUrlWithoutExt, supportedTypes = SUPPORTED_TYPES, alt, imageProps }: PictureProps) => {
  const classes = useStyles()

  const images = supportedTypes.map(imageType => ({
    imageType,
    imageUrl: `${imageUrlWithoutExt}.${imageType}`,
  }))

  const fallbackJpg = images.find(({ imageType }) => imageType === 'jpg')
  const pictureSources = images.filter(({ imageType }) => imageType !== 'jpg')

  return (
    <picture className={classes.picture}>
      {pictureSources.map(({imageType, imageUrl }) => <source srcSet={imageUrl} key={imageType} />)}
      <img 
        src={fallbackJpg?.imageUrl} 
        alt={alt} 
        loading='lazy' 
        {...imageProps}
        className={clsx(classes.pictureImage, imageProps?.className)}
      />
    </picture>
  )
}

export default Picture
