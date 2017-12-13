import Typography from 'typography';
import Sutro from 'typography-theme-sutro';

Sutro.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
});

const typography = new Typography(Sutro);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
