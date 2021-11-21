import test from 'ava'
import hasMatch from './index.js'

const garden = {
	name: 'Sunny Fields',
	plants: ['roses', 'lilies', 'gerberas'],
}

test('main', (t) => {
	t.is(hasMatch({}, 'roses'), false)
	t.is(hasMatch(garden, 'roses'), true)
	t.is(hasMatch(garden, 'sunny'), false)
	t.is(hasMatch(garden, 'sunny fields'), true)
	t.is(hasMatch(garden, 'sunny fields', ['plants']), false)
})
