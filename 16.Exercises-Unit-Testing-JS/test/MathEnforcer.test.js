import {mathEnforcer} from "../03.MathEnforcer.js"
import { expect } from "chai"

describe('mathEnforcer function',()=>{
    describe('addFive',()=>{
        it('should return undefined if input is a non number',()=>{
            expect(mathEnforcer.addFive('asd')).to.be.undefined
            expect(mathEnforcer.addFive([1, 2, 3])).to.be.undefined
            expect(mathEnforcer.addFive({'key': 2})).to.be.undefined
            expect(mathEnforcer.addFive(NaN)).to.be.NaN
            expect(mathEnforcer.addFive(null)).to.be.undefined
            expect(mathEnforcer.addFive()).to.be.undefined
            expect(mathEnforcer.addFive(undefined)).to.be.undefined
            expect(mathEnforcer.addFive(123n)).to.be.undefined
        }),
        it('should return the correct sum when given a valid number',()=>{
            expect(mathEnforcer.addFive(5)).to.be.equal(10)
            expect(mathEnforcer.addFive(-5)).to.be.equal(0)
            expect(mathEnforcer.addFive(0)).to.be.equal(5)
            expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5)
            expect(mathEnforcer.addFive(5.5123123)).to.be.equal(10.5123123)

        })
    })
    describe('subtractTen',()=>{
        it('should return undefined if input is a non number',()=>{
            expect(mathEnforcer.subtractTen('asd')).to.be.undefined
            expect(mathEnforcer.subtractTen([1, 2, 3])).to.be.undefined
            expect(mathEnforcer.subtractTen({'key': 2})).to.be.undefined
            expect(mathEnforcer.subtractTen(NaN)).to.be.NaN
            expect(mathEnforcer.subtractTen(null)).to.be.undefined
            expect(mathEnforcer.subtractTen()).to.be.undefined
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined
            expect(mathEnforcer.subtractTen(123n)).to.be.undefined
        }),
        it('should return input subtracted by 10', ()=>{
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10)
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15)
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10)
            expect(mathEnforcer.subtractTen(5.5)).to.be.equal(-4.5)
            expect(mathEnforcer.subtractTen(5.5123123)).to.be.equal(-4.4876877)
        })
    })
    describe('sum', ()=>{
        it('should return undefined if first input is a non number',()=>{
            expect(mathEnforcer.sum('asd', 1)).to.be.undefined
            expect(mathEnforcer.sum([1, 2, 3], 1)).to.be.undefined
            expect(mathEnforcer.sum({'key': 2}, 1)).to.be.undefined
            expect(mathEnforcer.sum(NaN, 1)).to.be.NaN
            expect(mathEnforcer.sum(null), 1).to.be.undefined
            expect(mathEnforcer.sum()).to.be.undefined
            expect(mathEnforcer.sum(undefined)).to.be.undefined
            expect(mathEnforcer.sum(123n, 1)).to.be.undefined
        }),
        it('should return undefined if second input is a non number',()=>{
            expect(mathEnforcer.sum(1, 'asd')).to.be.undefined
            expect(mathEnforcer.sum(1, [1, 2, 3])).to.be.undefined
            expect(mathEnforcer.sum(1, {'key': 2})).to.be.undefined
            expect(mathEnforcer.sum(NaN, 1)).to.be.NaN
            expect(mathEnforcer.sum(null), 1).to.be.undefined
            expect(mathEnforcer.sum()).to.be.undefined
            expect(mathEnforcer.sum(undefined)).to.be.undefined
            expect(mathEnforcer.sum(123n, 1)).to.be.undefined
            
        }),
        it('should return correct sum',()=>{
            expect(mathEnforcer.sum(1, 2)).to.be.equal(3)
            expect(mathEnforcer.sum(-5, 2)).to.be.equal(-3)
            expect(mathEnforcer.sum(2, -5)).to.be.equal(-3)
            expect(mathEnforcer.sum(5.45, 4.55)).to.be.closeTo(10, 0.01)
        })
    })
})