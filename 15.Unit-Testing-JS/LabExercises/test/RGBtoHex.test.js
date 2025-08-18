import {rgbToHexColor} from '../03.RGBtoHex.js'
import { expect } from 'chai'

describe('Test RGBtoHex',()=>{
    it('Should return undefined if data for RGB is incorrect', ()=>{
        expect(rgbToHexColor(-1, 255, 5)).to.undefined
        expect(rgbToHexColor('a', -255, -5)).to.undefined
        expect(rgbToHexColor(256, -255, -5)).to.undefined

        expect(rgbToHexColor(5, -2, 5)).to.undefined
        expect(rgbToHexColor(5, 'b', 5)).to.undefined
        expect(rgbToHexColor(5, 256, 5)).to.undefined

        expect(rgbToHexColor(5, 5, -1)).to.undefined
        expect(rgbToHexColor(5, 5, 'b')).to.undefined
        expect(rgbToHexColor(5, 5, 256)).to.undefined
       
    }),
    it('should return the proper Hex code if the input is in the proper range',()=>{
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000')
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00')
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF')
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
        expect(rgbToHexColor(173, 216, 230)).to.equal('#ADD8E6')
    })
})