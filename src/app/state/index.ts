import * as A from 'fp-ts/Array';
import { pipe } from 'fp-ts/function';
import * as NEA from 'fp-ts/NonEmptyArray';
import * as Semi from 'fp-ts/Semigroup';
import * as D from 'io-ts/Decoder';
import * as Eq from 'io-ts/Eq';
import * as S from 'io-ts/Schema';


export { getLocalState } from './localstorage';


/*
 * State from multiple origins should be merged using the state semigroup.
 * State may come from localStorage, config files, etc.
 */

interface State {
    name?: string;
}

export const State: S.Schema<State> = S.make(s =>
  s.partial({
    name: s.string,
  })
)

export const decoder = S.interpreter(D.Schemable)(State);
export const eq = S.interpreter(Eq.Schemable)(State);


export const semigroup = Semi.struct<State>({
  name: Semi.last()
})

/*
 * default application state
 */
export const defaultState: State = {
  name: ""
}


export const mergeState = (arr: State[]) => pipe(
  A.prepend(defaultState)(arr),
  NEA.concatAll(semigroup)
)

export default State;
