'use strict';

import React, {Component} from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import Balance from '../balance/balance';
import UserDetails from '../balance/userDetails';
import UserAdd from '../balance/userAdd';

import Customers from '../customers/customers';
import CustomerDetails from '../customers/customerDetails';

import Inputs from '../inputs/transactions';
import InputDetails from '../inputs/transactionDetails';

import Outputs from '../outputs/transactions';
import OutputDetails from '../outputs/transactionDetails';

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
                <InputsTab tabLabel="Incoming"/>
                <OutputsTab tabLabel="Send"/>
                <CustomersTab tabLabel="Customers"/>
                <Logout tabLabel="Logout"/>
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
            {title: 'Add Transaction', index: 2}
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
            case 2:
                return <UserAdd data={route.data} routes={this.routes} navigator={navigator}/>;
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
                return <UserAdd data={route.data} routes={this.routes} navigator={navigator}/>;
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

class CustomersTab extends Component {
    constructor(props) {
        super(props);
        this.routes = [
            {title: 'Customers', index: 0},
            {title: 'Customer Details', index: 1}
        ];
    }

    renderScene(route, navigator) {
        switch (route.index) {
            case 0:
                return <Customers routes={this.routes} navigator={navigator}/>;
                break;
            case 1:
                return <CustomerDetails data={route.data} routes={this.routes} navigator={navigator}/>;
                break;
            case 2:
                return <Search data={route.data} routes={this.routes} navigator={navigator}/>;
                break;
            case 3:
                return <SearchResults data={route.data} routes={this.routes} navigator={navigator}/>;
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
            {title: 'Balance', index: 0},
            {title: 'Users Details', index: 1},
            {title: 'Add User', index: 2}
        ];
    }

    renderScene(route, navigator) {
        switch (route.index) {
            case 0:
                return <Balance routes={this.routes} navigator={navigator}/>;
                break;
            case 1:
                return <UserDetails data={route.data} routes={this.routes} navigator={navigator}/>;
                break;
            case 2:
                return <UserAdd data={route.data} routes={this.routes} navigator={navigator}/>;
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
