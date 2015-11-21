$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var MainPage = require('./components/mainPage');
var IntializeActions = require('./actions/initializeActions');

IntializeActions.initData();

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

ReactDOM.render(<MainPage />, document.getElementById('app'));