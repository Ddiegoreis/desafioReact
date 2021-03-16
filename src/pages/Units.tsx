import { useState, useEffect } from 'react'

import { NavBar } from '../components/NavBar'
import { HeaderTitle } from '../components/HeaderTitle'

import '../styles/pages/units.css'

export function Units() {
	const [users, setUsers] = useState([])
	const [units, setUnits] = useState([])
	const [companies, setCompanies] = useState([])

	async function searchUsers() {
		const response = await fetch(
			`https://my-json-server.typicode.com/tractian/fake-api/users`
		)

		const data = await response.json()

		setUsers(data)
	}

	async function searchUnits() {
		const response = await fetch(
			`https://my-json-server.typicode.com/tractian/fake-api/units`
		)

		const data = await response.json()

		setUnits(data)
	}

	async function searchCompanies() {
		const response = await fetch(
			`https://my-json-server.typicode.com/tractian/fake-api/companies`
		)

		const data = await response.json()

		setCompanies(data)
	}

	useEffect(() => {
		searchUsers()
		searchUnits()
		searchCompanies()

		console.log()
	}, [])

	return (
		<div>
			<NavBar />

			{units.length > 0 ? (
				<>
					<HeaderTitle title='Unidades' />

					<table>
						<tr>
							<th>Unidade</th>
							<th>ID Empresa</th>
						</tr>
						{units.map((unit) => {
							const {
								id,
								name,
								companyId,
							} = unit
							return (
								<tr key={id}>
									<td>
										{
											name
										}
									</td>
									<td>
										{
											companyId
										}
									</td>
								</tr>
							)
						})}
					</table>
				</>
			) : (
				<></>
			)}

			{units.length > 0 ? (
				<>
					<HeaderTitle title='Usuários' />

					<table>
						<tr>
							<th>E-mail</th>
							<th>Nome</th>
							<th>ID Unidade</th>
							<th>ID Empresa</th>
						</tr>
						{users.map((user) => {
							const {
								id,
								email,
								name,
								unitId,
								companyId,
							} = user

							return (
								<tr key={id}>
									<td>
										{
											email
										}
									</td>
									<td>
										{
											name
										}
									</td>
									<td>
										{
											unitId
										}
									</td>
									<td>
										{
											companyId
										}
									</td>
								</tr>
							)
						})}
					</table>
				</>
			) : (
				<></>
			)}

			{companies.length > 0 ? (
				<>
					<HeaderTitle title='Empresas' />

					<table>
						<tr>
							<th>Empresa</th>
							<th>ID Empresa</th>
						</tr>
						{companies.map((company) => {
							const {
								id,
								name,
							} = company
							return (
								<tr key={id}>
									<td>
										{
											name
										}
									</td>
									<td>
										{
											id
										}
									</td>
								</tr>
							)
						})}
					</table>
				</>
			) : (
				<></>
			)}
		</div>
	)
}
