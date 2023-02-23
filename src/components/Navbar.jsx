import '../styles/navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className='heading-container'>
                <h1>sunnyside</h1>
            </div>
            <div className='buttons-container'>
                <a className='a-link'>About</a>
                <a className='a-link'>Services</a>
                <a className='a-link'>Project</a>
                <button className='btn-link'>CONTACT</button>
            </div>
        </div>
    )
}