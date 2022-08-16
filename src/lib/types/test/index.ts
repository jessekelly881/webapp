import * as D from "io-ts/Decoder";
import * as Eq from "io-ts/Eq";
import * as S from "io-ts/Schema";

const Test = S.make(s =>
  s.struct({
    name: s.string,
    age: s.number,
  })
);

const decoder = S.interpreter(D.Schemable)(Test);
const eq = S.interpreter(Eq.Schemable)(Test);

export default Test;
export { decoder, eq };
