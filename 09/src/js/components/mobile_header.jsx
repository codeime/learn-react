import React from 'react';
import { Row, Col } from "antd";

import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;


class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: "app",
            action: "login",
            hasLogined: false,
            userNickName: '',
            userId: ""

        }
    };
    handleClick(e) {
        if (e.key = "register") {
            this.setState({
                current: "register"
            });
            this.setModalVisible(true);
        } else {
            this.setState({
                current: e.key
            });

        }
    };
    setModalVisible(value) {
        this.setState({
            modalVisible: value
        })
    };
    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: "GET"
        };
        var formData = this.props.form.getFieldProps;
        fetch()
            .then()
            .then()
        this.setModalVisible(false);
    };
    login() {
        this.setModalVisible(true)
    }
    render() {
        let { getFieldProps } = this.props.form;

        const userShow = this.state.haslogined ?
            <Link>
                <Icon type="inbox"></Icon>
            </Link>
            :
            <Icon type="setting" onClick={this.login.bind(this)}></Icon>
            ;
        return (
            <header >
                <img src="./src/img/logo.png" alt="logo" />
                <span>ReactNews</span>
                {userShow}
                <Modal title="用户中心" wrapClassName="vertial-center-modal" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)
                } onOk={() => this.setModalVisible(false)} okText='关闭'>
                    <Tabs type="card">
                        <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="账户">
                                <Input placeholder="请输入账号" {...getFieldProps("r_username")}></Input>
                            </FormItem>
                            <FormItem label="密码">
                                <Input type="password" placeholder="请输入密码" {...getFieldProps("r_password")}></Input>
                            </FormItem>
                            <FormItem label="确认密码">
                                <Input type="password" placeholder="请再次输入密码" {...getFieldProps("r_confirmpassword")}></Input>
                            </FormItem>
                            <Button type="primary" htmlType="submit">注册</Button>
                        </Form>
                    </Tabs>
                </Modal>
            </header >

        )
    }
}
export default MobileHeader = Form.create({})(MobileHeader);