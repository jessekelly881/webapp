import * as A from 'fp-ts/Array';
import * as NEA from 'fp-ts/NonEmptyArray';
import * as S from 'io-ts/Schema';
import * as s from 'fp-ts/string';
import * as Semi from 'fp-ts/Semigroup';
import { pipe } from 'fp-ts/function';

/*
 * State from multiple origins should be merged using the state semigroup.
 * State may come from localStorage, config files, etc.
 */


interface State {
    name?: string;
}

export const State: S.Schema<State> = S.make((S) =>
  S.partial({
    name: S.string,
  })
)

export const semigroup = Semi.struct<State>({
  name: Semi.last()
})

export const defaultState: State = {
  name: ""
}

export const mergeState = (arr: State[]) => pipe(
  A.prepend(defaultState)(arr),
  NEA.concatAll(semigroup)
)

export default State;
