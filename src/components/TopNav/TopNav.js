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
                <a href="https://danielpatrickkoenig.github.io/shared-app-resources/dpk-resume-04012024.pdf" target="_blank" title="Resume">Resume</a>
                <a href="https://www.linkedin.com/in/dan-koenig-b4a9808/" target="_blank" title="Llinked In">Linked In</a>
            </nav>
        </header>
    );
};
export default TopNav;
