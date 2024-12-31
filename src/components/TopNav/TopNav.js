import { useState } from 'react';
import './TopNav.css';
const TopNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header>
            <h1>Daniel Koenig | Developer</h1>
            <button
                className="nav-toggle"
                onClick={() => { setShowMenu(!showMenu) }}
                aria-label="Menu"
            />
            <nav className={showMenu ? 'shown' : 'hidden'}>
                <a>Resume</a>
                <a>Linked In</a>
            </nav>
        </header>
    );
};
export default TopNav;
