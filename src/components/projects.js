import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {activeTab: 0}
	}

	toggleCategories() {
		if(this.state.activeTab === 0) {
			return (
				<div className = "projects-grid">
					{/*First Hackathon*/}
					<Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
						<CardTitle style = {{color: '#fff', height: '176px', background:
						'url(https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/52759619_547546019089421_3977572674569240576_o.jpg?_nc_cat=110&_nc_oc=AQksU9tcIuV2ib_aSBCDWvUPYQnBYt-aE41TqAD7MCNqOJaD27ve7tcSgcA4eG_O3SA&_nc_ht=scontent-ort2-2.xx&oh=fb4c2ebe86423e1e20276f070ac96442&oe=5DC499DA) center / cover'}}>
							Hackathon Experience</CardTitle>
						<CardText>
							I was in a pool of Bugdroids!
						</CardText>
						<CardActions>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>

						<CardMenu style = {{color: '#fff'}}>
							<IconButton name = "share" />
						</CardMenu>
					</Card>

					{/*Whitney Museum*/}
					<Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
						<CardTitle style = {{color: '#fff', height: '176px', background:
						'url(https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/50223137_523719431472080_7151531687879376896_n.jpg?_nc_cat=102&_nc_oc=AQm0FGDY-vij_8vJM2iyhYfbRPwo5-wNHVqc5QM_QzCpQb3yuZzYCVK0_JosqwDo03A&_nc_ht=scontent-ort2-2.xx&oh=9be2f91ef3be23b9f6e39823eb2a1c65&oe=5D865086) center / cover'}}>
							Whitney Museum</CardTitle>
						<CardText>
							Okay I know Whitney Museum has nothing to do with my coding projects, but who cares! I look dope in this picture!
						</CardText>
						<CardActions>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>

						<CardMenu style = {{color: '#fff'}}>
							<IconButton name = "share" />
						</CardMenu>
					</Card>

					{/*Time Square*/}
					<Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
						<CardTitle style = {{color: '#fff', height: '176px', background:
						'url(https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/48396055_512677619242928_5367536666942636032_o.jpg?_nc_cat=100&_nc_oc=AQlvDswNupPjUDpoEMJhkR3PEdjS3_mD6uPLp2dYJP0m_ZJE7e5K4_lS3AvshYMvhFQ&_nc_ht=scontent-ort2-2.xx&oh=5403b2c6b6c77ee0deee7c96113bc36b&oe=5DB6C22D) center / cover'}}>
							Time Square</CardTitle>
						<CardText>
							Just look at how amazing iPhoneX camera could be!
						</CardText>
						<CardActions>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>

						<CardMenu style = {{color: '#fff'}}>
							<IconButton name = "share" />
						</CardMenu>
					</Card>

				</div>

			)
		} else if (this.state.activeTab === 1) {
			return (
				<div><h1>This is Angular Category</h1></div>
			)
		} else if (this.state.activeTab === 2) {
			return (
				<div><h1>This is VueJS Category</h1></div>
			)
		} else if (this.state.activeTab === 3) {
			return (
				<div><h1>This is MongoDB Category</h1></div>
			)
		}
	}

	render() {
		return (
			<div className = "category-tabs">
				<Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple>
					<Tab>React</Tab>
					<Tab>Angular</Tab>
					<Tab>VueJS</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>

				<Grid>
					<Cell col = {12}>
						<div className = "Content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}


export default Project;
