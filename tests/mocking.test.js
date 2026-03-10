import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'

describe('test suite', () => {
    it('test case', () => {
        const greet = vi.fn();

        // greet.mockReturnValue('Hello');
        // const result = greet();
        // console.log(result);

        // greet.mockResolvedValue('Hello');
        // greet().then(result => console.log(result));
        
        greet.mockImplementation(name => 'Hello ' + name);
        const result = greet('Oykun');

        // expect(greet).toHaveBeenCalled();
        // expect(greet).toHaveBeenCalledWith('Oykun');
        expect(greet).toHaveBeenCalledOnce();
    });

    it('test case 2', () => {
        const sendText = vi.fn();
        sendText.mockReturnValue('ok');

        const result = sendText('message');

        expect(sendText).toHaveBeenCalledWith('message');
        expect(result).toBe('ok');
    })
})