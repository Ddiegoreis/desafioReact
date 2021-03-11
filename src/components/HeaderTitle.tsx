import React from 'react'

import '../styles/components/header.css'

interface HeaderProps {
	title: string
}

export function HeaderTitle(props: HeaderProps) {
	return (
		<div className='containerTitle'>
			<span>
				{props.title}
				<span className='borderTitle'></span>
			</span>
		</div>
	)
}
