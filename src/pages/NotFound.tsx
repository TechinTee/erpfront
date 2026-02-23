import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>404 <span>Page not found</span></h1>
            <button>
                <Link to="/"><h2>Back to Home</h2></Link>
            </button>

        </div>
    )
}

export default NotFound