import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import AvtarImage from '../images/Arsh3.jpeg';
import '../css/navbar.css';

export default function Navbar() {
	const [activeNav, setActive] = useState('');
	const [scrolled, setScrolled] = useState(false);
	const handleScroll = () => {
		const position = window.pageYOffset;
		console.log(position);
		setScrolled(true);
		if (position < 40) {
			setScrolled(false);
			setActive('home');
		}
		if (position > 557) {
			setActive('aboutMe');
		}
		if (position > 1357) {
			setActive('projects');
		}
		if (position > 2141) {
			setActive('contactMe');
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div className={`${scrolled ? 'scrolling nav-navbar ' : 'nav-navbar '}`}>
			<div className='nav-button-group '>
				<a
					href='#home'
					className={`${scrolled ? 'scrolling-btn nav-btn ' : 'nav-btn '}${
						activeNav === 'home' && 'active-nav'
					}`}
					onClick={() => setActive('home')}
				>
					Home
				</a>
				<a
					href='#aboutMe'
					className={`${scrolled ? 'scrolling-btn nav-btn ' : 'nav-btn '}${
						activeNav === 'aboutMe' && 'active-nav'
					}`}
					onClick={() => setActive('aboutMe')}
				>
					About Me
				</a>
				<a
					href='#projects'
					className={`${scrolled ? 'scrolling-btn nav-btn ' : 'nav-btn '}${
						activeNav === 'projects' && 'active-nav'
					}`}
				>
					Projects
				</a>
				<a
					href='#contactMe'
					className={`${scrolled ? 'scrolling-btn nav-btn ' : 'nav-btn '}${
						activeNav === 'contactMe' && 'active-nav'
					}`}
				>
					Contact Me
				</a>
			</div>
			<div className='avatar-div'>
				<Avatar name='arsh' size='50' round={true} src={AvtarImage} />
				<h2 className='logo'>Arsh</h2>
			</div>
		</div>
	);
}
