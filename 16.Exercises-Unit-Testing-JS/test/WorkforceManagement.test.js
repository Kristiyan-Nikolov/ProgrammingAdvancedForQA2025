import {workforceManagement} from '../07.WorkforceManagement.js'
import { expect } from 'chai'

describe('workforceManagement',()=>{
    describe('recruitStaff',()=>{
        it('should throw error if role is not developer',()=>{
            expect(()=>workforceManagement.recruitStaff('Kriso', 'developer', 5)).to.throw(Error, 'We are not currently hiring for this role.');
            expect(()=>workforceManagement.recruitStaff('Kriso', 1, 5)).to.throw(Error, 'We are not currently hiring for this role.');
            expect(()=>workforceManagement.recruitStaff('Kriso', ['Developer'], 5)).to.throw(Error, 'We are not currently hiring for this role.');
            expect(()=>workforceManagement.recruitStaff('Kriso', null, 5)).to.throw(Error, 'We are not currently hiring for this role.');
            expect(()=>workforceManagement.recruitStaff('Kriso', undefined, 5)).to.throw(Error, 'We are not currently hiring for this role.');
            expect(()=>workforceManagement.recruitStaff('Kriso', NaN, 5)).to.throw(Error, 'We are not currently hiring for this role.');
        }),
        it('should return proper message if developer experience is below 4',()=>{
            expect(workforceManagement.recruitStaff('Kriso','Developer', 2.5)).to.be.equal('Kriso is not suitable for this role.')
        }),
        it('should return proper message if developer experience is above 4',()=>{
            expect(workforceManagement.recruitStaff('Kriso', 'Developer', 4)).to.be.equal('Kriso has been successfully recruited for the role of Developer.')
        })
    })
    describe('computeWages',()=>{
        it('should throw error if hoursWorked is not a number or is below 0',()=>{
            expect(()=>workforceManagement.computeWages('1')).to.throw(Error, 'Invalid hours')
            expect(()=>workforceManagement.computeWages(-1)).to.throw(Error, 'Invalid hours')
            expect(()=>workforceManagement.computeWages([1])).to.throw(Error, 'Invalid hours')
            expect(()=>workforceManagement.computeWages({'key': 1})).to.throw(Error, 'Invalid hours')
            expect(()=>workforceManagement.computeWages(null)).to.throw(Error, 'Invalid hours')
            expect(()=>workforceManagement.computeWages(undefined)).to.throw(Error, 'Invalid hours')
            expect(()=>workforceManagement.computeWages()).to.throw(Error, 'Invalid hours')
            expect(()=>workforceManagement.computeWages(true)).to.throw(Error, 'Invalid hours')
        }),
        it('should return proper wage while between 0 and 160 hoursWorked',()=>{
            expect(workforceManagement.computeWages(15)).to.be.equal(270)
        }),
        it('should return proper wage while above 160 hoursWorked',()=>{
            expect(workforceManagement.computeWages(161)).to.be.equal(4398)
        })
    })
    describe('dismissEmployee',()=>{
        it('should throw error if inputs are incorrect',()=>{
            expect(()=>workforceManagement.dismissEmployee([], 0)).to.throw(Error, 'Invalid input')
            expect(()=>workforceManagement.dismissEmployee(null, 0)).to.throw(Error, 'Invalid input')
            expect(()=>workforceManagement.dismissEmployee(['Kriso', 'Niki'], 'string')).to.throw(Error, 'Invalid input')
            expect(()=>workforceManagement.dismissEmployee(['Kriso', 'Niki'], 4)).to.throw(Error, 'Invalid input')
        }),
        it('should return proper array if input is correct',()=>{
            expect(workforceManagement.dismissEmployee(['Peter', 'Kriso', 'Niki'], 0)).to.be.equal('Kriso, Niki')
        })
    })
})