'use strict';

import React, {Component} from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import Users from '../users/users';
import UserDetails from '../users/userDetails';
import UserAdd from '../users/userAdd';

import Phones from '../phones/phones';
import PhoneDetails from '../phones/phoneDetails';

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
                <PhonesTab tabLabel="Phones"/>
                <UsersTab tabLabel="Users"/>
                <Logout tabLabel="Logout"/>
            </ScrollableTabView>
        );
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

class PhonesTab extends Component {
    constructor(props) {
        super(props);
        this.routes = [
            {title: 'Phones', index: 0},
            {title: 'Phones Details', index: 1}
        ];
    }

    renderScene(route, navigator) {
        switch (route.index) {
            case 0:
                return <Phones routes={this.routes} navigator={navigator}/>;
                break;
            case 1:
                return <PhoneDetails data={route.data} routes={this.routes} navigator={navigator}/>;
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

class UsersTab extends Component {
    constructor(props) {
        super(props);
        this.routes = [
            {title: 'Users', index: 0},
            {title: 'Users Details', index: 1},
            {title: 'Add User', index: 2}
        ];
    }

    renderScene(route, navigator) {
        switch (route.index) {
            case 0:
                return <Users routes={this.routes} navigator={navigator}/>;
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
