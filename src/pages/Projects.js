import React from "react";
import "../css/projects.css";
import NetflixImage from "../images/Netflix.jpg";
import AirbnbImage from "../images/airbnb.png";
import YoutubeImage from "../images/youtube.jpg";
import GalleryImage from "../images/gallery.jpg";
import TravelLog from "../images/travel-log.png";
import Media from "../images/mm.png";
import WeatherImage from "../images/weather.jpg";

export default function Projects() {
	return (
		<div className='projects' id='projects'>
			<div className='internship'>
				<h1 className='banner-head'>INTERNSHIP</h1>
				<h1 className='internship-head'>
					Web Development Intern at DETERMINANT STUDIOS
				</h1>

				<h1 className='internship-head'>Jan 2021 - March 2021</h1>
			</div>
			<div className='banner'>
				<h1 className='banner-head'> SELF MADE PROJECTS</h1>
			</div>
			<div className='row'>
				<div className='row-posters'>
					<div className='image-containers'>
						<a
							href='https://travel-log-951f7.web.app/'
							target='_blank'
							rel='noreferrer'>
							<img src={TravelLog} alt='img' className='image-tile gallery' />
						</a>
						<span className='subheading'>TRAVEL MAP</span>
						<p className='project-desc'>
							A travel map where users can pin places they visit, write and read
							reviews. <br /> They can also try our random destination suggester
							if too confused on where to visit next!
						</p>
					</div>
					<div className='image-containers'>
						<a
							href='https://netflix-clone-auth-a9cb9.web.app/'
							target='_blank'
							rel='noreferrer'>
							<img
								src={NetflixImage}
								alt='img'
								className='image-tile netflix'
							/>
						</a>
						<span className='subheading'>NETFLIX CLONE</span>
						<p className='project-desc'>
							Cloned the frontend using ReactJs, backend is based on GraphQL and
							I have integrated Razorpay API for payments
						</p>
					</div>
					<div className='image-containers'>
						<a
							href='https://arsh-gallery.netlify.app/'
							target='_blank'
							rel='noreferrer'>
							<img
								src={GalleryImage}
								alt='img'
								className='image-tile gallery'
							/>
						</a>
						<span className='subheading'>GALLERY APP</span>
						<p className='project-desc'>
							An InfiniteScroll Gallery using ReactJS and Unsplash API with
							Firebase based authentication and Tensorflow image recognition
						</p>
					</div>
					<div className='image-containers'>
						<a
							href='https://airbnb-clone-f74de.web.app/'
							target='_blank'
							rel='noreferrer'>
							<img src={AirbnbImage} alt='img' className='image-tile airbnb' />
						</a>
						<span className='subheading'>AIRBNB CLONE</span>
						<p className='project-desc'>Cloned the front-end using ReactJS</p>
					</div>
					<div className='image-containers'>
						<a
							href='https://sampletwi.netlify.app/'
							target='_blank'
							rel='noreferrer'>
							<img src={Media} alt='img' className='image-tile media' />
						</a>
						<span className='subheading'>BASIC SOCIAL MEDIA APP</span>
						<p className='project-desc'>
							Made the front-end using ReactJS and Semantic-UI, Did the backend
							using Node and GraphQL
						</p>
					</div>
					<div className='image-containers'>
						<a
							href='https://clo-63a81.web.app/'
							target='_blank'
							rel='noreferrer'>
							<img src={YoutubeImage} alt='img' className='image-tile ytb' />
						</a>
						<span className='subheading'>YOUTUBE CLONE</span>
						<p className='project-desc'>Cloned the front-end using ReactJS</p>
					</div>
					<div className='image-containers'>
						<a
							href='https://arsh-weatherapp.netlify.app/'
							target='_blank'
							rel='noreferrer'>
							<img
								src={WeatherImage}
								alt='img'
								className='image-tile weather'
							/>
						</a>
						<span className='subheading'>WEATHER APP</span>
						<p className='project-desc'>A Simple Weather App</p>
					</div>
				</div>
			</div>
		</div>
	);
}
