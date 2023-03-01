import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

const server = setupServer(
  rest.get('/api/greeting', (req, res, ctx) => {
    return res(ctx.json({message: 'Hello World'}));
  }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('loads and displays greeting', async () => {
  render(<App/>);
  await waitFor(() => screen.getByText('Backend says: Hello World'));
});
