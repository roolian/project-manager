import React, { Component } from 'react';


class ContentHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <section className="content-header">
          <h1>
            Page Header {this.props.match.url}
            <small>Optional description</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
            <li className="active">Here</li>
          </ol>
        </section>
      );
    }
}
export default ContentHeader;
