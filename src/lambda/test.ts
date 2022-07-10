import { Handler } from "@netlify/functions";
import lib from 'lib';

const handler: Handler = async () => ({
    statusCode: 200,
    body: JSON.stringify({ message: lib() }),
});

export { handler };
export default {}
