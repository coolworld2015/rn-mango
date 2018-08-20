'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ListView,
    ScrollView,
    ActivityIndicator,
    TextInput,
    Image,
    Dimensions,
    RefreshControl,
    DrawerLayoutAndroid
} from 'react-native';

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

    onBack() {
        appConfig.drawer.closeDrawer();
    }

    componentDidMount() {
        appConfig.drawer = this.refs['DRAWER_REF']
    }

    onLogOut() {
        appConfig.onLogOut();
    }

    render() {
        let navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 25, textAlign: 'center', color: 'black'}}>
                    Menu
                </Text>

                <TouchableHighlight
                    onPress={() => this.onLogOut()}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Log out
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => this.onBack()}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Back
                    </Text>
                </TouchableHighlight>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                ref={'DRAWER_REF'}
                drawerWidth={200}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}
            >
                <ScrollableTabView
                    renderTabBar={() => <DefaultTabBar
                        activeTextColor='darkblue'
                        inactiveTextColor='darkblue'
                        underlineStyle={{backgroundColor: 'darkblue'}}
                        backgroundColor='white'/>}
                >
                    <BalanceTab tabLabel="Balance" />
                    <InputsTab tabLabel="Received"/>
                    <OutputsTab tabLabel="Send"/>
                    <ContactsTab tabLabel="Contacts"/>
                   {/* <Logout tabLabel="Quit"/>*/}
                </ScrollableTabView>
            </DrawerLayoutAndroid>
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
                return <Balance routes={this.routes} navigator={navigator} />;
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    iconForm: {
        flexDirection: 'row',
        //borderColor: 'lightgray',
        borderColor: 'darkblue',
        borderWidth: 3
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor: '#48BBEC',
        backgroundColor: 'darkblue',
        borderWidth: 0,
        borderColor: 'whitesmoke'
    },
    textSmall: {
        fontSize: 16,
        textAlign: 'center',
        margin: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    textLarge: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop: 12,
        paddingLeft: 20,
        marginLeft: -10,
        fontWeight: 'bold',
        color: 'white'
    },
    textInput: {
        height: 45,
        marginTop: 0,
        padding: 5,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'lightgray',
        borderRadius: 0
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderColor: '#D7D7D7',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    rowText: {
        backgroundColor: '#fff',
        color: 'black',
        fontWeight: 'bold'
    },
    countFooter: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        borderColor: '#D7D7D7',
        //backgroundColor: '#48BBEC',
        backgroundColor: 'darkblue',
        color: 'white',
        fontWeight: 'bold'
    },
    loader: {
        justifyContent: 'center',
        height: 100
    },
    error: {
        color: 'red',
        paddingTop: 10,
        textAlign: 'center'
    },
    button: {
        height: 50,
        //backgroundColor: '#48BBEC',
        backgroundColor: 'darkblue',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default AppContainer;
