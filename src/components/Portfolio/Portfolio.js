import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { useState, useEffect } from "react";
import './Portfolio.css';
const Portfolio = (props) => {
    const [pAngle, setPAngle] = useState(0);
    const [pIndex, setPIndex] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const angleJump = 360 / itemCount;
    const changeItem = (a, d) => {
        let tempPIndex = pIndex + d;
        if (tempPIndex >= itemCount) {
            tempPIndex = 0;
        }
        if (tempPIndex < 0) {
            tempPIndex = itemCount - 1;
        }
        setPIndex(tempPIndex);
        const colors = props?.data?.items[tempPIndex].bg;
        // document.querySelector('body').style.backgroundImage = `radial-gradient(circle at top center,${colors[0]} 0%,${colors[1]} 100%)`;
        document.querySelector('body').style.backgroundColor = colors[1];
        setPAngle(a);
    }
    useEffect(() => {
        setItemCount(props?.data?.items?.length);
        if (props?.data?.items?.length) {
            const colors = props?.data?.items[pIndex].bg;
            document.querySelector('body').style.backgroundColor = colors[1];
        }
    }, [props.data]);
    return  (<div className="portfolio">
        {props?.data?.items?.map((item, index) => (
            <PortfolioItem
                itemId={index.toString()}
                angle={pAngle}
                angleJump={angleJump}
                data={item}
            />
        ))}
        <div class="info-panel-1">
            {props?.data?.items?.length && <h2>{props?.data?.items[pIndex].title}</h2>}
        </div>
        <div className="nav-buttons">
            <button onClick={() => changeItem(pAngle + angleJump, -1)}>
                &lt;
            </button>
            <button onClick={() => changeItem(pAngle - angleJump, 1)}>
                &gt;
            </button>
        </div>
    </div>);
}
export default Portfolio;