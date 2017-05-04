import React, { Component } from 'react';
import {render} from 'react-dom';
import LoginRouter from './component/login/LoginRouter';
import Style from '../style/login.less';


render(<LoginRouter />, document.getElementById('container'));