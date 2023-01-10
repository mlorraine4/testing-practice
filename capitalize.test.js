const capitalize = require('./capitalize');

test('capitalizes sentence', () => {
    expect(capitalize('my cat benjen is the sweetest cat.')).toBe('My Cat Benjen Is The Sweetest Cat.');
});