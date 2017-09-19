import React, { PropTypes } from 'react'
import '../stylesheets/Link.css'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span className="links">{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
       className="links"
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
