import {Link} from 'react-router'

const Dashboard = () => {
    return (
        <>
            <h1>Admin Dashboard</h1>
            <button>
                <Link to="/">Regresar</Link>
            </button>
        </>
    )
}

export default Dashboard