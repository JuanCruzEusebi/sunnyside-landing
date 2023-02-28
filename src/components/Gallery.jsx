import '../styles/gallery.scss'

export default function Gallery() {
    return (
        <div className="gallery-container">
            <div className="cherry-container">
                <div  className='cherry-txt-container'>
                <h1>Graphic Design</h1>
                <p>Greate design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention</p> 
                </div>
            </div>
            <div className="orange-container">
                <div className='orange-txt-container'>
                <h1>Photography</h1>
                <p>Increase your credibilty by getting the most stunning, high quality photos that improve your business image</p>
                </div>
            </div>
        </div>
    )
}