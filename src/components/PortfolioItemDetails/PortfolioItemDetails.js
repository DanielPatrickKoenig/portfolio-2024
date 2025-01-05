import './PortfolioItemDetails.css';
const PortfolioItemDetails = (props) => {
    const conetentStruture = [
        {
            name: 'Description',
            id: 'description'
        },
        {
            name: 'My Contribution',
            id: 'contribution'
        },
        {
            name: 'What I am most proud of',
            id: 'mostProudOf'
        }
    ];
    return (
        <div class="portfolio-item-details">
            <h2 className="visually-hidden">{props.data.title}</h2>
            {props.data?.link && (
                <a
                    className="btn"
                    href={props.data.link}
                    target="_blank"
                    title="Visit Site"
                >
                    Visit Site
                </a>
            )}
            {props.data?.video && (
                <button
                    class="btn"
                    onClick={() => props.onVideoClicked(props.data?.video)}
                    title="Watch Video"
                >
                    Watch Video
                </button>
            )}
            {props.data?.demo && (
                <a
                    class="btn"
                    href={props.data.demo}
                    target="_blank"
                    title="Visit Demo"
                >
                    Visit Demo
                </a>
            )}
            <ul>
                {conetentStruture
                    .filter(item => props.data[item.id])
                    .map(item => (<li>
                        <h3>
                            {item.name}
                        </h3>
                        <p>
                            {props.data[item.id]}
                        </p>
                    </li>)
                )}
            </ul>
        </div>
    );
}
export default PortfolioItemDetails;
