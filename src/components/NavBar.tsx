import { NavLink } from 'react-router-dom'

import '../styles/components/navbar.css'

export function NavBar() {
	return (
		<nav>
			<div className='navMenu'>
				<NavLink to='/' className='navLink'>
					Ativos
				</NavLink>
				<NavLink to='/units' className='navLink'>
					Unidades
				</NavLink>
			</div>
		</nav>
	)
}
