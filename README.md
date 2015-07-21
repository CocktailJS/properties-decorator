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

### @property(options = {getter: 'get', setter: 'set'})

It creates a getter and setter based on the prefixes. You can pass `false` on any prefix to not create the setter or getter.

```js
class MyClass {
    @property() // this will generate getValue and setValue
    value = 1
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

import {property, getter} from 'properties-decorator'

class MyClass {
    @property({getter: 'is'}) // this will generate isEnabled and setEnabled
    enabled = true

    @getter() // getValue
    value = 1
}

```


## License MIT
