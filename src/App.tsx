import React from 'react'
import { useEffect, useState } from 'react'

import './App.css'
import { PostedImage, GetImagesResponse } from './App.types'

const App = () => {
  const [images, setImages] = useState<PostedImage[]>()

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then((data: GetImagesResponse) => {
        console.log('Success:', data)
        setImages(data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }, [])

  return (
    <div className='app'>
      {
        images && images.map(img => (
          <div key={img.id} >
            <img src={`${img.url}.jpg`} alt=''/>
            <img src={`${img.user.profile_image}.webp`} alt=''/>
          </div>
        ))
      }
    </div>
  )
}

export default App
