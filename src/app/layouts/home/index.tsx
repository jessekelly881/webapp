import { Route } from 'app/router';
import React from 'react';


interface LayoutP {
    setRoute: (r: Route) => void;
}

const Home = ({ setRoute }: LayoutP) => (
    <>
        <span>Home</span>
        <button onClick={() => setRoute({ type: "Test" })} type="button">
            Test
        </button>
    </>
)

export default Home;
