import { Handler } from "@netlify/functions";
import lib from 'lib';

const handler: Handler = async () => ({
    statusCode: 200,
    body: JSON.stringify({ message: lib() }),
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
});

export { handler };
export default {}
