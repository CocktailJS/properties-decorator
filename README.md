# properties-decorator

[![npm version](https://badge.fury.io/js/properties-decorator.svg)](http://badge.fury.io/js/properties-decorator)
[![Build Status](https://travis-ci.org/CocktailJS/properties-decorator.svg)](https://travis-ci.org/CocktailJS/properties-decorator)

ES7 experimental library to create getters and setter for initializers with decorators.

## Install

> using npm

```
npm i -S properties-decorator
```


> using git repository
 
```
npm i -S git://github.com/cocktailjs/properties-decorator
```

## API

### @accessor({getter: true, setter: true})

This will create the get and set accessor for an initializer property **prefixed with underscore**.

```js
class MyClass {
    @accessor() // generates get/set accessor value
    _value = 1

    @accessor // generates get/set accessor text
    _text = 'text'
}

let obj = new MyClass()
console.log(obj.value) // call get accessor to retrieve _value -> 1
```



### @property(options = {getter: 'get', setter: 'set'})

It creates a getter and setter based on the prefixes. You can pass `false` on any prefix to not create the setter or getter.

```js
class MyClass {
    @property() // this will generate getValue and setValue
    value = 1

    @property // this will generate getText and setText
    text = 'whoa'
}

```

```js
class MyClass {
    @property({getter: 'has'}) // this will generate hasValue and setValue
    value = true
}

```

### @getter(prefix = 'get')

This is a shortcut to create a property with only a getter.

```js
class MyClass {
    @getter() // this is equiv to @property({setter: false})
    value = 1
}

```

## Usage

```js
'use strict'

import {property, getter, accessor} from 'properties-decorator'

class MyClass {
    @property({getter: 'is'}) // this will generate isEnabled and setEnabled
    enabled = true

    @property() // underscored initializer, also generates getCount and setCount
    _count = 0

    @getter() // getValue
    value = 1

    @accesor // get/set accesor text
    _text = 'text'
}

```


## License MIT
