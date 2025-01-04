import { Fragment } from 'react';
import './PortfolioItem.css';
import jstrig from 'jstrig';
const PortfolioItem = (props) => {
    const itemStyle = () => {
        const rotation = props.angle + (props.itemId * props.angleJump);
        const x = Math.round(jstrig.orbit(0, 300, rotation, 'cos'));
        const z =  Math.round(jstrig.orbit(0, -100, rotation, 'sin'));
        const inCenter = rotation % 360 === 0 || rotation === 0;
        const xRot = -25;
        const xRotation = z < 0 ? xRot * -1 : xRot;
        const zRot = x * .125;
        const zRotation = z < 0 ? zRot * -.8 : zRot;
        const scaleFactor = z < 0 ? .5 : 1 - (Math.abs(x) / 600);
        const transform = `translateX(${x}px) translateY(${z}px) rotateX(${xRotation}deg) rotateY(${rotation}deg) rotateZ(${zRotation}deg) scale(${scaleFactor})`;
        const transformbottom = `translateX(${x}px) translateY(${z}px) rotateX(0deg) rotateY(${rotation}deg) rotateZ(0deg) scale(${scaleFactor - (z < 90 && z > 0 ? .1 : 0)})`;
        const opacity = 1 - Math.abs(x * .0034) - (z < 0 ? .25 : 0);
        const filter = z < 0 ? 'blur(6px)' : 'unset';
        const zIndex = Math.round(z);
        const backroundImage = `url('${props.data.cardBg}')`;
        return {
            top:{ 
                transform,
                opacity,
                // filter,
                zIndex
            },
            bottom: {
                transform: transformbottom,
                opacity,
                // filter,
                zIndex
            },
            bg: {
                'background-image': backroundImage
            }
        };
    }
    return (
        <Fragment>
            <div 
                className={`portfolio-item portfolio-item-${props.itemId}`}
                style={itemStyle().top}
                role="presentation"
            >
                <div
                    className="inner-portfolio-item"
                    style={itemStyle().bg}
                />
                
                {/* {JSON.stringify(itemStyle())} */}
            </div>
            <div 
                className={`portfolio-item-bottom portfolio-item-bottom-${props.itemId}`}
                style={itemStyle().bottom}
                role="presentation"
            >
                <div
                    className="inner-portfolio-item"
                    style={itemStyle().bg}
                />
                
                {/* {JSON.stringify(itemStyle())} */}
            </div>
            
        </Fragment>
    )
};
export default PortfolioItem;