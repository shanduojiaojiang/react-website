import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col = {3}>
          <div style = {{display: 'flex'}}>
            {this.props.skill}
          </div>
        </Cell>
        <Cell col = {9}>
          <div style = {{display: 'flex'}}>
            <ProgressBar style = {{width: '80%'}} progress={this.props.progress}/>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
