// --- Engineer testing file ---

const Engineer = require('../lib/engineer')

describe("Engineer", () => 
{
    describe("Intialization", () =>
    {
        it("Should create an Engineer of type Employee with Github username", () =>
        {
            const engineer = new Engineer("username");

            expect(engineer.github).toEqual("username");
        });
    });


});

