import { useState } from 'react';
import { processEvent } from "../../utils/general";
import './PortfolioItemNav.css';
const PortfolioItemNav = (props) => {
    const [dragging, setDragging] = useState(false)
    const [pointer, setPointer] = useState({});
    const [movement, setMovement] = useState({ x: 0, y: 0 });
    const switMin = 50;
    const swipeStart = (e) => {
        setDragging(true);
        const position = processEvent(e);
        setPointer(position);
    }
    const swipeMove = (e) => {
        if(dragging) {
            const { x, y } = processEvent(e);
            const position = { x: pointer.x - x, y: pointer.y - y };
            setMovement(position);
        }
    }
    const swipeEnd = () => {
        setDragging(false);
        if (movement.x > switMin){
            props.onMoveRight();
        }
        if (movement.x < switMin * -1){
            props.onMoveLeft();
        }
        setMovement({ x: 0, y: 0 });
    }
    return (
        <div
            className="nav-buttons"
            onTouchStart={swipeStart}
            onTouchMove={swipeMove}
            onTouchEnd={swipeEnd}
        >
            <button
                className="btn"
                onClick={() => props.onMoveLeft()}
                aria-label="left button"
            />
            <button
                className="btn"
                onClick={() => props.onMoveRight()}
                aria-label="right button"
            />
        </div>
    );
};
export default PortfolioItemNav;