import { render } from '@testing-library/react'
import React from 'react';
import { test } from 'vitest'

import App from '.';


// Edit an assertion and save to see HMR in action

test('App', () => {
    render(<App setRoute={() => null} route={{ type: "Home" }} />)
})
