import Typography from 'typography'
//import Wordpress2016 from 'typography-theme-wordpress-2016'
import altonTheme from 'typography-theme-alton'

altonTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'table' : {
  	fontFamily: 'Muli',
  	fontSize: '15px'
  },
  'h2, h3': {
  	fontFamily: 'Ovo',
  	fontWeight: '400'
  },
  'h1': {
  	fontFamily: 'Ovo',
  	marginTop: '50px'
  },
  'p': {
  	fontFamily: 'Muli',
  	fontSize: '15px'
  },
  'a': {
  	color: '#CC7F0F'
  },
  'small': {
  	fontFamily: 'Muli',
  	fontWeight: '300'
  }
})

const typography = new Typography(altonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
