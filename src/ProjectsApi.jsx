import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/"
});

const apis = {
  loadProjects: () => api.get('projects'),

  loadProject: id => api.get("projects/" + id),

  removeProject: id => api.delete("projects/" + id),

  updateProject: (id, postData) => api.put('/projects/' + id, postData)

};



class ProjectsApi extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let display;

    if(this.props.projectId){
      display = <ProjectShow projectId={this.props.projectId}/>
    } else {
      display = <ProjectsList />
    }

    return(
      <div>
        <h2>Projet {this.props.projectId}</h2>
        {display}
      </div>
      );
  }
}

export default ProjectsApi;

class ProjectsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount(){
     apis.loadProjects()
      .then(res => {
        let projects = res.data.map((project, index) => {
          return (
            <div key={index}>
              <h3>{project.name}</h3>
              <p>Client: {project.client}</p>
              <Link to={"/projects/"+project.id}>Voir</Link>
            </div>
          )
        })
        this.setState({projects: projects});
      })
  }

  render() {
    return (
      <div>
        {this.state.projects}
      </div>
    );
  }
}

class ProjectShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      project: [],
      mode: 'show',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    apis.loadProject(this.props.projectId)
      .then(res => {
        this.setState( {project: res.data} )
    });
  }

  handleChange(event) {
    const target = event.target;
    const named = target.name;
    let postData= {id:this.state.project.id,  name:this.state.project.name, client: this.state.project.client };
    postData[named] = event.target.value;

    this.setState({
      project: postData
    });

  }

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    this.setState( {mode: 'edit'} );
  }

  handleSubmit(event) {
    event.preventDefault();
    let postData= { name:this.state.project.name, client: this.state.project.client };
    apis.updateProject(this.props.projectId, postData)
      .then(res => {
        this.setState( {mode: 'show'} );
    });
  }

  render() {
    if (this.state.mode == "show"){
      return (
        <div key={this.state.project.id}>
          <h3>{this.state.project.name}</h3>
          <p>Client: {this.state.project.client}</p>
          <a href="#" onClick={this.handleClick} >Modifier</a>
        </div>
      );
    }
    else{
      return (
        <div key={this.state.project.id}>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name: <input type="text" name="name" onChange={this.handleChange}  value={this.state.project.name} />
            </label><br/>
            <label>
              Client: <input type="text" name="client" onChange={this.handleChange}  value={this.state.project.client} />
            </label><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }

  }
}

