import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';

import { createAccount, genTransactions, fetchRecords } from '../API/CapitalOne';
import RecordItem from '../Components/RecordItem';

export default class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: 0,
            data: [],
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
                        this.setState({data: res.Transactions});
                    })
                }}>
                    <Text>Get Records</Text>
                </TouchableOpacity>

                <SafeAreaView>
                    <FlatList 
                        data={this.state.data}
                        keyExtractor={item => item.transactionUUID}
                        renderItem={({item}) => <RecordItem item={item}/>}
                    />
                </SafeAreaView>
            </View>
        );
    }
}