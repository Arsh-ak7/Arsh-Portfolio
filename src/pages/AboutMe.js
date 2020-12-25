import React, { useState, useEffect } from 'react';
import '../css/aboutMe.css';
import ArshImg from '../images/Arsh2.jpeg';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function AboutMe() {
	const [scrolled, setScrolled] = useState(false);
	const handleScroll = () => {
		const position = window.pageYOffset;
		if (position > 1156) {
			setScrolled(true);
		} else {
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
		<>
			<div className='aboutMe' id='aboutMe'>
				<div className='desc'>
					<div className='hero-image-container'>
						<img className='hero-image' src={ArshImg} alt='Arsh' />
					</div>
					<h2 className='name-heading'>Arsh Kumar</h2>
					<div className='small-desc'>
						<span className='strong-words'>A Mindless Coder</span>
						<span className='strong-words'>Aspiring Developer</span>
						<span className='strong-words'>And OfCourse a Writer</span>
						<br />
						{/* Far far away, Behind the Word Mountains, there lives the unspoken
					texts. Seperated they live right in the center of the Semantics and
					Linguistic World, Yet Everyone just brushes past them. */}
						<br />
						<span className='skill-font quotes'>
							Far far away, Behind the Word Mountains, there lives the unspoken
							texts. Seperated they live right in the center of the Semantics
							and Linguistic World, Yet Everyone just brushes past them.
						</span>
						<span className='skill-font quote'>Qui Vivra Verra!</span>
						<span className='skill-font rma'>
							Real Madrid{' '}
							<FavoriteIcon fontSize='small' style={{ paddingLeft: '3px' }} />
						</span>
					</div>
				</div>
				<div className='edu'>
					<h1 className='edu-name-heading'>Educational Qualification</h1>
					<h2 className='info-heading'>COLLEGE</h2>
					<a
						className='links'
						href='https://www.iiitg.ac.in'
						target='_blank'
						rel='noreferrer'
					>
						Indian Institute of Information Technology, Guwahati
					</a>
					<span className='info-span'>Graduating in 2023</span>
					<h2 className='info-heading'>SCHOOL</h2>
					<a
						className='links'
						href='https://www.dpspatna.com'
						target='_blank'
						rel='noreferrer'
					>
						Delhi Public School, Patna
					</a>
					<span className='info-span'>Class of '18</span>
					<span className='space' />
					<h2 className='info-heading'>SKILLS</h2>
					<div className='skill-set'>
						<span className='skill-font'>MONGODB</span>
						<span className='skill-font'>REACTJS</span>
						<span className='skill-font'>GRAPHQL</span>
						<span className='skill-font'>NODEJS</span>
						<span className='skill-font'>JAVA</span>
						<span className='skill-font'>C++</span>
						<span className='skill-font'>SQL</span>
						<span className='skill-font'>C</span>
						<span className='skill-font'>HTML</span>
						<span className='skill-font'>CSS</span>
						<span
							className={`${scrolled ? 'scrolled' : 'skill-font bottom-right'}`}
						>
							Scroll &gt;
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
