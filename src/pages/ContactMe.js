import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../css/contactMe.css';

export default function ContactMe() {
	const year = new Date().getFullYear();

	return (
		<div className='contactMe' id='contactMe'>
			<div className='contact-desc'>
				<span className='contact-heading'>CONTACT</span>
				<div className='contact-info'>
					<p>
						<span className='contact-heads'>Address: </span>
						<span className='info-details'>
							Ashok Nagar , Road Number 2, Kankerbagh, Patna 800020
						</span>
					</p>
				</div>
				<div className='contact-info'>
					<p>
						<span className='contact-heads'>Phone: </span>{' '}
						<a href='tel://7463879087' className='info-details'>
							+91 7463879087
						</a>
					</p>
				</div>
				<div className='contact-info'>
					<p>
						<span className='contact-heads'>Email: </span>{' '}
						<a href='mailto:arshkr07@gmail.com' className='info-details'>
							arshkr07@gmail.com
						</a>
					</p>
				</div>
				<div className='contact-info'>
					<p>
						<span className='contact-heads'>Website: </span>{' '}
						<a
							href='https://arsh-website.web.app/'
							target='_blank'
							rel='noreferrer'
							className='info-details'
						>
							https://arsh-website.web.app/
						</a>
					</p>
				</div>
			</div>
			<div className='footer'>
				<div className='footer-desc'>
					<span className='footer-desc-info'>
						Copyright &copy; {year} <br />
					</span>{' '}
					<span className='footer-desc-info'>
						All Rights Reserved <br />
					</span>
					<span className='footer-desc-info'>
						Made with{' '}
						<FavoriteIcon
							fontSize='small'
							style={{ paddingLeft: '3px', paddingRight: '3px' }}
						/>{' '}
						by Arsh
					</span>
					<div className='icon-group'>
						<span className='icons'>
							<a
								href='https://github.com/Arsh-ak7'
								target='_blank'
								rel='noreferrer'
							>
								<GitHubIcon style={{ color: 'white' }} />
							</a>
						</span>
						<span className='icons'>
							<a
								href='https://www.linkedin.com/in/arshkumar'
								target='_blank'
								rel='noreferrer'
							>
								<LinkedInIcon style={{ color: 'white' }} />
							</a>
						</span>
						<span className='icons'>
							<a
								href='https://www.instagram.com/arsh_ak7/?hl=en'
								target='_blank'
								rel='noreferrer'
							>
								<InstagramIcon style={{ color: 'white' }} />
							</a>
						</span>
						<span className='icons'>
							<a
								href='https://www.facebook.com/arsh.kumar.ak7/'
								target='_blank'
								rel='noreferrer'
							>
								<FacebookIcon style={{ color: 'white' }} />
							</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
