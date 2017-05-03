import React, { Component } from 'react';
import {render} from 'react-dom';
import Main from './component/detail/Main';
import DetailRouter from './component/detail/DetailRouter';
import Style from '../style/detail.less';



render(<DetailRouter/>, document.getElementById('container'));