import { BrowserRouter, Route } from 'react-router-dom'

import { Actives } from './Actives'
import { Units } from './Units'

export function Routes() {
	return (
		<BrowserRouter>
			<Route exact path='/' component={Actives} />
			<Route exact path='/units' component={Units} />
		</BrowserRouter>
	)
}
