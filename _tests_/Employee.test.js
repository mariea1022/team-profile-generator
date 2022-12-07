const Employee = require("../lib/Employee")

// creates employee object 
describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an employee object', () => {
            // arange
            const employee = new Employee('Jared', 1000, 'jared@gmail.com')

            // act & assert?
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
});

// // gets name from this.name() 
//         test('should get employee name', () => {
//             // arange
//             const employee = new Employee('Jared, 1000, jared@gmail.com')

//             // act & assert?
//             expect(employee.getName()).toEqual(expect.any(String));
// });

// gets id from getId() 
            it('should get employee ID', () => {
                // arrange
                const employee = new Employee('Jared', 1000, 'jared@gmail.com')
                
                // act & assert?
                expect(employee.getId()).toEqual(expect.any(Number));
});

            // gets emails from getEmail()
            it('should get employee email', () => {
                // arrange
                const employee = new Employee('Jared', 1000, 'jared@gmail.com')

                expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

            // gets role from getRole()
            it('should get role of employee', () => {
            // arrange
                const employee = new Employee('Jared', 1000, 'jared@gmail.com')

                expect(employee.getRole()).toEqual("Employee");
})
})
})