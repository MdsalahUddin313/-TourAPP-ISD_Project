import React from 'react';
import './headstyle.css';
import videos from '../Assets/background_video.mp4';
const Video = () => {
    return (
        <div>
           
           <section class="showcase">
               <h1 class="navbar_items">navbar</h1>
			<div class="video-container">
				<video src={videos} autoplay="autoplay" muted loop="loop" ></video>
			</div>
			<div class="content">
				<h1>Explore the world</h1>
				<h3>Just pack your bag and go out for adventure . </h3>
				<a href="#about" class="btn">Read More</a>
			</div>
		</section>

		
        </div>
    );
};

export default Video;