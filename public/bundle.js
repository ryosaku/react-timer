/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var TimerExample = React.createClass({
	    displayName: 'TimerExample',


	    getInitialState: function getInitialState() {

	        // This is called before our render function. The object that is 
	        // returned is assigned to this.state, so we can use it later.

	        return { elapsed: 0 };
	    },

	    componentDidMount: function componentDidMount() {

	        // componentDidMount is called by react when the component 
	        // has been rendered on the page. We can set the interval here:

	        this.timer = setInterval(this.tick, 50);
	    },

	    componentWillUnmount: function componentWillUnmount() {

	        // This method is called immediately before the component is removed
	        // from the page and destroyed. We can clear the interval here:

	        clearInterval(this.timer);
	    },

	    tick: function tick() {

	        // This function is called every 50 ms. It updates the 
	        // elapsed counter. Calling setState causes the component to be re-rendered

	        this.setState({ elapsed: new Date() - this.props.start });
	    },

	    render: function render() {

	        var elapsed = Math.round(this.state.elapsed / 100);

	        // This will give a number with one digit after the decimal dot (xx.x):
	        var seconds = (elapsed / 10).toFixed(1);

	        // Although we return an entire <p> element, react will smartly update
	        // only the changed parts, which contain the seconds variable.

	        return React.createElement(
	            'p',
	            null,
	            'This example was started ',
	            React.createElement(
	                'b',
	                null,
	                seconds,
	                ' seconds'
	            ),
	            ' ago.'
	        );
	    }
	});

	ReactDOM.render(React.createElement(TimerExample, { start: Date.now() }), document.getElementById('container'));

/***/ }
/******/ ]);