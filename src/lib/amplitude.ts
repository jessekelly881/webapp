import * as Amp from '@amplitude/analytics-browser';

/**
 * Tracks function call. Sends fn call params to Amplitude
 * UNSAFE - This fn has side effects and is unsafe. Use with care.
 *
 * @example
 * const add = (a: number, b: number) => a + b;
 * const wAdd = unsafelyWrapFn(add)("Added", (input, output) => ({ input, output }))
 * wAdd(3, 4) // Sends { input: [3, 4], output: 7 } as event t
 *
 * @author Jesse Kelly <mail@jessekelly.me>
 */
export const unsafelyWrapFn = <I extends unknown[], O>(fn: (...i: I) => O) =>
    (tag: string, map: (i: I, o: O) => Record<string, any>) => (...i: I) => {
        const ret = fn(...i);
        Amp.track(tag, map(i, ret));
        return ret;
    }

export default {}
