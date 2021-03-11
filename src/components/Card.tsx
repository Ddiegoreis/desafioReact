import React, { useState, useEffect } from 'react'

import '../styles/components/card.css'

interface CardProps {
	key: number
	sensors: []
	model: string
	status: string
	healthScore: string
	name: string
	image: string
	specifications: {
		maxTemp: number
		power: number
		rpm: number
	}
	metrics: {
		totalCollectsUptime: number
		totalUptime: number
		lastUptimeAt: string
	}
}

export function Card(props: CardProps) {
	const [currentStatus, setCurrentStatus] = useState('')

	useEffect(() => {
		let text

		switch (props.status) {
			case 'inAlert':
				text = 'Em Alerta'
				break

			case 'inOperation':
				text = 'Em Operação'
				break

			case 'inDowntime':
				text = 'Em Parada'
				break
		}

		// console.log(props.metrics)

		setCurrentStatus(`${text}`)
	}, [])

	return (
		<div className='card'>
			<div
				className='cardImage'
				style={{
					backgroundImage: `url("${props.image}")`,
				}}></div>
			<div className='cardText'>
				<span className='model'>{props.model}</span>
				<h2>{props.name}</h2>
				<p>Status: {currentStatus}</p>
				<p>% Saúde: {props.healthScore}%</p>
				<p>
					Sensores:{' '}
					{props.sensors.map(
						(sensor) => `${sensor}`
					)}
				</p>
				<p>
					Total de Coletas:{' '}
					{props.metrics.totalCollectsUptime}
				</p>
				<p>
					Horas de Coletas:{' '}
					{props.metrics.totalUptime.toFixed(0)}
				</p>
				<p>
					Ultima Coleta:{' '}
					{props.metrics.lastUptimeAt.substring(
						0,
						10
					)}
				</p>
			</div>
			<div className='cardStats'>
				<div className='stat'>
					<div className='value'>
						{!props.specifications.maxTemp
							? 0
							: props.specifications
									.maxTemp}
					</div>
					<div className='type'>
						Temperatura Máxima
					</div>
				</div>
				<div className='stat border'>
					<div className='value'>
						{!props.specifications.power
							? 0
							: props.specifications
									.power}
					</div>
					<div className='type'>Potência kWh</div>
				</div>
				<div className='stat'>
					<div className='value'>
						{!props.specifications.rpm
							? 0
							: props.specifications
									.rpm}
					</div>
					<div className='type'>RPM</div>
				</div>
			</div>
		</div>
	)
}
