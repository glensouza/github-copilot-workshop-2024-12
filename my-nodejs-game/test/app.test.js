const assert = require('assert');
const { getRandomChoice } = require('../src/app');
const { getWinner } = require('../src/app');


describe('getRandomChoice', function() {
    it('should return a valid choice', function() {
        const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        const choice = getRandomChoice();
        assert.ok(choices.includes(choice), `Invalid choice: ${choice}`);
    });

    it('should return a string', function() {
        const choice = getRandomChoice();
        assert.strictEqual(typeof choice, 'string');
    });

    it('should return one of the choices multiple times', function() {
        const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        const results = new Set();
        for (let i = 0; i < 100; i++) {
            results.add(getRandomChoice());
        }
        assert.ok(results.size > 1, 'getRandomChoice should return different choices over multiple calls');
    });

    describe('getRandomChoice', function() {
        it('should return a valid choice', function() {
            const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
            const choice = getRandomChoice();
            assert.ok(choices.includes(choice), `Invalid choice: ${choice}`);
        });

        it('should return a string', function() {
            const choice = getRandomChoice();
            assert.strictEqual(typeof choice, 'string');
        });

        it('should return one of the choices multiple times', function() {
            const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
            const results = new Set();
            for (let i = 0; i < 100; i++) {
                results.add(getRandomChoice());
            }
            assert.ok(results.size > 1, 'getRandomChoice should return different choices over multiple calls');
        });
    });

    describe('getWinner', function() {
        it('should return "tie" when both choices are the same', function() {
            assert.strictEqual(getWinner('rock', 'rock'), 'tie');
            assert.strictEqual(getWinner('paper', 'paper'), 'tie');
            assert.strictEqual(getWinner('scissors', 'scissors'), 'tie');
            assert.strictEqual(getWinner('lizard', 'lizard'), 'tie');
            assert.strictEqual(getWinner('spock', 'spock'), 'tie');
        });

        it('should return "player" when player wins', function() {
            assert.strictEqual(getWinner('rock', 'scissors'), 'player');
            assert.strictEqual(getWinner('rock', 'lizard'), 'player');
            assert.strictEqual(getWinner('paper', 'rock'), 'player');
            assert.strictEqual(getWinner('paper', 'spock'), 'player');
            assert.strictEqual(getWinner('scissors', 'paper'), 'player');
            assert.strictEqual(getWinner('scissors', 'lizard'), 'player');
            assert.strictEqual(getWinner('lizard', 'spock'), 'player');
            assert.strictEqual(getWinner('lizard', 'paper'), 'player');
            assert.strictEqual(getWinner('spock', 'scissors'), 'player');
            assert.strictEqual(getWinner('spock', 'rock'), 'player');
        });

        it('should return "computer" when computer wins', function() {
            assert.strictEqual(getWinner('rock', 'paper'), 'computer');
            assert.strictEqual(getWinner('rock', 'spock'), 'computer');
            assert.strictEqual(getWinner('paper', 'scissors'), 'computer');
            assert.strictEqual(getWinner('paper', 'lizard'), 'computer');
            assert.strictEqual(getWinner('scissors', 'rock'), 'computer');
            assert.strictEqual(getWinner('scissors', 'spock'), 'computer');
            assert.strictEqual(getWinner('lizard', 'rock'), 'computer');
            assert.strictEqual(getWinner('lizard', 'scissors'), 'computer');
            assert.strictEqual(getWinner('spock', 'paper'), 'computer');
            assert.strictEqual(getWinner('spock', 'lizard'), 'computer');
        });
    });
});
