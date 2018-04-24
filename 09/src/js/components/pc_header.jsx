import React from 'react';
import { Row, Col } from "antd";

import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
class PCHeader extends React.Component {
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
    render() {
        let { getFieldProps } = this.props.form;
        let userShow = this.state.hasLogined ?
            <Menu.Item key="logout" class="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;
                &nbsp;
                <Link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &nbsp;
                &nbsp;
                <Button type="dashed" htmlType="button" onclick="">退出</Button>
            </Menu.Item>
            :
            <Menu.Item>
                <Icon type="appstore" key="register" />注册/登陆
            </Menu.Item>;




        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="./src/img/logo.png" alt="logo" />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} >
                            <Menu.Item key="app">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore" />时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>

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
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header >

        )
    }
}
export default PCHeader = Form.create({})(PCHeader);