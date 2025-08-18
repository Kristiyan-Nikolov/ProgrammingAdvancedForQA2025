import {isOddOrEven} from "../01.OddOrEven.js"
import { expect } from "chai"

describe("Tests for OddOrEven function",()=>{
    it("check if input is not a string and returns undefined",()=>{
        expect(isOddOrEven(3)).to.be.undefined
        expect(isOddOrEven([1, 2, 3])).to.be.undefined
        expect(isOddOrEven(true)).to.be.undefined
        expect(isOddOrEven({3:'asdf'})).to.be.undefined
        expect(isOddOrEven(null)).to.be.undefined
        expect(isOddOrEven(undefined)).to.be.undefined
        expect(isOddOrEven(NaN)).to.be.undefined
        expect(isOddOrEven(()=>{})).to.be.undefined
        expect(isOddOrEven(Symbol("test"))).to.be.undefined
        expect(isOddOrEven(123n)).to.be.undefined
        expect(isOddOrEven()).to.be.undefined
    }),
    it("Check if we input Even length words returns even string",()=>{
        expect(isOddOrEven('even')).to.be.equal('even')
        expect(isOddOrEven('')).to.be.equal('even') // kinda sus it returns even, there should be a check and a bug >>
        expect(isOddOrEven('testing ')).to.be.equal('even') // doesn't trim so odd words with a single whitespace is counted as even
        expect(isOddOrEven(' testing')).to.be.equal('even') // doesn't trim from the start as well
        expect(isOddOrEven('war pigs')).to.be.equal('even') // not surprised this also works. Might as well put sentences here
    }),
    it("Check if we input odd length words returns odd string",()=>{
        expect(isOddOrEven('odd')).to.be.equal('odd')
        expect(isOddOrEven('o')).to.be.equal('odd') // single char also will pass...another failed check
        expect(isOddOrEven('even ')).to.be.equal('odd') // also counting whitespace behind
        expect(isOddOrEven(' even')).to.be.equal('odd') // also counting whitespace from the start
        expect(isOddOrEven('Iron man ')).to.be.equal('odd') // not surprised this also works. Might as well put sentences here
    })
    
})