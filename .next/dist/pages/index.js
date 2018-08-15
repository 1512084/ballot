'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\D\\Ballot\\pages\\index.js?entry';


var BallotIndex = function (_Component) {
    (0, _inherits3.default)(BallotIndex, _Component);

    function BallotIndex() {
        (0, _classCallCheck3.default)(this, BallotIndex);

        return (0, _possibleConstructorReturn3.default)(this, (BallotIndex.__proto__ || (0, _getPrototypeOf2.default)(BallotIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(BallotIndex, [{
        key: 'renderBallots',
        value: function renderBallots() {
            var item = this.props.ballots.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/ballots/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, ' View Ballot')),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: item, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // return <div>{this.props.campaigns[0]}</div>
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'List of ballots'), _react2.default.createElement(_routes.Link, { route: 'ballots/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Create Ballot',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }))), this.renderBallots()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var ballots;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedBallots().call();

                            case 2:
                                ballots = _context.sent;
                                return _context.abrupt('return', { ballots: ballots });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return BallotIndex;
}(_react.Component);

exports.default = BallotIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQmFsbG90SW5kZXgiLCJfQ29tcG9uZW50IiwiX19wcm90b19fIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlckJhbGxvdHMiLCJpdGVtIiwicHJvcHMiLCJiYWxsb3RzIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiY3JlYXRlRWxlbWVudCIsInJvdXRlIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJmbHVpZCIsIkdyb3VwIiwiaXRlbXMiLCJyZW5kZXIiLCJyZWwiLCJocmVmIiwiZmxvYXRlZCIsImNvbnRlbnQiLCJpY29uIiwicHJpbWFyeSIsIl9yZWYiLCJtYXJrIiwiX2NhbGxlZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRCYWxsb3RzIiwiY2FsbCIsInNlbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBTEEsSUFBSUEsZUFBZSxzQ0FBbkI7OztBQU9BLElBQUlDLGNBQWMsVUFBVUMsVUFBVixFQUFzQjtBQUNwQyw0QkFBVUQsV0FBVixFQUF1QkMsVUFBdkI7O0FBRUEsYUFBU0QsV0FBVCxHQUF1QjtBQUNuQixzQ0FBZ0IsSUFBaEIsRUFBc0JBLFdBQXRCOztBQUVBLGVBQU8seUNBQTJCLElBQTNCLEVBQWlDLENBQUNBLFlBQVlFLFNBQVosSUFBeUIsOEJBQXVCRixXQUF2QixDQUExQixFQUErREcsS0FBL0QsQ0FBcUUsSUFBckUsRUFBMkVDLFNBQTNFLENBQWpDLENBQVA7QUFDSDs7QUFFRCwrQkFBYUosV0FB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QUFDQSx1Q0FBTyxrQkFBUUMsT0FBUixDQUFnQkMsa0JBQWhCLEdBQXFDQyxJQUFyQyxFQUFQOztBQUVKLGlDQUFLLENBQUw7QUFDSTlCLDBDQUFVeUIsU0FBU00sSUFBbkI7QUFDQSx1Q0FBT04sU0FBU08sTUFBVCxDQUFnQixRQUFoQixFQUEwQixFQUFFaEMsU0FBU0EsT0FBWCxFQUExQixDQUFQOztBQUVKLGlDQUFLLENBQUw7QUFDQSxpQ0FBSyxLQUFMO0FBQ0ksdUNBQU95QixTQUFTUSxJQUFULEVBQVA7QUFYUjtBQWFIO0FBQ0osaUJBaEJNLEVBZ0JKWCxPQWhCSSxFQWdCSyxJQWhCTCxDQUFQO0FBaUJILGFBbkIwQyxDQUFoQyxDQUFYOztBQXFCQSxxQkFBU1ksZUFBVCxHQUEyQjtBQUN2Qix1QkFBT2QsS0FBSzNCLEtBQUwsQ0FBVyxJQUFYLEVBQWlCQyxTQUFqQixDQUFQO0FBQ0g7O0FBRUQsbUJBQU93QyxlQUFQO0FBQ0gsU0EzQk07QUFGTixLQUFELENBbkdKOztBQW1JQSxXQUFPNUMsV0FBUDtBQUNILENBN0lpQixrQkFBbEI7O2tCQStJZUEsVyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJ0M6XFxcXERcXFxcQmFsbG90XFxcXHBhZ2VzXFxcXGluZGV4LmpzP2VudHJ5JztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbnZhciBCYWxsb3RJbmRleCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEJhbGxvdEluZGV4LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEJhbGxvdEluZGV4KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFsbG90SW5kZXgpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQmFsbG90SW5kZXguX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoQmFsbG90SW5kZXgpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQmFsbG90SW5kZXgsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlckJhbGxvdHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQmFsbG90cygpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5wcm9wcy5iYWxsb3RzLm1hcChmdW5jdGlvbiAoYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyByb3V0ZTogJy9iYWxsb3RzLycgKyBhZGRyZXNzLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBWaWV3IEJhbGxvdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkdyb3VwLCB7IGl0ZW1zOiBpdGVtLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIDxkaXY+e3RoaXMucHJvcHMuY2FtcGFpZ25zWzBdfTwvZGl2PlxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTGF5b3V0LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDMyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnLCB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiAnLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4zLjEvc2VtYW50aWMubWluLmNzcycsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdoMycsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMzRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0xpc3Qgb2YgYmFsbG90cydcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIExpbmssXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHJvdXRlOiAnYmFsbG90cy9uZXcnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMzZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0NyZWF0ZSBCYWxsb3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnYWRkIGNpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMzdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQmFsbG90cygpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAgICBrZXk6ICdnZXRJbml0aWFsUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICAgICAgICAgIHZhciBiYWxsb3RzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQmFsbG90cygpLmNhbGwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG90cyA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIHsgYmFsbG90czogYmFsbG90cyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICB9KClcbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQmFsbG90SW5kZXg7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGxvdEluZGV4OyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQmFsbG90SW5kZXgiLCJfQ29tcG9uZW50IiwiX19wcm90b19fIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlckJhbGxvdHMiLCJpdGVtIiwicHJvcHMiLCJiYWxsb3RzIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiY3JlYXRlRWxlbWVudCIsInJvdXRlIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJmbHVpZCIsIkdyb3VwIiwiaXRlbXMiLCJyZW5kZXIiLCJyZWwiLCJocmVmIiwiZmxvYXRlZCIsImNvbnRlbnQiLCJpY29uIiwicHJpbWFyeSIsIl9yZWYiLCJtYXJrIiwiX2NhbGxlZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRCYWxsb3RzIiwiY2FsbCIsInNlbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBTEEsSUFBSUEsZUFBZSxzQ0FBbkI7OztBQU9BLElBQUlDLGNBQWMsVUFBVUMsVUFBVixFQUFzQjtBQUNwQyw0QkFBVUQsV0FBVixFQUF1QkMsVUFBdkI7O0FBRUEsYUFBU0QsV0FBVCxHQUF1QjtBQUNuQixzQ0FBZ0IsSUFBaEIsRUFBc0JBLFdBQXRCOztBQUVBLGVBQU8seUNBQTJCLElBQTNCLEVBQWlDLENBQUNBLFlBQVlFLFNBQVosSUFBeUIsOEJBQXVCRixXQUF2QixDQUExQixFQUErREcsS0FBL0QsQ0FBcUUsSUFBckUsRUFBMkVDLFNBQTNFLENBQWpDLENBQVA7QUFDSDs7QUFFRCwrQkFBYUosV0FB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