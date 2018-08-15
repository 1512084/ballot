'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\D\\Ballot\\components\\Layout.js';

exports.default = function (props) {
    return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSxzQ0FBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQzdCLFdBQU8sZ0JBQU1DLGFBQU4sNkJBRUg7QUFDSUMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURkLEtBRkcsRUFRSCxnQkFBTUgsYUFBTixpQkFFSTtBQUNJQyxrQkFBVTtBQUNOQyxzQkFBVUosWUFESjtBQUVOSyx3QkFBWTtBQUZOO0FBRGQsS0FGSixFQVFJLGdCQUFNSCxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUVJLEtBQUssWUFBUCxFQUFxQkMsTUFBTSxxRUFBM0IsRUFBa0dKLFVBQVU7QUFDaElDLHNCQUFVSixZQURzSDtBQUVoSUssd0JBQVk7QUFGb0g7QUFBNUcsS0FBNUIsQ0FSSixDQVJHLEVBc0JILGdCQUFNSCxhQUFOLG1CQUE0QjtBQUN4QkMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURjLEtBQTVCLENBdEJHLEVBNEJISixNQUFNTyxRQTVCSCxDQUFQO0FBOEJILEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbInZhciBfanN4RmlsZU5hbWUgPSAnQzpcXFxcRFxcXFxCYWxsb3RcXFxcY29tcG9uZW50c1xcXFxMYXlvdXQuanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHRcXFxcZGlzdFxcXFxsaWJcXFxcaGVhZC5qcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBDb250YWluZXIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgSGVhZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaW5rJywgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMy4xL3NlbWFudGljLm1pbi5jc3MnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKTtcbn0pOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSxzQ0FBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQzdCLFdBQU8sZ0JBQU1DLGFBQU4sNkJBRUg7QUFDSUMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURkLEtBRkcsRUFRSCxnQkFBTUgsYUFBTixpQkFFSTtBQUNJQyxrQkFBVTtBQUNOQyxzQkFBVUosWUFESjtBQUVOSyx3QkFBWTtBQUZOO0FBRGQsS0FGSixFQVFJLGdCQUFNSCxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUVJLEtBQUssWUFBUCxFQUFxQkMsTUFBTSxxRUFBM0IsRUFBa0dKLFVBQVU7QUFDaElDLHNCQUFVSixZQURzSDtBQUVoSUssd0JBQVk7QUFGb0g7QUFBNUcsS0FBNUIsQ0FSSixDQVJHLEVBc0JILGdCQUFNSCxhQUFOLG1CQUE0QjtBQUN4QkMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURjLEtBQTVCLENBdEJHLEVBNEJISixNQUFNTyxRQTVCSCxDQUFQO0FBOEJILEMiLCJmaWxlIjoidW5rbm93biJ9