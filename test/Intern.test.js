const { test, expect } = require("@jest/globals")
const Intern = require("../lib/Intern")

test('creates intern object', () => {
    const intern = new Intern('Sulaimon', '27', 'sfedai211@gmail.com', 'Rutgers');

    expect(intern.name).toBe('Sulaimon');
    expect(intern.id).toBe('27');
    expect(intern.email).toBe('sfedai211@gmail.com');
    expect(intern.school).toBe('Rutgers');
});

test('gets the interns school', () => {
    const intern = new Intern('Sulaimon Fedai', 'Sulaimon', '27', 'Rutgers');

    expect(intern.getSchool()).toBe('School: Rutgers');
});

test('gets the interns role', () => {
    const intern = new Intern('Sulaimon Fedai', 'Sulaimon', '27', 'Rutgers');

    expect(intern.getRole()).toBe('Role: Intern');
});