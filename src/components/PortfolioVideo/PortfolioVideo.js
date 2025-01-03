import './PortfolioVideo.css';
const PortfolioVideo = (props) => {
    const base = 'https://danielpatrickkoenig.github.io/shared-app-resources/';
    return (<div className="portfolio-video">
        <video controls="controls"  autoplay="autoplay" poster="eh5v.files/html5video/panera.jpg" title={props.vid} muted playsinline="true">
            <source src={`${base}${props.vid}.m4v`} type="video/mp4" />
            <source src={`${base}${props.vid}.mp4`} />
        </video>
    </div>)
}
export default PortfolioVideo;