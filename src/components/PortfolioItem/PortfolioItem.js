import { Fragment } from 'react';
import './PortfolioItem.css';
import jstrig from 'jstrig';
const PortfolioItem = (props) => {
    const itemStyle = () => {
        const rotation = props.angle + (props.itemId * props.angleJump);
        const x = Math.round(jstrig.orbit(0, 300, rotation, 'cos'));
        const z =  Math.round(jstrig.orbit(0, -100, rotation, 'sin'));
        const inCenter = rotation % 360 === 0 || rotation === 0;
        const xRot = inCenter ? -40 : -30;
        const transform = `translateX(${x}px) translateY(${z}px) rotateX(${xRot}deg) rotateY(${rotation}deg) rotateZ(${x * .1}deg) scale(${1 - (Math.abs(x) / 600)})`;
        const transformbottom = `translateX(${x * .88}px) translateY(${z + 120}px) rotateX(0deg) rotateY(${rotation}deg) rotateZ(0deg) scale(${1 - (Math.abs(x) / 600)})`;
        return { top:{ transform }, bottom: { transform: transformbottom } };
    }
    return (
        <Fragment>
            <div 
                className={`portfolio-item-bottom portfolio-item--bottom${props.itemId}`}
                style={itemStyle().bottom}
            >
                <div className="inner-portfolio-item">
                    { props.itemId }
                </div>
                
                {/* {JSON.stringify(itemStyle())} */}
            </div>
            <div 
                className={`portfolio-item portfolio-item-${props.itemId}`}
                style={itemStyle().top}
            >
                <div className="inner-portfolio-item">
                    { props.itemId }
                </div>
                
                {/* {JSON.stringify(itemStyle())} */}
            </div>
            
        </Fragment>
    )
};
export default PortfolioItem;