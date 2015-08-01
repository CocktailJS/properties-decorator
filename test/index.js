'use strict';

import tap from 'tap';

import { property, getter, accessor } from '../';


tap.test('@property should create a getter and setter', function (suite) {

    tap.test('default values', function (t) {
        class SUT {
            @property()
            value = 1
        }

        t.ok(SUT.prototype.getValue, 'getValue method should be created');
        t.ok(SUT.prototype.setValue, 'setValue method should be created');
        t.end();
    });

    tap.test('getter: false, default setter', function (t) {
        class SUT {
            @property({getter: false})
            value = 1
        }

        t.notOk(SUT.prototype.getValue, 'getValue method should not be created');
        t.ok(SUT.prototype.setValue, 'setValue method should be created');
        t.end();
    });

    tap.test('default getter, setter: false', function (t) {
        class SUT {
            @property({setter: false})
            value = 1
        }

        t.ok(SUT.prototype.getValue, 'getValue method should be created');
        t.notOk(SUT.prototype.setValue, 'setValue method should not be created');
        t.end();
    });

    tap.test('getter: "has", default setter', function (t) {
        class SUT {
            @property({getter: 'has'})
            value = 1
        }

        t.ok(SUT.prototype.hasValue, 'hasValue method should be created');
        t.ok(SUT.prototype.setValue, 'setValue method should be created');
        t.end();
    });

    tap.test('getter: "has", setter: "apply"', function (t) {
        class SUT {
            @property({getter: 'has', setter: 'apply'})
            value = 1
        }

        t.ok(SUT.prototype.hasValue, 'hasValue method should be created');
        t.ok(SUT.prototype.applyValue, 'applyValue method should be created');
        t.end();
    });

    tap.test('it applies getter and setter for variable starting with _', function (t) {
        class SUT {
            @property()
            _value = 1
        }

        t.ok(SUT.prototype.getValue, 'getValue method should be created');
        t.ok(SUT.prototype.setValue, 'setValue method should be created');
        t.end();
    });

    suite.end();
});

tap.test('@getter should create a getter and no setter', function (suite) {

    tap.test('default values', function (t) {
        class SUT {
            @getter()
            value = 1
        }

        t.ok(SUT.prototype.getValue, 'getValue method should be created');
        t.notOk(SUT.prototype.setValue, 'setValue method should not be created');
        t.end();
    });

    tap.test('getter prefix: "is"', function (t) {
        class SUT {
            @getter('is')
            enabled = true
        }

        t.ok(SUT.prototype.isEnabled, 'isEnabled method should be created');
        t.notOk(SUT.prototype.setEnabled, 'setEnabled method should not be created');
        t.end();
    });

    tap.test('it applies getter for variable starting with _', function (t) {
        class SUT {
            @getter()
            _value = 1
        }

        t.ok(SUT.prototype.getValue, 'getValue method should be created');
        t.notOk(SUT.prototype.setValue, 'setValue method should not be created');
        t.end();
    });

    suite.end();
});

tap.test('@accessor should create value accessors for _value property', function (suite) {

    tap.test('default values', function (t) {
        class SUT {
            @accessor()
            _value = 1
        }

        let descriptor = Object.getOwnPropertyDescriptor(SUT.prototype, 'value');

        t.ok(descriptor.get, 'value get accessor should be created');
        t.ok(descriptor.set, 'value set accessor should be created');
        t.end();
    });

    tap.test('setter: false', function (t) {
        class SUT {
            @accessor({setter: false})
            _value = 1
        }

        let descriptor = Object.getOwnPropertyDescriptor(SUT.prototype, 'value');

        t.ok(descriptor.get, 'value get accessor should be created');
        t.notOk(descriptor.set, 'value set accessor should not be created');
        t.end();
    });

    tap.test('getter: false', function (t) {
        class SUT {
            @accessor({getter: false})
            _value = 1
        }

        let descriptor = Object.getOwnPropertyDescriptor(SUT.prototype, 'value');

        t.ok(descriptor.set, 'value set accessor should be created');
        t.notOk(descriptor.get, 'value get accessor should not be created');
        t.end();
    });

});
