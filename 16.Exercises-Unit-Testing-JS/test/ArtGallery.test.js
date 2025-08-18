import {artGallery} from '../05.ArtGallery.js'
import { expect } from 'chai'

describe('ArtGallery function',()=>{
    describe('AddArtwork',()=>{
        it('check if title input is not a string throws error',()=>{
            const invalidTitles = [1, [1], {key:1}, null, undefined, true, Symbol('x'), 123n, NaN] // Eurika moment! 
            invalidTitles.forEach(title => {
                expect(()=> artGallery.addArtwork(title, '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!') // why input em one by one when a loop can do the same shit
            })
            // expect(()=> artGallery.addArtwork(1, '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork([1], '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork({'key': 1}, '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork(Symbol('Famous piece'), '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork(123n, '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork(null, '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork(NaN, '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork(undefined, '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork(true, '30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Information!') 
        }),
        it('check if artist is not a string throws error',()=>{
            const invalidArtist = [1, [1], {key:1}, null, undefined, true, Symbol('x'), 123n, NaN] 
            invalidArtist.forEach(artist => {
                expect(()=> artGallery.addArtwork('Famous piece', '30 x 40', artist)).to.throw(Error, 'Invalid Information!')
            })
            // expect(()=> artGallery.addArtwork('Famous piece', '30 x 40', 1)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30 x 40', [1])).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30 x 40', {'key': 1})).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30 x 40', Symbol('Van Gogh'))).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30 x 40', 123n)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30 x 40', null)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30 x 40', NaN)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30 x 40', undefined)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30 x 40', true)).to.throw(Error, 'Invalid Information!') 
        }),
        it('check if dimensions is not properly set throws error',()=>{
            const invalidDimensions = [1, [1], {key:1}, null, undefined, true, 123n, NaN, '30x40', '30 x40', '30x 40', ' 30 x 40', '30 x 40 ', 'asd30 x 40'] 
            invalidDimensions.forEach(dimensions => {
                expect(()=> artGallery.addArtwork('Famous piece', dimensions, 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!')
            })
            // expect(()=> artGallery.addArtwork('Famous piece', 30, 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30x40', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30 x40', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30x 40', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!')
            // expect(()=> artGallery.addArtwork('Famous piece', ' 30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!')
            // expect(()=> artGallery.addArtwork('Famous piece', '30 x 40 ', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!')
            // expect(()=> artGallery.addArtwork('Famous piece', 'asd30 x 40', 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!')
            // expect(()=> artGallery.addArtwork('Famous piece', null, 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!')
            // expect(()=> artGallery.addArtwork('Famous piece', NaN, 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!')
            // expect(()=> artGallery.addArtwork('Famous piece', undefined, 'Van Gogh')).to.throw(Error, 'Invalid Dimensions!')
        }),
        it('check if artist is a string input but is different that the required const array',()=>{
            expect(()=> artGallery.addArtwork('Famous piece', '30 x 40', 'Kriso maistora')).to.throw(Error, 'This artist is not allowed in the gallery!')
        }),
        it('check if all inputs are valid and return proper message',()=>{
            expect(artGallery.addArtwork('Famous piece', '30 x 40', 'Van Gogh')).to.be.equals(`Artwork added successfully: 'Famous piece' by Van Gogh with dimensions 
        30 x 40.`)
        })
    })
    describe('calculateCosts', ()=>{
        it('check if exhibitionCosts is a non number throws error',()=>{
            const invalidExhibitionCosts = ['string', [1], {key:1}, null, undefined, true,  123n, -2500] // Eurika moment! 
            invalidExhibitionCosts.forEach(exhibitionCost => {
                expect(()=> artGallery.calculateCosts(exhibitionCost, 2500, true)).to.throw(Error, 'Invalid Information!') // why input em one by one when a loop can do the same shit
            })
            // expect(()=> artGallery.calculateCosts([1], 2500, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts('string', 2500, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts({'key':1}, 2500, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(Symbol(1), 2500, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(123n, 2500, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(null, 2500, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(undefined, 2500, true)).to.throw(Error, 'Invalid Information!')
            // //expect(()=> artGallery.calculateCosts(NaN, 2500, true)).to.throw(Error, 'Invalid Information!') // might fail successfully because NaN is a number(?!)
            // expect(()=> artGallery.calculateCosts(true, 2500, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(-2500, 2500, true)).to.throw(Error, 'Invalid Information!') // adding negative value 
        }),
        it('check if insuranceCosts is a non number throws error', ()=>{
            const invalidInsuranceCosts = ['string', [1], {key:1}, null, undefined, true,  123n, -2500] // Eurika moment! 
            invalidInsuranceCosts.forEach(insuranceCost => {
                expect(()=> artGallery.calculateCosts(2500, insuranceCost, true)).to.throw(Error, 'Invalid Information!') // why input em one by one when a loop can do the same shit
            })
            // expect(()=> artGallery.calculateCosts(2500, [1], true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, 'string', true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, {'key':1}, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, Symbol(1), true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, 123n, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, null, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, undefined, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, true, true)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, -2500, true)).to.throw(Error, 'Invalid Information!') // adding negative value 
        }),
        it('check if sponsor is a non boolean input throws error',()=>{
            const invalidSponsor = ['string', 1, [1], {'key': 1}, null, undefined, 123n, NaN]
            invalidSponsor.forEach(sponsor =>{
                expect(()=> artGallery.calculateCosts(2500, 2500, sponsor)).to.throw(Error, 'Invalid Information!')
            })
            // expect(()=> artGallery.calculateCosts(2500, 2500, 1)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, 2500, 'true')).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, 2500, [1])).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, 2500, {'key':1})).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, 2500, Symbol(true))).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, 2500, 123n)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, 2500, null)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, 2500, NaN)).to.throw(Error, 'Invalid Information!')
            // expect(()=> artGallery.calculateCosts(2500, 2500, undefined)).to.throw(Error, 'Invalid Information!')
        }),
        it('check if totalPrice is correct with sponsor as false',()=>{
            expect(artGallery.calculateCosts(2500, 2500, false)).to.be.equal('Exhibition and insurance costs are 5000$.')
        }),
        it('check if totalPrice is correct with sponsor as true',()=>{
            expect(artGallery.calculateCosts(2500, 2500, true)).to.be.equal('Exhibition and insurance costs are 4500$, reduced by 10% with the help of a donation from your sponsor.')
        })
    })
     describe('OrganizeExhibits',()=>{
         it('check if artworkCount is a non number throws error',()=>{
            const invalidArtworkCount = ['string', [1], {key:1}, null, undefined, true,  123n, -2500]
            invalidArtworkCount.forEach(artworkCount=>{
                expect(()=>artGallery.organizeExhibits(artworkCount, 3)).to.throw(Error, 'Invalid Information!');
                
            }),
            it('check if displaySpacesCount is a non number throws error', ()=>{
                const invalidDisplaySpaceCount = ['string', [1], {key:1}, null, undefined, true,  123n, -2500]
            invalidDisplaySpaceCount.forEach(displaySpaceCount=>{
                expect(()=>artGallery.organizeExhibits(5, displaySpaceCount)).to.throw(Error, 'Invalid Information!');
            }),
            it('check if division result is less than the magic number 5',()=>{
                expect(artGallery.organizeExhibits(100, 22)).to.be.equal('There are only 4 artworks in each display space, you can add more artworks.')
            }),
            it('check if division result is more than the magic number 5',()=>{
                expect(artGallery.organizeExhibits(100, 15)).to.be.equal('You have 15 display spaces with 6 artworks in each space.')
            }),
            it('check if division is exactly 5',()=>{
                expect(artGallery.organizeExhibits(100, 18)).to.be.equal('You have 18 display spaces with 5 artworks in each space.')
            })
        })
        })
    })
})