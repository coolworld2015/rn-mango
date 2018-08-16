'use strict';

import React, {Component} from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import Balance from '../balance/balance';

import Contacts from '../contacts/contacts';
import ContactDetails from '../contacts/contactDetails';

import Inputs from '../inputs/transactions';
import InputDetails from '../inputs/transactionDetails';

import Outputs from '../outputs/transactions';
import OutputDetails from '../outputs/transactionDetails';
import SentTransfer from '../outputs/sentTransfer';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    onLogOut() {
        this.props.onLogOut();
    }

    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <DefaultTabBar
					activeTextColor='darkblue'
					inactiveTextColor='darkblue'
 					underlineStyle={{backgroundColor: 'darkblue'}}
					backgroundColor='white'/>}
            >
                <BalanceTab tabLabel="Balance"/>
                <InputsTab tabLabel="Received"/>
                <OutputsTab tabLabel="Send"/>
                <ContactsTab tabLabel="Contacts"/>
                <Logout tabLabel="Quit"/>
            </ScrollableTabView>
        );
    }
}

class InputsTab extends Component {
    constructor(props) {
        super(props);
        this.routes = [
            {title: 'Transactions', index: 0},
            {title: 'Transaction Details', index: 1},
            {title: 'Sent Transfer', index: 2}
        ];
    }

    renderScene(route, navigator) {
        switch (route.index) {
            case 0:
                return <Inputs routes={this.routes} navigator={navigator}/>;
                break;
            case 1:
                return <InputDetails data={route.data} routes={this.routes} navigator={navigator}/>;
                break;

        }
    }

    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={this.routes[0]}
                initialRouteStack={this.routes}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route, routeStack) =>
                    NavigationExperimental.Navigator.SceneConfigs.PushFromRight}
            />
        )
    }
}

class OutputsTab extends Component {
    constructor(props) {
        super(props);
        this.routes = [
            {title: 'Transactions', index: 0},
            {title: 'Transaction Details', index: 1},
            {title: 'Add Transaction', index: 2}
        ];
    }

    renderScene(route, navigator) {
        switch (route.index) {
            case 0:
                return <Outputs routes={this.routes} navigator={navigator}/>;
                break;
            case 1:
                return <OutputDetails data={route.data} routes={this.routes} navigator={navigator}/>;
                break;
            case 2:
                return <SentTransfer data={route.data} routes={this.routes} navigator={navigator}/>;
                break;
        }
    }

    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={this.routes[0]}
                initialRouteStack={this.routes}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route, routeStack) =>
                    NavigationExperimental.Navigator.SceneConfigs.PushFromRight}
            />
        )
    }
}

class Logout extends Component {
    constructor(props) {
        super(props);

        appConfig.onLogOut();
    }

    render() {
        return null;
    }
}

class ContactsTab extends Component {
    constructor(props) {
        super(props);
        this.routes = [
            {title: 'Contacts', index: 0},
            {title: 'Contact Details', index: 1}
        ];
    }

    renderScene(route, navigator) {
        switch (route.index) {
            case 0:
                return <Contacts routes={this.routes} navigator={navigator}/>;
                break;
            case 1:
                return <ContactDetails data={route.data} routes={this.routes} navigator={navigator}/>;
                break;
        }
    }

    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={this.routes[0]}
                initialRouteStack={this.routes}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route, routeStack) =>
                    NavigationExperimental.Navigator.SceneConfigs.PushFromRight}
            />
        )
    }
}

class BalanceTab extends Component {
    constructor(props) {
        super(props);
        this.routes = [
            {title: 'Balance', index: 0}
        ];
    }

    renderScene(route, navigator) {
        switch (route.index) {
            case 0:
                return <Balance routes={this.routes} navigator={navigator}/>;
                break;
        }
    }

    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={this.routes[0]}
                initialRouteStack={this.routes}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route, routeStack) =>
                    NavigationExperimental.Navigator.SceneConfigs.PushFromRight}
            />
        )
    }
}


export default AppContainer;
