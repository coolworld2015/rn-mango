'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
    ActivityIndicator,
    TextInput,
    Dimensions
} from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false,
            username: 'test',
            password: '111'
        }
    }

    onLogin() {
        if (this.state.username === undefined ||
            this.state.password === undefined) {
            this.setState({
                badCredentials: true
            });
            return;
        }

        this.setState({
            showProgress: true
        });

        fetch(window.appConfig.url + 'Contacts/login', {
            method: 'post',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.id) {
                    appConfig.access_token = responseData.id;
                    this.setState({
                        badCredentials: false
                    });

                    this.props.onLogin();

                } else {
                    this.setState({
                        badCredentials: true,
                        showProgress: false
                    });
                }
            })
            .catch(() => {
                this.setState({
                    badCredentials: true,
                    showProgress: false
                });
            })
    }

    render() {
        let errorCtrl;

        if (this.state.badCredentials) {
            errorCtrl = <Text style={styles.error}>
                That username and password combination did not work
            </Text>;
        }

        return (
            <ScrollView style={{backgroundColor: 'whitesmoke'}} keyboardShouldPersistTaps='always'>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.heading}>
                            Mangosoft-Demo
                        </Text>
                    </View>

                    <Image style={styles.logo}
                           source={require('../../../img/logo.png')}
                    />

                    <TextInput
                        onChangeText={(text) => this.setState({
                            username: text,
                            badCredentials: false
                        })}
                        value={this.state.username}
                        style={styles.loginInput}
                        placeholder="Login">
                    </TextInput>

                    <TextInput
                        onChangeText={(text) => this.setState({
                            password: text,
                            badCredentials: false
                        })}
                        value={this.state.password}
                        style={styles.loginInput}
                        placeholder="Password"
                        secureTextEntry={true}>
                    </TextInput>

                    <TouchableHighlight
                        onPress={() => this.onLogin()}
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            Log in
                        </Text>
                    </TouchableHighlight>

                    {errorCtrl}

                    <ActivityIndicator
                        animating={this.state.showProgress}
                        size="large"
                        color="darkblue"
                        style={styles.loader}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        padding: 10,
        alignItems: 'center',
        flex: 1
    },
    logo: {
        width: 330,
        height: 10,
        paddingTop: 140,
        borderRadius: 20,
        marginBottom: 10
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: -10
    },
    heading: {
        fontSize: 30,
        marginTop: 10,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    loginInput: {
        height: 50,
        width: Dimensions.get("window").width * .90,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 5,
        color: 'black',
        backgroundColor: 'white'
    },
    button: {
        height: 50,
        //backgroundColor: '#48BBEC',
        backgroundColor: 'darkblue',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 20,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    loader: {
        marginTop: 40
    },
    error: {
        color: 'red',
        paddingTop: 10,
        textAlign: 'center'
    }
});

export default Login;
