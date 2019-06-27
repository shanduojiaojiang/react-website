import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
	render() {
		return (
			<div className = "contact-body">
				<Grid className = "contact-grid">
					<Cell col = {6}>
						<h2>Shanduojiao Jiang</h2>
						<img
							src = "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/22555017_278331239344235_3345265349258934771_n.jpg?_nc_cat=108&_nc_oc=AQkkrHJL78yOkxX3Jx2NlHBz3brtzVTjbqJvz7mwKuYmtIJ8PGN6UpE4bIn1LMMNS88&_nc_ht=scontent-ort2-2.xx&oh=2dcad3afbe0d56ef0514614fc17ce6cb&oe=5DC41CC5"
							alt = "avatar"
							style = {{height: '250px'}}
						/>
						<p style = {{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
						</p>
					</Cell>

					<Cell col = {6}>
						<h2>Contact Me</h2>
							<hr/>
							<div className = "contact-list">
								<List>
								  <ListItem>
								    <ListItemContent style = {{fontSize: '30px', fontFamily: 'Anton'}}>
											<i className = "fa fa-phone-square" aria-hidden = "True"/>
											(312)-868-5813
											</ListItemContent>
								  </ListItem>

								  <ListItem>
										<ListItemContent style = {{fontSize: '30px', fontFamily: 'Anton'}}>
											<i className = "fa fa-envelope" aria-hidden = "True"/>
											sj10@illinois.edu
											</ListItemContent>
								  </ListItem>

									<ListItem>
										<ListItemContent style = {{fontSize: '30px', fontFamily: 'Anton'}}>
											<i className = "fa fa-home" aria-hidden = "True"/>
											512 E Stoughton St
											</ListItemContent>
								  </ListItem>

								</List>
							</div>

					</Cell>
				</Grid>
			</div>

		)
	}
}


export default Contact;
