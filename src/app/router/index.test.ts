import { createMemoryHistory } from 'history'

import { format, parse, Route, pushRoute, fullPath } from '.'

const routeMap: [Route, string][] = [
    [Route.as.Home({}), '/'],
    [Route.as.Test({}), '/test'],
]

describe('Router', () => {
    test.each(routeMap)('Route: %s', (data, path) => {
        const history = createMemoryHistory()

        pushRoute(history)(data)
        expect(fullPath(history.location)).toEqual(path)
    })

    test.each(routeMap)('%s', (data, path) => {
        expect(format(data)).toEqual(path)
        expect(parse(path)).toEqual(data)
    })
})
