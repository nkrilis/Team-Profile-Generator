// --- Engineer testing file ---

const Engineer = require('../lib/engineer');

// Create testing suite
describe("Engineer", () => 
{
    // Check object creation
    describe("Intialization", () =>
    {
        it("Should create an Engineer of type Employee with Github username", () =>
        {
            const engineer = new Engineer("Nick", 1, "nick@email.com", "nick_2022");

            expect(engineer.name).toEqual("Nick");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("nick@email.com")
            expect(engineer.github).toEqual("nick_2022");
        });
    });

    // Check object function getGithub()
    describe("Get Github", () =>
    {
        it("Should return the github property of the object created", () =>
        {
            const engineer = new Engineer("Nick", 1, "nick@email.com", "nick_2022");

            expect(engineer.getGithub()).toEqual("nick_2022");
        });
    });

    // Check object function getName() inherited from Employee class
    describe("Get Name", () =>
    {
        it("Should return the name property of the object created", () =>
        {
            const engineer = new Engineer("Nick", 1, "nick@email.com", "nick_2022");

            expect(engineer.getName()).toEqual("Nick");
        });
    });

    // Check object function getId() inherited from Employee class
    describe("Get id", () =>
    {
        it("Should return the id property of the object created", () =>
        {
            const engineer = new Engineer("Nick", 1, "nick@email.com", "nick_2022");

            expect(engineer.getId()).toEqual(1);
        });
    });

    // Check object function getEmail() inherited from Employee class
    describe("Get email", () =>
    {
        it("Should return the email property of the object created", () =>
        {
            const engineer = new Engineer("Nick", 1, "nick@email.com", "nick_2022");

            expect(engineer.getEmail()).toEqual("nick@email.com");
        });
    });

    // Check object function getRole()
    describe("Get Role", () =>
    {
        it("Should return the type of object created", () =>
        {
            const engineer = new Engineer("Nick", 1, "nick@email.com", "nick_2022");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });


});

