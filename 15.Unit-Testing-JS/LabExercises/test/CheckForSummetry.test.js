import {isSymmetric} from '../02.CheckForSummetry.js'
import { expect } from 'chai'

describe('Tests for Check for Symmetry function', ()=>{
    it('Check if the function returns true if a symmetric array is given',()=>{
       expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true
       expect(isSymmetric(['hi','hello','hi'])).to.be.true
       expect(isSymmetric(['a', 2, 3, 2, 'a'])).to.be.true
       expect(isSymmetric(['a', [2], 3, [2], 'a'])).to.be.true
    }),
    it('Check if the input is not an array and returns false', ()=>{
        expect(isSymmetric(1)).to.be.false
        expect(isSymmetric('true')).to.be.false
        expect(isSymmetric(1,2,3)).to.be.false
    }),
    it('Check a non symmetric array returns false',()=>{
        expect(isSymmetric([1, 2, 3])).to.be.false
        expect(isSymmetric([1, 'true', 3])).to.be.false
        expect(isSymmetric([1, 2, [3]])).to.be.false
    }),
    it('Check an empty array returns false', ()=>{
        // arrange
        let array = []
        // act
        let result = isSymmetric(array)
        // assert
        expect(result).is.true
    })
})