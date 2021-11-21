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

hasMatch(garden, 'roses')
// => true

hasMatch(garden, 'sunny fields')
// => true

hasMatch(garden, 'sunny fields', ['plants'])
// => false
```

## Related

- [has-partial-match](https://github.com/mvllow/has-partial-match)
- [filter-match](https://github.com/mvllow/has-partial-match)
