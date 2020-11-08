import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { createAccount, genTransactions, fetchRecords } from '../API/CapitalOne';
import { addRecords, clearRecords } from '../redux/action';
import { store } from '../redux/store';

class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            UID: 0,
            sync: false,
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    store.dispatch(clearRecords());
                    createAccount().then(acc => {
                        this.setState({ UID: acc.Accounts[0].accountId });
                        console.log(acc);
                        genTransactions(acc.Accounts[0].accountId).then(res => {
                            console.log(res);
                            if (res.Transactions.length > 0) {
                                this.setState({ sync: true });
                                console.log('succ');
                            }
                            else {
                                this.setState({ sync: false });
                                console.log('fail');
                            }
                        });
                    });
                }}>
                    <Text>Login</Text>
                </TouchableOpacity>

                {this.state.sync &&
                    <TouchableOpacity onPress={() => {
                        fetchRecords(this.state.UID).then(res => {
                            console.log(res.Transactions.length);
                            store.dispatch(addRecords(res.Transactions));
                            console.log(res.Transactions[0]);
                        })
                    }}>
                        <Text>Sync to local</Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Screen);