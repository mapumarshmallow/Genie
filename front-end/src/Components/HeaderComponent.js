import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class HeaderComponent extends Component {
    constructor(props) {
      super(props);
      console.log(this.props.user);
      this.renderSignIn = this.renderSignIn.bind(this);
    }

    renderSignIn(){
        if(this.props.user.loggedIn){
            return <h1> signed in </h1>
        }else{
            return(
            <form className="form-inline my-2 my-lg-0">
              <Link to="/login"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Log in</button></Link>
            </form>
            );
        }
    }

    render() {

    const button = this.renderSignIn();
      return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Events <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Link</a>
                </li>
              </ul>
              {button}
            </div>
        </nav>
      </div>
      );
    }
}

function mapStateToProps({user}){
    return {user};
}

export default connect(mapStateToProps)(HeaderComponent);
