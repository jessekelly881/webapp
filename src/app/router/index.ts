import { ADTType } from '@morphic-ts/adt'
import { pipe } from 'fp-ts/function'
import * as R from 'fp-ts-routing'
import { BrowserHistory, Location } from 'history'
import { routingFromMatches2 } from 'morphic-ts-routing/dist/RoutingFromMatches2'
import { useState } from 'react'

const home = R.end
const test = R.lit('test').then(R.end)

const {
    parse,
    format,
    adt: Route,
} = routingFromMatches2(
    ['Home', home],
    ['Test', test],
)

type Route = ADTType<typeof Route>

const pushRoute =
    ({ push }: BrowserHistory) =>
        (route: Route) => {
            push(format(route))
        }

const fullPath = (location: Location) => location.pathname + location.search

const useCurrentRoute = (history: BrowserHistory) => {
    const [pathname, setPathname] = useState<string>(fullPath(history.location))
    history.listen(({ location }) => setPathname(fullPath(location)))

    return pipe(pathname, parse)
}


const testRoute = () => ({ type: "Test" } as Route);

export { format, fullPath, parse, pushRoute, Route, testRoute,useCurrentRoute }
