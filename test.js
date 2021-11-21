import test from 'ava'
import hasMatch from './index.js'

const garden = {
	name: 'Sunny Fields',
	plants: ['roses', 'lilies', 'gerberas'],
}

test('main', (t) => {
	t.is(hasMatch({}, 'lilies'), false)
	t.is(hasMatch(garden, 'pineapple'), false)
})

test('match string value', (t) => {
	t.is(hasMatch(garden, 'sunny fields'), true)
})

test('match string value in array', (t) => {
	t.is(hasMatch(garden, 'roses'), true)
})

test('partial match string value', (t) => {
	t.is(hasMatch(garden, 'sun'), true)
})

test('partial match string value in array', (t) => {
	t.is(hasMatch(garden, 'ger'), true)
})

test('match included keys only', (t) => {
	t.is(hasMatch(garden, 'sunny fields', ['plants']), false)
	t.is(hasMatch(garden, 'roses', ['plants']), true)
})
