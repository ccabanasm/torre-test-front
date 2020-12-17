import React, { useState } from "react";

function NavItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className={props.titulo ? "nav-item-text" : "nav-item"}>
            <a
                href={props.linkTo}
                className={props.titulo ? "text-button" : "icon-button"}
                onClick={() => setOpen(!open)}
            >
                {props.titulo}
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

export default NavItem;