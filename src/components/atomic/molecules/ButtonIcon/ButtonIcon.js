import React from 'react'
import PropTypes from 'prop-types'


const ButtonIcon = ({children, type, icon}) =>(
    <Button type="secondary">{children}<Icon type="right-arrow" /></Button>
)

ButtonIcon.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ButtonIcon