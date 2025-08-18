import {createCalculator} from '../04.AddSubtract.js'
import { expect } from 'chai'

describe('Test createCalculator',()=>{
    let calculator
    beforeEach(()=>{
        calculator = createCalculator()
    })
    it('should add number correctly if input is a number',()=>{
        calculator.add(7)
        expect(calculator.get()).to.equal(7)
    }),
      it('should add number correctly if input is a string',()=>{
        calculator.add('7')
        calculator.add(5)
        expect(calculator.get()).to.equal(12)
    }),
    it('should add and subtract number correctly if input is a number or a string',()=>{
        calculator.add('7')
        calculator.add(5)
        calculator.subtract(5)
        calculator.subtract('2')
        expect(calculator.get()).to.equal(5)
    }),
    it('should subtract number correctly if input is a number or a string',()=>{
       
        calculator.subtract(5)
        calculator.subtract('2')
        expect(calculator.get()).to.equal(-7)
    }),
    it('should return undefined if we attempt to modify value from outside ',()=>{
        expect(calculator.value).to.be.undefined
    })
    
})