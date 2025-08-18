import {foodDelivery} from '../06.FoodDelivery.js'
import { expect } from 'chai'

describe('FoodDelivery',()=>{
    describe('getCategory',()=>{
        it('should throw error if input is not valid',()=>{
            expect(()=>foodDelivery.getCategory('Pescatarian')).to.throw(Error, 'Invalid Category!')
        }),
        it('should return proper message if input is Vegan, case sensitive',()=>{
            expect(foodDelivery.getCategory('Vegan')).to.be.equal('Dishes that contain no animal products.')
        }),
        it('should return proper message if input is Vegetarian, case sensitive',()=>{
            expect(foodDelivery.getCategory('Vegetarian')).to.be.equal('Dishes that contain no meat or fish.')
        }),
        it('should return proper message if input is Gluten-Free, case sensitive',()=>{
            expect(foodDelivery.getCategory('Gluten-Free')).to.be.equal('Dishes that contain no gluten.')
        }),
        it('should return proper message if input is All, case sensitive',()=>{
            expect(foodDelivery.getCategory('All')).to.be.equal('All available dishes.')
        })
    })
    describe('addMenuItem',()=>{
        it('should throw error if both input items are not valid',()=>{
            let validMenuItem = [
                {name: 'Pizza', price: 10},
                {name: 'Pasta', price: 15},
                {name: 'Beef', price: 20}
            ]
            expect(()=>foodDelivery.addMenuItem(validMenuItem, 4)).to.throw(Error, 'Invalid Information!')
            expect(()=>foodDelivery.addMenuItem(validMenuItem, 'abc')).to.throw(Error, 'Invalid Information!')
            expect(()=>foodDelivery.addMenuItem('pizza', 6)).to.throw(Error, 'Invalid Information!')
            expect(()=>foodDelivery.addMenuItem([], 6)).to.throw(Error, 'Invalid Information!')
        }),
        it('should return proper information if inputs are valid',()=>{
            let validMenuItem = [
                {name: 'Pizza', price: 10},
                {name: 'Pasta', price: 15},
                {name: 'Beef', price: 20},
                {name: 'langustin', price: 35}
            ]
            expect(foodDelivery.addMenuItem(validMenuItem, 30)).to.be.equal('There are 3 available menu items matching your criteria!')
        })
    })
    describe('calculateOrderCost',()=>{
        let shipping = ['standard', 'express']
        let addons = ['sauce', 'beverage']
        it('should throw error if inputs are not valid',()=>{
            expect(()=>foodDelivery.calculateOrderCost(shipping, 'abvc', true)).to.throw(Error, 'Invalid Information!')
            expect(()=>foodDelivery.calculateOrderCost(123, addons, true)).to.throw(Error, 'Invalid Information!')
            expect(()=>foodDelivery.calculateOrderCost(shipping, addons, 'xyz')).to.throw(Error, 'Invalid Information!')
        }),
        it('should return proper message if discount is false',()=>{
            expect(foodDelivery.calculateOrderCost(shipping, addons, false)).to.be.equal('You spend $12.50 for shipping and addons!')
        }),
        it('should return proper message if discount is true',()=>{
            expect(foodDelivery.calculateOrderCost(shipping,addons,true)).to.be.equal('You spend $10.63 for shipping and addons with a 15% discount!')
        })
    })
})