import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
	const [ github_username, setGithubUsername ] = useState('');
	const [ techs, setTechs ] = useState('');
	const [ latitude, setLatitude ] = useState('');
	const [ longitude, setLongitude ] = useState('');

	useEffect( () => {
		return navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude }  = position.coords;

				setLatitude(latitude);
				setLongitude(longitude);
			},
			(err) => {
				console.log(err);
			},
			{
				timeout: 30000,
			}
			);
	}, []);

	async function handleAddDev(e) {
		e.preventDefault();

		const response = await api.post('/devs');

		console.log(response.data);
	}

	return (
		<div id="app">
			<aside>
				<strong>Cadastrar</strong>
				<form onSubmit={handleAddDev}>
					<div className="input-block">
						<label htmlFor="github_username">Usuário do Github</label>
						<input
							name="github_username"
							id="github_username"
							value={github_username}
							onChange={ e => setGithubUsername(e.target.value) }
							required
						/>
					</div>

					<div className="input-block">
						<label htmlFor="techs">Tecnologias</label>
						<input
							name="techs"
							id="techs"
							value={techs}
							onChange={ e => setTechs(e.target.value) }
							required
						/>
					</div>

					<div className="input-group">
						<div className="input-block">
							<label htmlFor="latitude">Latitude</label>
							<input
								type="number"
								name="latitude"
								id="latitude"
								value={latitude}
								onChange={ e => setLatitude(e.target.value) }
								required
							/>
						</div>
						<div className="input-block">
							<label htmlFor="longitude">Longitude</label>
							<input
								type="number"
								name="longitude"
								id="longitude"
								value={longitude}
								onChange={ e => setLongitude(e.target.value) }
								required
							/>
						</div>
					</div>

					<button type="submit">Salvar</button>
				</form>

			</aside>
			<main>
				<ul>
					<li className="dev-item">
						<header>
							<img src="https://avatars2.githubusercontent.com/u/26582350?s=460&v=4" alt=""/>
							<div className="user-info">
								<strong>Lucas Pelhon</strong>
								<span>Node.js, ReactJS</span>
							</div>
						</header>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper arcu quis tristique efficitur. Vestibulum finibus velit et purus pulvinar, eget feugiat ex elementum. Duis in tincidunt magna. Aenean tincidunt a sem eget ullamcorper.</p>
						<a href="https://github.com/pelhon">Acessar perfil no GitHub</a>
					</li>
					<li className="dev-item">
						<header>
							<img src="https://avatars2.githubusercontent.com/u/26582350?s=460&v=4" alt=""/>
							<div className="user-info">
								<strong>Lucas Pelhon</strong>
								<span>Node.js, ReactJS</span>
							</div>
						</header>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper arcu quis tristique efficitur. Vestibulum finibus velit et purus pulvinar, eget feugiat ex elementum. Duis in tincidunt magna. Aenean tincidunt a sem eget ullamcorper.</p>
						<a href="https://github.com/pelhon">Acessar perfil no GitHub</a>
					</li>
					<li className="dev-item">
						<header>
							<img src="https://avatars2.githubusercontent.com/u/26582350?s=460&v=4" alt=""/>
							<div className="user-info">
								<strong>Lucas Pelhon</strong>
								<span>Node.js, ReactJS</span>
							</div>
						</header>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper arcu quis tristique efficitur. Vestibulum finibus velit et purus pulvinar, eget feugiat ex elementum. Duis in tincidunt magna. Aenean tincidunt a sem eget ullamcorper.</p>
						<a href="https://github.com/pelhon">Acessar perfil no GitHub</a>
					</li>
					<li className="dev-item">
						<header>
							<img src="https://avatars2.githubusercontent.com/u/26582350?s=460&v=4" alt=""/>
							<div className="user-info">
								<strong>Lucas Pelhon</strong>
								<span>Node.js, ReactJS</span>
							</div>
						</header>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper arcu quis tristique efficitur. Vestibulum finibus velit et purus pulvinar, eget feugiat ex elementum. Duis in tincidunt magna. Aenean tincidunt a sem eget ullamcorper.</p>
						<a href="https://github.com/pelhon">Acessar perfil no GitHub</a>
					</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
