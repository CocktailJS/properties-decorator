'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.property = property;
exports.getter = getter;
function capitalize(name) {
    var prop = name.replace(/^_/, '');
    return prop[0].toUpperCase() + prop.substr(1);
}

function propertyName(prefix, name) {
    return prefix + capitalize(name);
}

function property() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$getter = _ref.getter;
    var getter = _ref$getter === undefined ? 'get' : _ref$getter;
    var _ref$setter = _ref.setter;
    var setter = _ref$setter === undefined ? 'set' : _ref$setter;

    return function (target, name, descriptor) {

        if (getter) {
            Object.defineProperty(target, propertyName(getter, name), {
                value: function getter() {
                    return this[name];
                }
            });
        }

        if (setter) {
            Object.defineProperty(target, propertyName(setter, name), {
                value: function setter(value) {
                    this[name] = value;
                }
            });
        }
    };
}

function getter() {
    var prefix = arguments.length <= 0 || arguments[0] === undefined ? 'get' : arguments[0];

    return function () {
        property({ getter: prefix, setter: false }).apply(undefined, arguments);
    };
}