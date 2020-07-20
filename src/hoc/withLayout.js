import React from 'react'

const withLayout = (Component) => {
  return props => (
    <div className="container">
      <nav className="Navbar">Home</nav>

      <Component {...props} />
    </div>
  )
}

export default withLayout

