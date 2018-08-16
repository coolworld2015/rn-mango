'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    BackHandler
} from 'react-native';

class TransactionDetails extends Component {
    constructor(props) {
        super(props);

        BackHandler.addEventListener('hardwareBackPress', () => {
            if (this.props.navigator) {
                this.props.navigator.pop();
            }
            return true;
        });

        this.state = {
            name: ''
        };

        if (props.data) {
            this.state = {
                id: props.data.id,
                first_name: props.data.to.first_name,
                last_name: props.data.to.last_name,
                username: props.data.to.username,
                email: props.data.to.email,
                amount: (+props.data.value).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 "),
                date: props.data.date.split('T')[0] + ' ' + props.data.date.split('T')[1].split('.')[0]
            };
        }
    }

    goBack() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
						<TouchableHighlight
							onPress={()=> this.goBack()}
							underlayColor='darkblue'
						>
                            <View>
                                <Text style={styles.textSmall}>
                                    Back
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableWithoutFeedback>
                            <View>
                                <Text style={styles.textLarge}>
                                    {this.state.first_name}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View>
                        <TouchableWithoutFeedback>
                            <View>
                                <Text style={styles.textSmall}>
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                <ScrollView>
                    <View style={styles.form}>
                        <View style={styles.itemBlock}>
                            <Text style={styles.itemTextBold}>
                                Amount:
                            </Text>
                            <View style={styles.itemWrap}>
                                <Text style={styles.itemText}>
                                    {this.state.amount}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.itemBlock}>
                            <Text style={styles.itemTextBold}>
                                Date:
                            </Text>
                            <View style={styles.itemWrap}>
                                <Text style={styles.itemText}>
                                    {this.state.date}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.itemBlock}>
                            <Text style={styles.itemTextBold}>
                                First name:
                            </Text>
                            <View style={styles.itemWrap}>
                                <Text style={styles.itemText}>
                                    {this.state.first_name}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.itemBlock}>
                            <Text style={styles.itemTextBold}>
                                Last name:
                            </Text>
                            <View style={styles.itemWrap}>
                                <Text style={styles.itemText}>
                                    {this.state.last_name}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.itemBlock}>
                            <Text style={styles.itemTextBold}>
                                Username:
                            </Text>
                            <View style={styles.itemWrap}>
                                <Text style={styles.itemText}>
                                    {this.state.username}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.itemBlock}>
                            <Text style={styles.itemTextBold}>
                                E-mail:
                            </Text>
                            <View style={styles.itemWrap}>
                                <Text style={styles.itemText}>
                                    {this.state.email}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.itemBlock}>
                            <Text style={styles.itemTextBold}>
                                ID:
                            </Text>
                            <View style={styles.itemWrap}>
                                <Text style={styles.itemText}>
                                    {this.state.id}
                                </Text>
                            </View>
                        </View>

                        <TouchableHighlight
                            onPress={() => this.goBack()}
                            style={styles.button}>
                            <View>
                                <Text style={styles.buttonText}>
                                    Back
                                </Text>
                            </View>
                        </TouchableHighlight>

                        <Text>{this.state.bugANDROID}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
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
        margin: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    textLarge: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop: 12,
        marginRight: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    form: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start',
        paddingBottom: 130,
        backgroundColor: 'white'
    },
    itemBlock: {
        flexDirection: 'row'
    },
    itemWrap: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    itemTextBold: {
        fontSize: 18,
        textAlign: 'left',
        margin: 5,
        fontWeight: 'bold',
        color: 'black'
    },
    itemText: {
        fontSize: 18,
        textAlign: 'left',
        margin: 5,
        marginLeft: 2,
        color: 'black'
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
    loader: {
        marginTop: 20
    },
    error: {
        color: 'red',
        paddingTop: 10,
        textAlign: 'center'
    }
});

export default TransactionDetails;
