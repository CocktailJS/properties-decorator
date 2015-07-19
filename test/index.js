'use strict'

import tap from 'tap'

import { property, getter } from '../'


tap.test('@property should create a getter and setter', function(suite) {

    tap.test('default values', function(t) {
        class SUT {
            @property()
            value = 1
        }

        t.ok(SUT.prototype.getValue, 'getValue method should be created')
        t.ok(SUT.prototype.setValue, 'setValue method should be created')
        t.end()
    })

    suite.end()
})

tap.test('@getter should create a getter and no setter', function(suite) {

    tap.test('default values', function(t) {
        class SUT {
            @getter()
            value = 1
        }

        t.ok(SUT.prototype.getValue, 'getValue method should be created')
        t.ok(!SUT.prototype.setValue, 'setValue method should not be created')
        t.end()
    })

    suite.end()
})
