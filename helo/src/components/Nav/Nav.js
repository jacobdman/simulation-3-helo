import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import './Nav.css'

function Nav (props) {
    if (props.location.pathname === '/') {
        return (
            <div>
            </div>
        )
    } else { 
        return (
            <div className='NavBody'>
                <div className='navTop'>
                    <div className='profile'>
                        <img className='profilePic' src={props.profile_pic} alt="Profile"/>
                        <p className='profileName'>{props.username}</p>
                    </div>
                    <div className='navButts'>
                        <Link to="/dashboard"><img className='navImg' src={require('../../assets/home_logo.png')} alt="Home"/></Link>
                        <Link to="/new"><img className='navImg' src={require('../../assets/new_logo.png')} alt="New Post"/></Link>
                    </div>
                </div>
                <div className='logout'><Link to="/"><img className='navImg' src={require("../../assets/shut_down.png")} alt="Logout" /></Link></div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { username, profile_pic } = state
    return {
        username,
        profile_pic
    }
}

export default withRouter(connect (mapStateToProps) (Nav));