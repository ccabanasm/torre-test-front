import React from "react";

function DropDownItem(props) {

    return (
        <a
            href={props.linkTo}
            className="menu-item"
            onClick={
                    () => props.goToMenu && props.setActiveMenu(props.goToMenu)
            }
        >
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </a>
    );
}

export default DropDownItem;