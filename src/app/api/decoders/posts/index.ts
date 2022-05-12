import * as D from 'io-ts/Decoder';


const postsDecoder = D.array(
  D.struct({
    id: D.number,
    title: D.string,
    body: D.string,
  }))

export default postsDecoder;
