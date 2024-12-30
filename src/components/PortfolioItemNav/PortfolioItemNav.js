import { useState } from 'react';
import './PortfolioItemNav.css';
const PortfolioItemNav = (props) => {
    const [dragging, setDragging] = useState(false)
    const [pointer, setPointer] = useState({});
    const [movement, setMovement] = useState({});
    const swipeStart = (e) => {
        setDragging(true);
    }
    const swipeMove = (e) => {
        if(dragging) {
            
        }
    }
    const swipeEnd = (e) => {
        setDragging(false);
    }
    return (
        <div
            className="nav-buttons"
            onTouchStart={swipeStart}
            onTouchMove={swipeMove}
            onTouchEnd={swipeEnd}
        >
            <button onClick={() => props.onMoveLeft()}>
                &lt;
            </button>
            <button onClick={() => props.onMoveRight()}>
                &gt;
            </button>
        </div>
    );
};
export default PortfolioItemNav;