import {describe} from 'mocha'
import {assert, expect} from 'chai'
import {sum, multiply, divide, subtract} from '../calculator.js'

describe('Demo tests', ()=> {
    it('Test sum function', ()=>{
        // arrange
        let x = 5
        let y = 10
        let expected = 15
        // act
        let result = sum(x,y)
        
        // assert
        expect(result).to.equal(expected)
    }),
    it('Test multiply function', ()=>{
        expect(multiply(2, 20)).to.equal(40)
    }),
    it('Test divide function', ()=>{
        // arrange
        let x = 10
        let y = 2
        let expected = 5
        // act
        let result = divide(x, y)
        // assert
        assert.equal(result, expected)
    })
})