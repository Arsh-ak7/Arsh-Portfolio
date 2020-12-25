import React, { useEffect, useState } from 'react';
import '../css/home.css';

export default function Home() {
	const [scrolled, setScrolled] = useState(false);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrolled(true);
		if (position === 0) {
			setScrolled(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div className='home' id='home'>
			<h1 className={`${scrolled ? 'scrolled header ml11' : 'header ml11'}`}>
				<span className='text-wrapper'>
					<span className='line line1'></span>
					<span className='letters'>WEB DEVELOPER</span>
				</span>
			</h1>
			<div
				className={`${
					scrolled ? 'scrolled scroll-wording' : 'scroll-wording'
				} `}
			>
				<span className='scroll-word'>Scroll &gt;</span>
			</div>
		</div>
	);
}
