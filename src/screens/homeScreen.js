import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { createAccount, genTransactions, fetchRecords } from '../API/CapitalOne';

export default class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: 0,
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    createAccount().then(res => {
                        this.setState({userId: res.Accounts[0].accountId});
                        console.log('got account: ' + res.Accounts[0].accountId)
                    })
                }}>
                    <Text>Create Account</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    genTransactions(this.state.userId).then(res => {
                        console.log('done');
                    })
                }}>
                    <Text>Make 25 Records</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {
                    fetchRecords(this.state.userId).then(res => {
                        console.log(res.Transactions);
                    })
                }}>
                    <Text>Get Records</Text>
                </TouchableOpacity>
            </View>
        );
    }
}