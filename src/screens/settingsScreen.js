import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { createAccount, genTransactions, fetchRecords } from '../API/CapitalOne';
import { addRecords, clearRecords } from '../redux/action';
import { store } from '../redux/store';
import { styles, white, accent } from '../styles';

class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            UID: '',
            sync: false,
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={{ height: '15%' }} />
                <Text style={{ color: white, fontSize: 20 }}>Account ID: {this.state.UID}</Text>
                <Text style={{ color: white, fontSize: 20 }}>Ready to Sync: {this.state.sync ? 'OK' : 'Not Ready'}</Text>
                <View style={{ height: '50%' }} />
                <TouchableOpacity
                    onPress={() => {
                        store.dispatch(clearRecords());
                        createAccount().then(acc => {
                            this.setState({ UID: acc.Accounts[0].accountId });
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
                    }}
                    style={{ ...styles.roundView, backgroundColor: white, width: '50%', alignItems: 'center' }}
                >
                    <Text>Login</Text>
                </TouchableOpacity>

                {this.state.sync &&
                    <TouchableOpacity
                        onPress={() => {
                            fetchRecords(this.state.UID).then(res => {
                                console.log(res.Transactions.length);
                                store.dispatch(addRecords(res.Transactions));
                            })
                        }}
                        style={{ ...styles.roundView, backgroundColor: accent, width: '50%', alignItems: 'center' }}
                    >
                        <Text style={{ color: white }}>Sync to local</Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Screen);