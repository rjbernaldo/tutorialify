jest.dontMock('../app/components/TutorialifyApp.react');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var TutorialifyApp = require('../app/components/TutorialifyApp.react');

describe('TutorialifyApp', function() {
	it('should build welcome layout if there is no url input');
	it('should build error page for faulty urls');
	it('should build app layout if url is valid');
});
