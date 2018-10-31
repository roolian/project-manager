import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import ProjectsApi from "./ProjectsApi";

import ContentHeader from './LayoutComponents';


class PageProjects extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
          <ContentHeader match={ this.props.match }/>
          <ProjectsApi projectId={this.props.match.params.id}/>
        </div>
      );
    }
}
export default PageProjects;




