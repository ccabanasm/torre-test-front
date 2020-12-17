import React, { useState } from "react";
import DropDownItem from "./DropDownItem";
import {
    GiField,
    ImCog,
    ImExit,
    MdChevronLeft,
    MdChevronRight,
} from "react-icons/all";
import { CSSTransition } from "react-transition-group";

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition
                in={activeMenu === "main"}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropDownItem>Profile</DropDownItem>
                    <DropDownItem
                        leftIcon={<ImCog />}
                        rightIcon={<MdChevronRight />}
                        goToMenu="settings"
                        setActiveMenu={setActiveMenu}
                    >
                        Settings
                    </DropDownItem>
                    <DropDownItem leftIcon={<ImExit />}>
                        Logout
                    </DropDownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "settings"}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropDownItem
                        leftIcon={<MdChevronLeft />}
                        goToMenu="main"
                        setActiveMenu={setActiveMenu}
                    />
                    <DropDownItem leftIcon={<GiField />}>
                        Board
                    </DropDownItem>
                    <DropDownItem>Account</DropDownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default DropdownMenu;