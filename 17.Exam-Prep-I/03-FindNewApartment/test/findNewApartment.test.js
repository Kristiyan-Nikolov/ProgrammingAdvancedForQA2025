import { findNewApartment } from '../findNewApartment.js'
import { describe } from 'mocha'
import { expect, assert } from 'chai'

describe('test_findNewApartment', () =>{
    describe('isGoodLocation', () => {
        it('should throw error on invalid input', () => {
            expect(()=>findNewApartment.isGoodLocation(123n, true)).to.throw(Error, 'Invalid input')
            expect(()=>findNewApartment.isGoodLocation('Sofia', 'string')).to.throw(Error, 'Invalid input')
            expect(()=>findNewApartment.isGoodLocation(['Sofia'], false)).to.throw(Error, 'Invalid input')
        });
        it('should return "This location is not suitable for you." if location is not valid', () => {
            let expected = 'This location is not suitable for you.'
            expect(findNewApartment.isGoodLocation('Montana', true)).to.be.equal(expected)
            expect(findNewApartment.isGoodLocation('Dobrich', false)).to.be.equal(expected)
        });
        it('should return "You can go on home tour!" if location is good and public transport is available', () => {
            let expected = 'You can go on home tour!'
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.be.equal(expected)
        });
        it('should return "There is no public transport in area." if location is good but public transport is unavailable', () => {
            let expected = 'There is no public transport in area.'
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.be.equal(expected)
        });
    }),
    describe('Test isLargeEnough', () => {
        it('Should return apartments that meet the wanted criteria for minimal square meters', () => {
            let apartments = [40, 55, 45.5, 65 ]
            expect(findNewApartment.isLargeEnough(apartments, 45)).to.be.equal('55, 45.5, 65')
            expect(findNewApartment.isLargeEnough(apartments, 75)).to.be.equal('') // should return a string at least informing the user there are no apartments wtih his minimum sq m requirment
        });

        it('Should throw error on invalid input', () => {
            expect(()=>findNewApartment.isLargeEnough([], 45)).to.throw(Error, 'Invalid input!')
            expect(()=>findNewApartment.isLargeEnough([49, 55, 132], 'string')).to.throw(Error, 'Invalid input!')
            expect(()=>findNewApartment.isLargeEnough(49, 45)).to.throw(Error, 'Invalid input!')
        });
    }),
    describe('isItAffordable', () => {
        it('should throw an error on invalid input', () => {
            expect(()=>findNewApartment.isItAffordable('number', 1500)).to.throw(Error, 'Invalid input!')
            expect(()=>findNewApartment.isItAffordable(1500, 'number')).to.throw(Error, 'Invalid input!')
            expect(()=>findNewApartment.isItAffordable(1500, -5)).to.throw(Error, 'Invalid input!')
            expect(()=>findNewApartment.isItAffordable(-1500, 1599)).to.throw(Error, 'Invalid input!')
            expect(()=>findNewApartment.isItAffordable(1500, true)).to.throw(Error, 'Invalid input!')
        });
        it('should not be affordable if price is greater than budget', () => {
            expect(findNewApartment.isItAffordable(1500, 1450)).to.be.equal(`You don't have enough money for this house!`)
        });
        it('should be affordable if price is equal to or less than budget', () => {
            expect(findNewApartment.isItAffordable(1500, 1550)).to.be.equal(`You can afford this home!`)
        });
    })
})


