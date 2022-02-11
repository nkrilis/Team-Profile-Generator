// --- Employee testing file ---

const Employee = require('../lib/employee');

describe("Employee", () => 
{
    describe("Initialization", () => 
    {
        it("Should create an object with name, id, and email", () =>
        {
            const emp = new Employee("Nick", 2, "nick@email.com");

            expect(emp.name).toEqual("Nick");
            expect(emp.id).toEqual(2);
            expect(emp.email).toEqual("nick@email.com")
        });
    });


});

