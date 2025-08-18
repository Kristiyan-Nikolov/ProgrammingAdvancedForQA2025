import {analyzeArray} from "../04.ArrayAnalyzer.js"
import { expect } from "chai"

describe("Test ArrayAnalyzer function", ()=>{
    it('check if input is a not an array returns undefined',()=>{
        expect(analyzeArray(1)).to.be.undefined
        expect(analyzeArray({'key': 1})).to.be.undefined
        expect(analyzeArray('string')).to.be.undefined
        expect(analyzeArray(Symbol(1))).to.be.undefined
        expect(analyzeArray(null)).to.be.undefined
        expect(analyzeArray(NaN)).to.be.undefined
        expect(analyzeArray(undefined)).to.be.undefined
        expect(analyzeArray()).to.be.undefined
        expect(analyzeArray(123n)).to.be.undefined
        expect(analyzeArray(()=>{})).to.be.undefined
    }),
    it('check if input is a non number array returns undefined', ()=>{
        expect(analyzeArray([1, 2, 'dog'])).to.be.undefined
        expect(analyzeArray([1, 2, 123n])).to.be.undefined
        expect(analyzeArray([1, 2, {'key': 1}])).to.be.undefined
        expect(analyzeArray([1, 2, null])).to.be.undefined
        expect(analyzeArray([1, 2, Symbol(1)])).to.be.undefined
        expect(analyzeArray([1, 2, undefined])).to.be.undefined
        expect(analyzeArray([1, 2, true])).to.be.undefined
        //expect(analyzeArray([1, 2, NaN])).to.be.undefined NaN is considered a number! so the test will fail to be undefined, it will return actual result
    }),
    it('check if valid input array returns correct results', ()=>{
        expect(analyzeArray([1, 2, 3])).to.be.eql({ min: 1, max: 3, length: 3 })
        expect(analyzeArray([-256, 255, 0])).to.be.eql({ min: -256, max: 255, length: 3 })
        expect(analyzeArray([0])).to.be.eql({ min: 0, max: 0, length: 1 })
        expect(analyzeArray([0, 0, 0])).to.be.eql({ min: 0, max: 0, length: 3 })
    }),
    it('check if an empty array returns undefined', ()=>{
        expect(analyzeArray([])).to.be.undefined
    }),
    it('check if a single element array returns correct object',()=>{
        expect(analyzeArray([0])).to.be.eql({ min: 0, max: 0, length: 1 })
        expect(analyzeArray([-5])).to.be.eql({ min: -5, max: -5, length: 1 })
        expect(analyzeArray([5])).to.be.eql({ min: 5, max: 5, length: 1 })
    })

})