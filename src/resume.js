import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Activities from './activities';
import Skills from './skills';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
{/*****************************************************************************************************************
										LEFT HAND SIDE
******************************************************************************************************************/}
					<Cell className = "resume-left-col" col = {4}>
						<div style = {{textAlign: 'center'}}>
							<img
								src = "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/22555017_278331239344235_3345265349258934771_n.jpg?_nc_cat=108&_nc_oc=AQkkrHJL78yOkxX3Jx2NlHBz3brtzVTjbqJvz7mwKuYmtIJ8PGN6UpE4bIn1LMMNS88&_nc_ht=scontent-ort2-2.xx&oh=2dcad3afbe0d56ef0514614fc17ce6cb&oe=5DC41CC5"
								alt = "SJ"
								style = {{height: '200px'}}
							 />
						</div>

						<h2 style = {{paddingTop: '1em'}}>Shanduojiao Jiang</h2>
						<h4 style = {{color: 'grey'}}>Programmer</h4>
						<hr style = {{borderTop: '3px solid #833fb2', width: '60%'}} />

						<p>
						But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of
						</p>

						<hr style = {{borderTop: '3px solid #833fb2', width: '60%'}} />

						<h5>Address</h5>
						<p>512 E Stoughton St, Apt 33</p>

						<h5>Phone</h5>
						<p>(312-868-5813)</p>

						<h5>Email</h5>
						<p>sj10@illinois.edu</p>

						<h5>Web</h5>
						<p>shanduojiaojiang.com</p>

						<hr style = {{borderTop: '3px solid #833fb2', width: '60%'}} />
					</Cell>
{/*****************************************************************************************************************
											RIGHT HAND SIDE
******************************************************************************************************************/}
					<Cell className = "resume-right-col" col = {8}>
						<h2>Education</h2>
						<Education
							startYear = {2017}
							endYear = {2021}
							schoolName = "University of Illinois - Urbana Champaign"
							schoolDescription = "The University of Illinois at Urbana–Champaign (also known as U of I, Illinois, or colloquially as the University of Illinois or UIUC)[7][8] is a public research university in Illinois and the flagship institution of the University of Illinois System. Founded in 1867 as a land-grant institution, its campus is located in the twin cities of Champaign and Urbana."
						/>

						<hr style = {{borderTop: '3px solid #e22947'}} />
						{/****************************************************************************************
						EXPERIENCE
						*****************************************************************************************/}
						<h2>Experience</h2>
						<Experience
							startYear = "May 2019"
							endYear = "Current"
							jobName = "Jetzy"
							jobDescription = "The University of Illinois at Urbana–Champaign (also known as U of I, Illinois, or colloquially as the University of Illinois or UIUC)[7][8] is a public research university in Illinois and the flagship institution of the University of Illinois System. Founded in 1867 as a land-grant institution, its campus is located in the twin cities of Champaign and Urbana."
						/>
						<Experience
							startYear = "May 2019"
							endYear = "Current"
							jobName = "Pulse Website Committee"
							jobDescription = "The University of Illinois at Urbana–Champaign (also known as U of I, Illinois, or colloquially as the University of Illinois or UIUC)[7][8] is a public research university in Illinois and the flagship institution of the University of Illinois System. Founded in 1867 as a land-grant institution, its campus is located in the twin cities of Champaign and Urbana."
						/>
						<Experience
							startYear = "Dec 2018"
							endYear = "May 2019"
							jobName = "University of Illinois - Urbana Champaign"
							jobDescription = "The University of Illinois at Urbana–Champaign (also known as U of I, Illinois, or colloquially as the University of Illinois or UIUC)[7][8] is a public research university in Illinois and the flagship institution of the University of Illinois System. Founded in 1867 as a land-grant institution, its campus is located in the twin cities of Champaign and Urbana."
						/>
						<hr style = {{borderTop: '3px solid #e22947'}} />
						{/****************************************************************************************
						ACTIVITIES
						*****************************************************************************************/}
						<h2>Activities</h2>
						<Activities
							startYear = "May 2019"
							endYear = "Current"
							activityName = "Pulse Women In Tech Committee"
							activityDescription = "The University of Illinois at Urbana–Champaign (also known as U of I, Illinois, or colloquially as the University of Illinois or UIUC)[7][8] is a public research university in Illinois and the flagship institution of the University of Illinois System. Founded in 1867 as a land-grant institution, its campus is located in the twin cities of Champaign and Urbana."
						/>
						<hr style = {{borderTop: '3px solid #e22947'}} />
						{/****************************************************************************************
						SKILLS
						*****************************************************************************************/}
						<h2>Skills</h2>
						<Skills
							skill = "C++"
							progress = {75}
						/>
						<Skills
							skill = "Python"
							progress = {75}
						/>
						<Skills
							skill = "JavaScript"
							progress = {50}
						/>
						<Skills
							skill = "React.js"
							progress = {50}
						/>

					</Cell>
				</Grid>
			</div>
		)
	}
}


export default Resume;
