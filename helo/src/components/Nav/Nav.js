import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

function NavnoRoute (props) {
    if (props.location.pathname === '/') {
        return (
            <div>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Nav</h3>
                <Link to="/dashboard"><button>Home</button></Link>
                <Link to="/new"><button>New Post</button></Link>
                <Link to="/"><button>Logout</button></Link>
            </div>
        )
    }
}

const Nav = withRouter(NavnoRoute)
export default Nav