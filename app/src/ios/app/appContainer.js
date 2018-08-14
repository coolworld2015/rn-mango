'use strict';

import React, {Component} from 'react';
import {
    TabBarIOS,
    NavigatorIOS,
    Alert
} from 'react-native';

import Phones from '../phones/phones';
import Users from '../users/users';
import UserAdd from '../users/userAdd';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'Users'
        };
    }

    onLogOut() {
        this.props.onLogOut();
    }

    render() {
        return (
            <TabBarIOS>

                <TabBarIOS.Item
                    title="Balance"
                    icon={require('../../../img/campaigns.png')}
                    selected={this.state.selectedTab === 'Users'}
                    onPress={() => this.setState({selectedTab: 'Users'})}>

                    <NavigatorIOS
                        style={{
                            flex: 1
                        }}
                        initialRoute={{
                            component: Users,
                            title: 'Balance',
                            rightButtonTitle: 'New'
                        }}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="Customers"
                    icon={require('../../../img/users.png')}
                    selected={this.state.selectedTab === 'Phones'}
                    onPress={() => this.setState({selectedTab: 'Phones'})}>

                    <NavigatorIOS
                        style={{
                            flex: 1
                        }}
                        ref="customers"
                        initialRoute={{
                            component: Phones,
                            title: 'Customers',
                            rightButtonTitle: 'New',
                            onRightButtonPress: () => {
                                this.refs.customers.navigator.push({
                                    title: "New record",
                                    component: UserAdd
                                });
                            }
                        }}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="Logout"
                    icon={require('../../../img/log-out.png')}
                    selected={this.state.selectedTab === 'Logout'}
                    onPress={this.onLogOut.bind(this)}>
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
}

export default AppContainer;
