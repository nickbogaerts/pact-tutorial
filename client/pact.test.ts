import { pactWith } from 'jest-pact';

import IsOddProvider from './src/IsOddProvider';

pactWith(
  {
    consumer: 'is-odd-client',
    provider: 'is-odd-service',
    dir: 'pacts',
    logDir: 'logs'
  },
  provider => {
    let isOddProvider: any;

    beforeEach(() => {
      isOddProvider = IsOddProvider(provider.mockService.baseUrl);
    });

    const validResponseMatcher = {
      status: 200,
      input: expect.any(String),
      odd: expect.any(Boolean)
    };

    describe('Pact for is-odd SaaS', () => {
      test('Checking a valid integer', async () => {
        await provider.addInteraction({
          state: 'None',
          uponReceiving: 'A valid integer',
          withRequest: {
            method: 'GET',
            path: '/is-odd/1'
          },
          willRespondWith: {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            },
            body: validResponseMatcher
          }
        });

        await expect(async () => isOddProvider('1')).resolves.toBeInstanceOf(Boolean);
      });
    });
  }
);
