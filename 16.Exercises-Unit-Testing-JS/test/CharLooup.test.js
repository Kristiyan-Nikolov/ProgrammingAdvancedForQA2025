import {lookupChar} from "../02.CharLookup.js"
import { expect } from "chai"

describe("Testing CharLookup function",()=>{
    it("Check if string input is not a string, returns undefined",()=>{
        expect(lookupChar(1,1)).to.be.undefined
        expect(lookupChar([1, 'asd', 3],1)).to.be.undefined
        expect(lookupChar({"keymaster": "slavedriver"},1)).to.be.undefined
        expect(lookupChar(null,1)).to.be.undefined
        expect(lookupChar(NaN,1)).to.be.undefined
        expect(lookupChar()).to.be.undefined
        expect(lookupChar(true, 1)).to.be.undefined
        expect(lookupChar(Symbol("test"),1)).to.be.undefined
        expect(lookupChar(123n,1)).to.be.undefined
        expect(lookupChar(undefined, 1)).to.be.undefined
    }),
    it("Check if the index is not a number returns undefined", ()=>{
        expect(lookupChar('Kriso',[1])).to.be.undefined
        expect(lookupChar('Kriso',{key: 1})).to.be.undefined
        expect(lookupChar('Kriso','kriso')).to.be.undefined
        expect(lookupChar('Kriso',null)).to.be.undefined
        expect(lookupChar('Kriso',NaN)).to.be.undefined
        expect(lookupChar('Kriso',1.1)).to.be.undefined
        
    }),
    it("Check if the proper error appears when the index is out of bounds", ()=>{
        expect(lookupChar('',1)).to.be.equal('Incorrect index')
        expect(lookupChar('kriso',-1)).to.be.equal('Incorrect index')
        expect(lookupChar('kriso',5)).to.be.equal('Incorrect index')
        expect(lookupChar('',0)).to.be.equal('Incorrect index')
    }),
    it("Check that the correct character is returned for valid string and index",()=>{
        expect(lookupChar('kriso',0)).to.be.equal('k')
        expect(lookupChar('kriso',4)).to.be.equal('o')
        expect(lookupChar('kriso ',5)).to.be.equal(' ') // whitespace is counted as a char
        expect(lookupChar('kriso e bok',7)).to.be.equal(' ') // again whitespace in a sentence
    })
})