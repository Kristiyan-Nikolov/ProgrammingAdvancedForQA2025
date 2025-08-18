import { chooseYourCar } from '../chooseYourCar.js'
import { describe } from 'mocha'
import { expect, assert } from 'chai';

describe('Test chooseYourCar', () => {
    describe('choosingType', () => {
        it('should throw an error on invalid input', () => {
            expect(()=>chooseYourCar.choosingType('coupe', 'red', 1991)).to.throw(Error, `This type of car is not what you are looking for.`)
            expect(()=>chooseYourCar.choosingType('Sedan', 'red', 1899)).to.throw(Error, `Invalid Year!`)
            expect(()=>chooseYourCar.choosingType('Sedan', 'red', 2025)).to.throw(Error, `Invalid Year!`)
        });
        it('should meet requirments for a car', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.be.equal(`This red Sedan meets the requirements, that you have.`)
        });
        it('should not meet requirments for a car', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.be.equal(`This Sedan is too old for you, especially with that red color.`)
        });
    });

    describe('brandName', () => {
        it('should throw an error on invalid input', () => {
            expect(()=>chooseYourCar.brandName('BMW', 3)).to.throw(Error, 'Invalid Information!')
            expect(()=>chooseYourCar.brandName(['BMW', 'Mercedes'], 'BMW')).to.throw(Error, 'Invalid Information!')
            expect(()=>chooseYourCar.brandName(['BMW', 'Mercedes'], -1)).to.throw(Error, 'Invalid Information!')
            expect(()=>chooseYourCar.brandName(['BMW', 'Mercedes'], 3)).to.throw(Error, 'Invalid Information!')
            expect(()=>chooseYourCar.brandName(['BMW', 'Mercedes'], 3.5)).to.throw(Error, 'Invalid Information!')
            expect(()=>chooseYourCar.brandName('BMW', '')).to.throw(Error, 'Invalid Information!')
        });

        it('should return the correct brands', () => {
            expect(chooseYourCar.brandName(['BMW', 'Mercedes', 'Toyota'], 1)).to.be.equal('BMW, Toyota')
        });
    });

    describe('carFuelConsumption', () => {
        it('should throw an error on invalid input', () => {
            expect(()=>chooseYourCar.carFuelConsumption('number', 15)).to.throw(Error, 'Invalid Information!')
            expect(()=>chooseYourCar.carFuelConsumption(150, 'number')).to.throw(Error, 'Invalid Information!')
            expect(()=>chooseYourCar.carFuelConsumption(-150, 15)).to.throw(Error, 'Invalid Information!')
            expect(()=>chooseYourCar.carFuelConsumption(150, -15)).to.throw(Error, 'Invalid Information!')
        });

        it('should return message for an efficient car', () => {
            expect(chooseYourCar.carFuelConsumption(100, 5.50)).to.be.equal('The car is efficient enough, it burns 5.50 liters/100 km.')
        });

        it('should return message for an non efficient car', () => {
            expect(chooseYourCar.carFuelConsumption(100, 15.2)).to.be.equal('The car burns too much fuel - 15.20 liters!')
        });
    });
});