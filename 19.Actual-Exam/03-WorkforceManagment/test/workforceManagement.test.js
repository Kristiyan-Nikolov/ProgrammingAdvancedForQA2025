import { workforceManagement } from '../workforceManagement.js'
import { describe } from 'mocha'
import { expect, assert } from 'chai'

describe('Tests for workforceManagment', () => {

    describe('Test recruitStaff', () => {
        it('should should throw an error on invalid role', () => {
            expect(()=>workforceManagement.recruitStaff('Kriso', 'Senior Analyst, Complaints', 3)).to.throw(Error, 'We are not currently hiring for this role.')
        });

        it('should hire worker', () => {
            expect(workforceManagement.recruitStaff('Kriso', 'Developer', 4)).to.be.equal('Kriso has been successfully recruited for the role of Developer.')
        });

        it('should not hire workers with less than 4 years experience', () => {
            expect(workforceManagement.recruitStaff('Kriso', 'Developer', 3)).to.be.equal(`Kriso is not suitable for this role.`)
        });
    });

    describe('Test computeWages', () => {
        it('should return totalPayment with less than or equal to 160 hours', () => {
            expect(workforceManagement.computeWages(80)).to.be.equal(1440)
        });

        it('should return totalPayment with bonus over 160 hours', () => {
            expect(workforceManagement.computeWages(161)).to.be.equal(4398)
        });

        it('should throw an error on invalid hours worked', () => {
            expect(()=>workforceManagement.computeWages('string')).to.throw(Error, 'Invalid hours')
        });
    });

    describe('Test dismissEmployee', () => {
        it('should remove employee', () => {
            expect(workforceManagement.dismissEmployee(['Kriso', 'Ivelina', 'Vess'],1)).to.be.equal('Kriso, Vess')
        });

        it('should throw an error on invalid workforce', () => {
            expect(()=>workforceManagement.dismissEmployee('Kriso Vess',1)).to.throw(Error, 'Invalid input')
            expect(()=>workforceManagement.dismissEmployee({'Kriso': 'Vess'},1)).to.throw(Error, 'Invalid input')
        });

        it('should throw an error on invalid employee index', () => {
            expect(()=>workforceManagement.dismissEmployee(['Kriso', 'Vess', 'Kris'],'Kriso')).to.throw(Error, 'Invalid input')
            expect(()=>workforceManagement.dismissEmployee(['Kriso', 'Vess', 'Kris'],-1)).to.throw(Error, 'Invalid input')
            expect(()=>workforceManagement.dismissEmployee(['Kriso', 'Vess', 'Kris'],3)).to.throw(Error, 'Invalid input')
        });
    });
}); 