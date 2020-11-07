import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { createAccount, genTransactions, fetchRecords } from '../API/CapitalOne';
import { addRecords } from '../redux/action';
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
                    createAccount().then(acc => {
                        this.setState({ UID: acc.Accounts[0].accountId });
                        console.log('ok');
                        genTransactions(acc.Accounts[0].accountId).then(res => {
                            if (res.Transactions.length > 0)
                                this.setState({ sync: true });
                            else
                                this.setState({ sync: false });
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