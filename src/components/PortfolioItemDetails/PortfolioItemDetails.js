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
            {props.data?.link && <a href={props.data.link} target="_blank">Visit Site</a>}
            {props.data?.video && <button>Watch Video</button>}
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
