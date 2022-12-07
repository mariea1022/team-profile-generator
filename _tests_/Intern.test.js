const Intern = require("../lib/Intern");

describe('Intern class', () => {
    describe('Constructor', () => {
        it('should create an Intern object', () => {
            // arange
            const intern = new Intern ('St. Nick', 5678, 'saintnick@abcd.com', 'North Pole University');

            // act & assert
            expect(intern.name).toEqual(expect.any(String));
            expect(intern.id).toEqual(expect.any(Number));
            expect(intern.email).toEqual(expect.any(String));
            expect(intern.school).toEqual(expect.any(String));
        });
            // gets role from getRole()
            it('should get role of employee', () => {
            // arrange
            const intern = new Intern ('St. Nick', 5678, 'saintnick@abcd.com', 'North Pole University');

                // act & assert
                expect(intern.getRole()).toEqual("Intern");
})
})
})