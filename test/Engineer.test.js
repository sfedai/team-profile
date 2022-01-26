const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('Creates enginineer object', () => {
    const engineer = new Engineer('Sulaimon', '27', 'sfedai211@gmail.com', 'Sulaimon Fedai');

    expect(engineer.name).toBe('Sulaimon');
    expect(engineer.id).toBe('27');
    expect(engineer.email).toBe('sfedai211@gmail.com');
    expect(engineer.github).toBe('sfedai');
});

test('gets engineers github', () => {
    const engineer = new Engineer('Sulaimon', '27', 'sfedai211@gmail.com', 'Sulaimon Fedai');

    expect(engineer.getGithub()).toBe('https://github.com/sfedai/')
})

test('gets role of engineer', () => {
    const engineer = new Engineer('Sulaimon', '27', 'sfedai211@gmail.com', 'Sulaimon Fedai');

    expect(engineer.getRole()).toBe('Role: Engineer');
});