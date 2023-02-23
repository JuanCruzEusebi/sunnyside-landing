import '../styles/header.scss'
import Navbar from './Navbar'


export default function Header() {
    return (
        <div className='home main-container'>
            <Navbar />
            <div className='phrase-container'>
                <h1 className='header-phrase'>WE ARE CREATIVES</h1>
                <img className='header-logo' src={'https://icongr.am/fontawesome/angle-double-down.svg?size=128&color=ffffff'}></img>
            </div>
        </div>
    )
}