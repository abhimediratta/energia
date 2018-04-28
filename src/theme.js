import { rgba } from 'polished';

const colors = {
  header: {
    background: '#262626',
    color: '#fff',
    navItem: {
      padding: '20px',
      hoverColor: '#666'
    }
  },
  content: {
    background: '#eee',
    color: '#000'
  },
  categoryItem: {
    background: rgba('#000', 0.7),
    color: '#fff'
  },
  eventsSidebar: {
    background: '#000',
    color: '#fff'
  }
};

const theme = {
  colors
};

export default theme;
