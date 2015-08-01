'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.accessor = accessor;
exports.property = property;
exports.getter = getter;
var GETTER = 'get';
var SETTER = 'set';

function capitalize(name) {
    var prop = name.replace(/^_/, '');
    return prop[0].toUpperCase() + prop.substr(1);
}

function propertyName(prefix, name) {
    return prefix + capitalize(name);
}

// -- PUBLIC API

function accessor() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$getter = _ref.getter;
    var getter = _ref$getter === undefined ? true : _ref$getter;
    var _ref$setter = _ref.setter;
    var setter = _ref$setter === undefined ? true : _ref$setter;

    return function (target, name, descriptor) {
        var accessorName = name.replace(/^_/, '');
        Object.defineProperty(target, accessorName, {
            get: getter ? function getter() {
                return this[name];
            } : undefined,
            set: setter ? function setter(value) {
                this[name] = value;
            } : undefined
        });

        descriptor.enummerable = false;
        return descriptor;
    };
}

function property() {
    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref2$getter = _ref2.getter;
    var getter = _ref2$getter === undefined ? GETTER : _ref2$getter;
    var _ref2$setter = _ref2.setter;
    var setter = _ref2$setter === undefined ? SETTER : _ref2$setter;

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
    var prefix = arguments.length <= 0 || arguments[0] === undefined ? GETTER : arguments[0];

    return function () {
        property({ getter: prefix, setter: false }).apply(undefined, arguments);
    };
}