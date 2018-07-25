import React, { Component } from 'react'
import './Dashboard.css'
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor () {
        super() 
        this.state = {
            myPosts: true,
            posts: [],
            search: '',
        }
    }

    handleCheck = () => {
        this.setState({ myPosts: !this.state.myPosts })
    }

    handleChange = (val) => {

    }

    componentDidMount = () => {
        axios.get(`/api/posts/${this.props.id}?userposts=${this.state.myPosts}&search=${this.state.search}`)
        .then(results => {
            this.setState({ posts: results.data })
        })
    }

    render() {
        return (
            <div className='Dashbody'>
            {console.log(this.state.posts)}
                <div className='Dashtop'>
                    <div className='DashSearch'>
                        <input placeholder="Search by Title" onChange={(e) => this.handleChange(e.target.value)} />
                        <img className='SearchButt' src={require('../../assets/search_logo.png')} alt='Search'/>
                        <button>Reset</button>
                    </div>
                    <div>My Posts<input onChange={this.handleCheck} type='Checkbox' checked/></div>
                </div>
                <div className='DashPosts'>
                {console.log(this.state.posts)}
                    {this.state.posts.map(post => (
                        <Link to='/Post' postid={post.id} >
                            <div>
                                <h3>{post.title}</h3>
                                <div className='author_box'>
                                    <p>Posted by: {post.username}</p>
                                    <img src={post.profile_pic} alt='Author Profile' />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { id } = state
    return {
        id
    }
}

export default connect (mapStateToProps) (Dashboard)