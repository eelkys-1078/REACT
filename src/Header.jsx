// Header.jsx

import React from 'react'; // Import React (necessary for JSX)

// Define the Header component
function Header() {
    // Return your header JSX
    return (
        <header>
            <h1>Welcome to My App!</h1>
            {/* You can add more elements here like navigation links, logo, etc. */}
            <nav>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Services</a>
                    </li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

// Export the Header component so it can be imported in other files
export default Header;
