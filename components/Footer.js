import React from 'react'
import FilterLink from '../containers/FilterLink'

const footerStyle = {
  background: '#00a79d',
  color: '#FFF',
  fontSize: '1.2em',
  marginTop: '0px'
}

const Footer = () => (
  <p style={footerStyle}>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
