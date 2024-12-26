import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { useState } from "react";
import './Portfolio.css';
const Portfolio = () => {
    const [pAngle, setPAngle] = useState(0);
    const itemCount = 10;
    const itemList = [...new Array(itemCount).keys()];
    const angleJump = 360 / itemCount;
    return  (<div className="portfolio">
        {itemList.map(item => (
            <PortfolioItem
                itemId={item.toString()}
                angle={pAngle}
                angleJump={angleJump}
            />
        ))}
        <div className="nav-buttons">
            <button onClick={() => setPAngle(pAngle + angleJump)}>
                &lt;
            </button>
            <button onClick={() => setPAngle(pAngle - angleJump)}>
                &gt;
            </button>
        </div>
    </div>);
}
export default Portfolio;