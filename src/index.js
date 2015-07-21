'use strict';

function capitalize(name) {
    let prop = name.replace(/^_/, '');
    return prop[0].toUpperCase() + prop.substr(1);
}

function propertyName(prefix, name) {
    return prefix + capitalize(name);
}

export function property ({getter = 'get', setter = 'set'} = {})  {

    return function (target, name, descriptor) {

        if (getter) {
            Object.defineProperty(
                target,
                propertyName(getter, name),
                {
                    value: function getter() {
                        return this[name];
                    }
                }
            );
        }

        if (setter) {
            Object.defineProperty(
                target,
                propertyName(setter, name),
                {
                    value: function setter(value) {
                        this[name] = value;
                    }
                }
            );
        }

    };
}

export function getter (prefix = 'get') {
    return function (...args) {
        property({getter: prefix, setter: false})(...args);
    };
}
