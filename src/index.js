import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import  store  from './js/store/index';
import { App } from './js/App';

class Index extends React.Component {
   render() {
      return (
         <Provider store={store}>
       <App />
    </Provider>
      );
   }
};


ReactDOM.render(<Index />,document.getElementById('root'));

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('app')
// );