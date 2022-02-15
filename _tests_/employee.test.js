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

    describe("Get Name", () =>
    {
        it("Should return the name property of the object created", () =>
        {
            const emp = new Employee("Nick", 1, "nick@email.com");

            expect(emp.getName()).toEqual("Nick");
        });
    });

    describe("Get id", () =>
    {
        it("Should return the id property of the object created", () =>
        {
            const emp = new Employee("Nick", 1, "nick@email.com");

            expect(emp.getId()).toEqual(1);
        });
    });

    describe("Get email", () =>
    {
        it("Should return the email property of the object created", () =>
        {
            const emp = new Employee("Nick", 1, "nick@email.com");

            expect(emp.getEmail()).toEqual("nick@email.com");
        });
    });

    describe("Get Role", () =>
    {
        it("Should return the type of the object created", () =>
        {
            const emp = new Employee("Nick", 1, "nick@email.com");

            expect(emp.getRole()).toEqual("Employee");
        });
    });

});

