$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var MainPage = require('./components/mainPage');
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

ReactDOM.render(<MainPage />, document.getElementById('app'));