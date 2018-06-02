import { rgba, darken, lighten } from 'polished';

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
  },
  sector: {
    titleBar: {
      background: '#fff',
      color: '#000'
    },
    subTitle: {
      background: '#000',
      color: '#fff'
    },
  },
  eventsList: {
    event: {
      odd: {
        background: '#fff',
        color: '#000',
        hoverBg: darken(0.2, '#fff')
      },
      even: {
        background: '#000',
        color: '#fff',
        hoverBg: lighten(0.2, '#000')
      }
    }
  },
  insights: {
    background: darken(0.1, '#fff')
  },
  eventOverview: {
    headerBox: {
      background: '#666'
    }
  }
};

const tabColors = {
  background: '#000',
  color: '#fff',
  borderColor: 'grey'
};

const eventSectionColors = {
  background: '#fff',
  color: '#000',
  container: {
    background: 'grey',
    color: '#fff'
  },
  right: {
    background: '#000',
    color:'#fff'
  }
};

const theme = {
  colors,
  tabColors,
  eventSectionColors
};

export default theme;
