import { useEffect } from 'react';

import sun from './sun.svg';
import moon from './moon.svg';
import './style.css';
import { useState } from 'react';

const BtnDarkMod = () => {
	const [darkMode, setDarkMode] = useState('dark')

	useEffect(() => {
		if (darkMode === 'dark') {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

	useEffect(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (event) => {
				const newColorScheme = event.matches ? "dark" : "light";
				setDarkMode(newColorScheme);
			});
	}, [setDarkMode]);

	const toggleDarkMode = () => {
		setDarkMode((currentValue) => {
			return currentValue === 'light' ? 'dark' : 'light';
		});
	};

	const btnNormal = 'dark-mode-btn';
	const btnActive= 'dark-mode-btn dark-mode-btn--active';

	return (
		<button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
			<img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</button>
	);
};

export default BtnDarkMod;
