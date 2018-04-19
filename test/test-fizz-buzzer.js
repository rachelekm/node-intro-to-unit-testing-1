const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

//for seeing if nums are divisible, test if input gives expected result
//create expect to test if they're actually numbers and if not throw an error

describe('fizzBuzzer', function(){
	it('should produce buzz if divisible by 5 and fizz if divisible by 3', function(){
		const normalCases = [
		{testNum: 10, expected: 'buzz'},
		{testNum: 9, expected: 'fizz'},
		{testNum: 15, expected: 'fizz-buzz'},
		];

		normalCases.forEach(object => {
			const answer = fizzBuzzer(object.testNum);
			expect(answer).to.equal(object.expected);
		});
	});
	it('should produce input number if not divisible by 3 or 5', function(){
		const numCases = [4, 7, 1, 13];
		numCases.forEach(item => {
			expect(fizzBuzzer(item)).to.equal(item)
		});
	});
	it('should be a number', function() {
		const edgeCases = [
		'a',
		false,
		[1, 2, 3]
		];
		edgeCases.forEach(item => {
			expect(function(){fizzBuzzer(item)}).to.throw(Error);
		});
	});
});