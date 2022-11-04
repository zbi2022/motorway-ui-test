const globalStyles = {
  '@global': {
    body: {
      margin: 0,
      fontSmoothing: 'antialiased',
      '& *': {
        boxSizing: 'border-box',
      },
      '& ul': {
        listStyle: 'none',
        margin: 0,
        padding: 0      
      }
    },
    html: {
      fontSize: 10,
    }
  }
}

export default globalStyles
