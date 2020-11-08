import React from 'react';
import { View, Text} from 'react-native';

export default class Screen extends React.Component {
    constructor(props){
        super(props);

        this.state={
            item: props.route.params.item
        }
    }

    render() {
        return (
            <View>
                <Text>Merchant: {this.state.item.merchant.name}</Text>
                <Text>Date and Time: {this.state.item.timestamp}</Text>
                <Text>Amount: {this.state.item.currency} {this.state.item.amount}</Text>
                <Text>Purchase Method: {this.state.item.creditDebitIndicator} transaction - {this.state.item.pointOfSale}</Text>               
                <Text>Category: {this.state.item.merchant.category}</Text>
                <Text>Merchant Description: {this.state.item.merchant.description}</Text>
            </View>
        );
    }
}