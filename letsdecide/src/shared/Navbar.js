import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'

import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

class NavBar extends React.Component {
  render () {
    return (
      <div>
        <AppBar position='static'>
          <Box color='textSecondary' clone>
            <Typography align='center' variant='h6' style={{ color: 'white' }} noWrap>
              Let's Decide
            </Typography>
          </Box>
        </AppBar>
      </div>
    )
  }
}
export default NavBar
