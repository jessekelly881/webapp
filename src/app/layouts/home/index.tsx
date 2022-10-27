import { Route } from 'app/router';
import React from 'react';

import Github from '~icons/simple-icons/github';



interface LayoutP {
	setRoute: (r: Route) => void;
}

const Home = ({ setRoute }: LayoutP) => (
	<>
		<span>Home</span>
		<Github />
		<button onClick={() => setRoute({ type: "Test" })} type="button">
			Test
		</button>
	</>
)

export default Home;
