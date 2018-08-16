'use strict';

import React, {Component} from 'react';
import {
    TabBarIOS,
    NavigatorIOS,
    Alert
} from 'react-native';

import Balance from '../balance/balance';
import Contacts from '../contacts/contacts';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'Balance'
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
                    selected={this.state.selectedTab === 'Balance'}
                    onPress={() => this.setState({selectedTab: 'Balance'})}>

                    <NavigatorIOS
                        style={{
                            flex: 1
                        }}
                        initialRoute={{
                            component: Balance,
                            title: 'Balance',
                            //rightButtonTitle: 'New'
                        }}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="Contacts"
                    icon={require('../../../img/users.png')}
                    selected={this.state.selectedTab === 'Contacts'}
                    onPress={() => this.setState({selectedTab: 'Contacts'})}>

                    <NavigatorIOS
                        style={{
                            flex: 1
                        }}
                        ref="contacts"
                        initialRoute={{
                            component: Contacts,
                            title: 'Contacts',
                            //rightButtonTitle: 'New',
                            onRightButtonPress: () => {
                                this.refs.customers.navigator.push({
                                    title: "New record",
                                    //component: UserAdd
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
