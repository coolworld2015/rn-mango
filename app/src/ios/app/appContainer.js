'use strict';

import React, {Component} from 'react';
import {
    TabBarIOS,
    NavigatorIOS,
    Alert
} from 'react-native';

import Campaigns from '../campaigns/campaigns';
import Sspsem from '../sspsem/sspsem';
import AllRNComponents from '../components/components';
import Viewoo from '../viewoo/viewoo';

import Phones from '../phones/phones';
import Users from '../users/users';
import UserAdd from '../users/userAdd';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'Phones'
        };
    }

    onLogOut() {
        this.props.onLogOut();
    }

    deleteItemDialog() {
        Alert.alert(
            'Information.',
            'This action is under construction.',
            [
                {
                    text: 'OK', onPress: () => {}
                },
            ]
        );
    }

    render() {
        return (
            <TabBarIOS>

{/*                <TabBarIOS.Item
                    title="Campaigns"
                    icon={require('../../../img/campaigns.png')}
                    selected={this.state.selectedTab === 'Campaigns'}
                    onPress={() => this.setState({selectedTab: 'Campaigns'})}>

                    <NavigatorIOS
                        style={{
                            flex: 1
                        }}
                        ref="campaigns"
                        initialRoute={{
                            component: Campaigns,
                            title: 'Campaigns',
                            rightButtonTitle: 'New',
                            onRightButtonPress: () => {
                                this.deleteItemDialog();
                            }
                        }}
                    />
                </TabBarIOS.Item>*/}

{/*                <TabBarIOS.Item
                    title="SSP EM"
                    icon={require('../../../img/sspsem.png')}
                    selected={this.state.selectedTab === 'Sspsem'}
                    onPress={() => this.setState({selectedTab: 'Sspsem'})}>

                    <NavigatorIOS
                        style={{
                            flex: 1
                        }}
                        ref="sspsem"
                        initialRoute={{
                            component: Sspsem,
                            title: 'SSP Endpoints Manager',
                            rightButtonTitle: 'New',
                            onRightButtonPress: () => {
                                this.deleteItemDialog();
                            }
                        }}
                    />
                </TabBarIOS.Item>*/}

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
                    title="Balance"
                    icon={require('../../../img/campaigns.png')}
                    selected={this.state.selectedTab === 'Users'}
                    onPress={() => this.setState({selectedTab: 'Users'})}>

                    <NavigatorIOS
                        style={{
                            flex: 1
                        }}
                        ref="users"
                        initialRoute={{
                            component: Users,
                            title: 'Balance',
                            rightButtonTitle: 'New',
                            onRightButtonPress: () => {
                                this.refs.users.navigator.push({
                                    title: "New record",
                                    component: UserAdd
                                });
                            }
                        }}
                    />
                </TabBarIOS.Item>

{/*                <TabBarIOS.Item
                    title="Viewoo"
                    icon={require('../../../img/images.png')}
                    selected={this.state.selectedTab === 'Viewoo'}
                    onPress={() => this.setState({selectedTab: 'Viewoo'})}>

                    <NavigatorIOS
                        style={{
                            flex: 1
                        }}
                        initialRoute={{
                            component: Viewoo,
                            title: 'Viewoo',
                        }}
                    />
                </TabBarIOS.Item>*/}

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
