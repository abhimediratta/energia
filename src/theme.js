import { rgba, darken, lighten } from 'polished';

const colors = {
  header: {
    background: '#262626',
    color: '#fff',
    navItem: {
      padding: '20px',
      hoverColor: '#666',
      mobile: {
        padding: '10px'
      }
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
  },
  contactUs: {
    bg: '#cbccce'
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

const formColors = {
  input: {
    bg: 'transparent',
    borderColor: '#5a5a5a',
    focusBorderColor: '#000'
  },
  label: {
    color: '#5a5a5a'
  },
  errorText: {
    color: 'red'
  },
  button: {
    bg: '#fff',
    color: '#000',
    borderColor: '#000',
    hover: {
      bg: '#4d4d4d',
      color: '#fff'
    },
    disabled: {
      bg: '#cbccce',
      color: 'graytext',
      borderColor: '#b6b6b6',
      hover: {
        bg: '#cbccce',
        color: 'graytext'
      }
    }
  },
  allInputs: {
    fontSize: '1.1rem'
  }
};

const theme = {
  colors,
  tabColors,
  eventSectionColors,
  formColors
};

export default theme;
