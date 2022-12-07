const Manager = require("../lib/Manager")

describe('Manager class', () => {
    describe('Constructor', () => {
        it('should create a Manager object', () => {
            // arange
            const manager = new Manager ('Fred', 3456, 'FredMeyer@abcd.com', 9000);

            // act & assert
            expect(manager.name).toEqual(expect.any(String));
            expect(manager.id).toEqual(expect.any(Number));
            expect(manager.email).toEqual(expect.any(String));
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });
            // gets role from getRole()
            it('should get role of employee', () => {
            // arrange
                const manager = new Manager ('Fred', 3456, 'FredMeyer@abcd.com', 9000);

                // act & assert
                expect(manager.getRole()).toEqual("Manager");
})
})
})