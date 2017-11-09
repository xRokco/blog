import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Matt Carrick`}
          style={{
            marginRight: rhythm(1 / 2),
            borderRadius: 230,
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Matt Carrick.</strong>
          <br/><a href="https://twitter.com/rokco_">Twitter</a> - <a href="https://github.com/xRokco">GitHub</a>
        </p>
      </div>
    )
  }
}

export default Bio
