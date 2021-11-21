# has-match

> Check object value for match

## Install

```sh
npm install has-match
```

## Usage

```js
import hasMatch from 'has-match'

const garden = {
	name: 'Sunny Fields',
	plants: ['roses', 'lilies', 'gerberas'],
}

hasMatch(garden, 'gerb')
// => true

hasMatch(garden, 'sunny fields')
// => true

hasMatch(garden, 'sunny fields', ['plants'])
// => false
```
