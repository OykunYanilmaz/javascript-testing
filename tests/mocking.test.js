import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import { getPriceInCurrency, getShippingInfo } from '../src/mocking';
import { getExchangeRate } from '../src/libs/currency';
import { getShippingQuote } from '../src/libs/shipping';

vi.mock('../src/libs/currency');
vi.mock('../src/libs/shipping');

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
    });
})

describe('getPriceInCurrency', () => {
    it('should return price in target currency', () => {
        vi.mocked(getExchangeRate).mockReturnValue(1.5);

        const price = getPriceInCurrency(10, 'AUD');

        expect(price).toBe(15);
    })
})

describe('getShippingInfo', () => {
    it('should return shipping unavailable if quote cannot be fetched', () => {
        vi.mocked(getShippingQuote).mockReturnValue(null);
        
        const result = getShippingInfo('London');

        expect(result).toMatch(/unavailable/i);
    });

    it('should return shipping info if quote can be fetched', () => {
       vi.mocked(getShippingQuote).mockReturnValue({
        cost: 10,
        estimatedDays: 2,
       });

       const result = getShippingInfo('London');

    //    expect(result).toMatch('$10');
    //    expect(result).toMatch(/2 days/i);
       expect(result).toMatch(/shipping cost: \$10 \(2 days\)/i);
    });
})