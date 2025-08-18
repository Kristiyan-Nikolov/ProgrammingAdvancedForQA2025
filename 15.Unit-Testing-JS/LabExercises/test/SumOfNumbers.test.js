import {sum} from '../01.SumOfNumbers.js'
import { expect } from 'chai'

describe('Test sum function', ()=>{
    it('Test sum funciton should return correct sum with positive numbers', ()=>{
        // arrange
        let array = [1, 2, 3, 4]
        let expected = 10
        // act
        let result = sum(array)
        // assert
        expect(result).to.equal(expected)
    }),
    it('Test sum function should return correct sum with negative numbers', ()=>{
        // arrange
        let array = [-1, -2, -3, -4]
        let expected = -10
        // act
        let result = sum(array)
        // assert
        expect(result).to.equal(expected)
    }),
    it('Test sum function should return 0 if input array is empty', ()=>{
        // arrange 
        let array = []
        let expected = 0
        // act
        let result = sum(array)
        // assert
        expect(result).to.equal(expected)
    })
})