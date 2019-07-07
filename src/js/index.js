import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../js/store/index';

import { addArticle } from '../js/actions/index';

window.store = store;
window.addArticle = addArticle;

