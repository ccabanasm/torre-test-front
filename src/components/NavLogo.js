import React, { useState } from "react";

function NavLogo(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className="nav-logo">
            <a href="/" className="nav-logo" onClick={() => setOpen(!open)}>
                {props.icon}
                {props.titulo}
            </a>

            {open && props.children}
        </li>
    );
}

export default NavLogo;