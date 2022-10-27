import * as E from 'fp-ts/Either'
import { flow,pipe } from 'fp-ts/function'
import * as IOE from 'fp-ts/IOEither'
import * as O from 'fp-ts/Option'
import { getItem } from 'fp-ts-local-storage'
import * as J from 'fp-ts-std/JSON';

import * as S from '.';

const key = "state";

/*
 * Get local (partial) copy of state stored in local-storage
 * TODO: Needs refactoring
 */
export const getLocalState = pipe(
    IOE.tryCatch(getItem(key), E.toError),
    IOE.map(flow(
        O.getOrElse(() => ""),
        J.parse(E.toError),
        IOE.fromEither,
    )),
    IOE.flatten,
    IOE.map(flow(
        S.decoder.decode,
        IOE.fromEither,
    )),
    IOE.flattenW,
)

export default {};
