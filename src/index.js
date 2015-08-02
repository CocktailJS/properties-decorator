'use strict';


const GETTER = 'get';
const SETTER = 'set';

function capitalize(name) {
    let prop = name.replace(/^_/, '');
    return prop[0].toUpperCase() + prop.substr(1);
}

function propertyName(prefix, name) {
    return prefix + capitalize(name);
}

function invokedAsDecorator(...args) {
    return (args.length === 3);
}

// -- PUBLIC API

export function accessor ({getter = true, setter = true} = {}) {

    function decorator(target, name, descriptor) {
        let accessorName = name.replace(/^_/, '');
        Object.defineProperty(
            target,
            accessorName,
            {
                get: getter ? function getter () {
                    return this[name];
                } : undefined,
                set: setter ? function setter (value) {
                    this[name] = value;
                } : undefined
            }
        );

    }

    return  invokedAsDecorator(...arguments) ? decorator(...arguments) :  decorator;
}

export function property ({getter = GETTER, setter = SETTER} = {})  {

    function decorator(target, name, descriptor) {

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
    }

    return invokedAsDecorator(...arguments) ? decorator(...arguments) :  decorator;
}

export function getter (prefix = GETTER) {
    return function (...args) {
        property({getter: prefix, setter: false})(...args);
    };
}
