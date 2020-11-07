import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { black, recordItem, styles } from '../styles';

export default class RecordItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expand: false,
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.setState({ expand: !this.state.expand });
            }}>
                <View style={{ ...styles.roundView, ...recordItem.item }}>
                    <View style={{ ...styles.columns, justifyContent: 'space-between' }}>
                        <View>
                            <Text>{this.props.item.merchant.name}</Text>
                            <Text>Amount: {this.props.item.amount}</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.props.nav.navigate('Detail', { item: this.props.item })}>
                            <Icon name='dots-horizontal' size={30} color={black} />
                        </TouchableOpacity>
                    </View>
                    {this.state.expand &&
                        <>
                            <Text></Text>
                            <Text>Category: {this.props.item.merchant.category}</Text>
                            <Text>Timestamp: {this.props.item.timestamp}</Text>
                        </>
                    }
                </View>
            </TouchableOpacity>
        );
    }
}