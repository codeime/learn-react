import React from 'react';
import { Row, Col } from "antd";

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: "app"
        }
    };

    render() {
        return (
            <header >
                <img src="./src/img/logo.png" alt="logo" />
                <span>ReactNews</span>
            </header >

        )
    }
} 