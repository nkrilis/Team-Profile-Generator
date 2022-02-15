// --- Manager testing file ---

const Manager = require('../lib/manager');

// Create testing suite
describe("Manager", () => 
{
    // Check object creation
    describe("Intialization", () =>
    {
        it("Should create an Manager of type Employee with Office number", () =>
        {
            const manager = new Manager("Nick", 1, "nick@email.com", 2022);

            expect(manager.name).toEqual("Nick");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("nick@email.com")
            expect(manager.officeNumber).toEqual(2022);
        });
    });

    // Check object function getRole()
    describe("Get Role", () =>
    {
        it("Should return the type of object created (i.e. Manager)", () =>
        {
            const manager = new Manager("Nick", 1, "nick@email.com", 2022);

            expect(manager.getRole()).toEqual('Manager');
        });
    });

    // Check object function getName() inherited from Employee class
    describe("Get Name", () =>
    {
        it("Should return the name property of the object created", () =>
        {
            const manager = new Manager("Nick", 1, "nick@email.com", 2022);

            expect(manager.getName()).toEqual("Nick");
        });
    });

    // Check object function getId() inherited from Employee class
    describe("Get id", () =>
    {
        it("Should return the id property of the object created", () =>
        {
            const manager = new Manager("Nick", 1, "nick@email.com", 2022);

            expect(manager.getId()).toEqual(1);
        });
    });

    // Check object function getEmail() inherited from Employee class
    describe("Get email", () =>
    {
        it("Should return the email property of the object created", () =>
        {
            const manager = new Manager("Nick", 1, "nick@email.com", 2022);

            expect(manager.getEmail()).toEqual("nick@email.com");
        });
    });

});

