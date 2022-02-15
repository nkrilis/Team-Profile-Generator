// --- Intern testing file ---

const Intern = require('../lib/intern')

describe("Intern", () => 
{
    describe("Intialization", () =>
    {
        it("Should create an Intern of type Employee with School name", () =>
        {
            const intern = new Intern("Nick", 1, "nick@email.com", "University of Toronto");

            expect(intern.name).toEqual("Nick");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("nick@email.com")
            expect(intern.school).toEqual("University of Toronto");
        });
    });

    describe("Get School Name", () =>
    {
        it("Should return the school property of the object created", () =>
        {
            const intern = new Intern("Nick", 1, "nick@email.com", "University of Toronto");

            expect(intern.getSchool()).toEqual("University of Toronto");
        });
    });

    describe("Get Name", () =>
    {
        it("Should return the name property of the object created", () =>
        {
            const intern = new Intern("Nick", 1, "nick@email.com", "University of Toronto");

            expect(intern.getName()).toEqual("Nick");
        });
    });

    describe("Get id", () =>
    {
        it("Should return the id property of the object created", () =>
        {
            const intern = new Intern("Nick", 1, "nick@email.com", "University of Toronto");

            expect(intern.getId()).toEqual(1);
        });
    });

    describe("Get email", () =>
    {
        it("Should return the email property of the object created", () =>
        {
            const intern = new Intern("Nick", 1, "nick@email.com", "University of Toronto");

            expect(intern.getEmail()).toEqual("nick@email.com");
        });
    });

    describe("Get Role", () =>
    {
        it("Should return the type of object created", () =>
        {
            const intern = new Intern("Nick", 1, "nick@email.com", "University of Toronto");

            expect(intern.getRole()).toEqual("Intern");
        });
    });


});



