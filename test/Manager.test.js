const { test, expect } = require("@jest/globals")
const Manager = require("../lib/Manager")

test('creates manager object', () => {
    manager = new Manager('Sulaimon', '27', 'sfedai211@gmail.com', '5100');

    expect(manager.name).toBe('Sulaimon');
    expect(manager.id).toBe('27');
    expect(manager.email).toBe('sfedai211@gmail.com');
    expect(manager.officeNumber).toBe('5100');
});

test('gets managers office number', () => {
    manager = new Manager('Sulaimon', '27', 'sfedai211@gmail.com', '5100');

    expect(manager.getOfficeNumber()).toBe('Office Number: 5100');
});

test('gets managers role', () => {
    manager = new Manager('Sulaimon', '27', 'sfedai211@gmail.com', '5100');

    expect(manager.getRole()).toBe("Role: Manager")
})