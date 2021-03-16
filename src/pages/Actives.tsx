import { useState, useEffect } from 'react'

import { Card } from '../components/CardActives'
import { HeaderTitle } from '../components/HeaderTitle'
import { NavBar } from '../components/NavBar'

export function Actives() {
	const [actives, setActives] = useState([])

	async function searchActives() {
		const response = await fetch(
			`https://my-json-server.typicode.com/tractian/fake-api/assets`
		)

		const data = await response.json()

		setActives(data)
	}

	useEffect(() => {
		searchActives()
	}, [])

	return (
		<div>
			<NavBar />

			<HeaderTitle title='Ativos' />

			<div className='container'>
				{actives.map((active) => {
					const {
						id,
						name,
						image,
						sensors,
						model,
						status,
						healthscore,
						specifications,
						metrics,
					} = active
					return (
						<Card
							key={id}
							sensors={sensors}
							model={model}
							status={status}
							healthScore={
								healthscore
							}
							name={name}
							image={image}
							specifications={
								specifications
							}
							metrics={metrics}
						/>
					)
				})}
			</div>
		</div>
	)
}
