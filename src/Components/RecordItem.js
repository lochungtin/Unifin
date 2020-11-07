import React from 'react';
import { View, Text } from 'react-native';

export default class RecordItem extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.item.merchant.name}</Text>
                <Text>{this.props.item.amount}</Text>
            </View>
        );
    }
}