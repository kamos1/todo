import React, { PropTypes } from 'react'

const linkStyle = {
  fontSize: '1.2em',
  padding: '0 5px',
  textDecoration: 'none'
}

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span style={linkStyle}>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
       style={linkStyle}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
