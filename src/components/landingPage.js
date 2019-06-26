import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
	render() {
		return (
			<div style = {{width: '100%', margin: 'auto'}}>
				<Grid className = "landing-grid">
					<Cell col = {12}>
						<img
							src = "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/22555017_278331239344235_3345265349258934771_n.jpg?_nc_cat=108&_nc_oc=AQkkrHJL78yOkxX3Jx2NlHBz3brtzVTjbqJvz7mwKuYmtIJ8PGN6UpE4bIn1LMMNS88&_nc_ht=scontent-ort2-2.xx&oh=2dcad3afbe0d56ef0514614fc17ce6cb&oe=5DC41CC5"
							alt = "sj"
							className = "sj-image"
						/>

						<div className = "banner-text">
							<h1>Shanduojiao Jiang</h1>
							<hr/>
							<p>This is just a preliminary website created by SJ</p>

							<div className = "social-links">
								{/* LinkedIn*/}
								<a href = "https://www.linkedin.com/in/shanduojiao-jiang-8881aa155/" rel = "noopener noreferrer" target = "_blank">
									<i className = "fa fa-linkedin-square" aria-hidden = "true" />
								</a>

								{/* GitHub */}
								<a href = "https://github.com/shanduojiaojiang" rel = "noopener noreferrer" target = "_blank">
									<i className = "fa fa-github-square" aria-hidden = "true" />
								</a>

								{/* Facebook*/}
								<a href = "https://www.facebook.com/minnie.jiang.71" rel = "noopener noreferrer" target = "_blank">
									<i className = "fa fa-facebook-square" aria-hidden = "true" />
								</a>

								{/* Instagram*/}
								<a href = "https://www.instagram.com/shanduojiao_jiang/?hl=en" rel = "noopener noreferrer" target = "_blank">
									<i className = "fa fa-instagram" aria-hidden = "true" />
								</a>

							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}


export default Landing;
