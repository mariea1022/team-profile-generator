const Engineer = require("../lib/Engineer")

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an Engineer object', () => {
            // arange
            const Engineer = new Engineer ('Holly', 1234, 'holly@abcd.com', 'hollyDev');

            // act & assert?
            expect(engineer.name).toEqual(expect.any(String));
            expect(engineer.id).toEqual(expect.any(String));
            expect(engineer.email).toEqual(expect.any(String));
});

});
            // gets emails from getEmail()
            it('should get Engineer GitHub', () => {
                // arrange
                const Engineer = new Engineer ('Holly', 1234, 'holly@abcd.com', 'hollyDev');

                expect(engineer.github).toEqual(expect.any(String));
});
            // gets role from getRole()
            it('should get role of employee', () => {
            // arrange
                const Engineer = new Engineer ('Holly', 1234, 'holly@abcd.com', 'hollyDev');

                expect(engineer.getRole()).toEqual("Engineer");
})
})
})