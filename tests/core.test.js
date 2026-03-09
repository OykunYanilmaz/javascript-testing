import { it, expect, describe} from "vitest";

describe('test suite', () => {
    it('test case', () => {
        // const result = "The requested file was not found."

        // // Loose (too general)
        // expect(result).toBeDefined()

        // // Tight (too specific)
        // expect(result).toBe("The requested file was not found.")

        // // Better assertion
        // // expect(result).toMatch('not found')
        // expect(result).toMatch(/not found/i) // Regular Expression - RegExp

        const result = [3, 2, 1, 3];
        expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
        expect(result.length).toBeGreaterThan(0);

        const result2 = { name: 'oykun', id: 1 };
        expect(result2).toMatchObject({name: 'oykun'});
        expect(result2).toHaveProperty('name');
        expect(typeof result2.name).toBe('string');
    });
});