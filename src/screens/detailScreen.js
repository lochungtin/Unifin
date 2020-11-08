import React from 'react';
import { View, Text } from 'react-native';
import { maxWidth, styles, white } from '../styles';

export default class Screen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.route.params.item
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={{ paddingVertical: 10, paddingHorizontal: 10, minWidth: maxWidth }}>
                    <Text style={{ color: white, height: 30, fontSize: 20 }}>Merchant: {this.state.item.merchant.name}</Text>
                    <View style={{ height: 40 }} />
                    <Text style={{ color: white, height: 30, fontSize: 15  }}>Date and Time: {this.state.item.timestamp}</Text>
                    <Text style={{ color: white, height: 30, fontSize: 15  }}>Amount: {this.state.item.currency} {this.state.item.amount}</Text>
                    <Text style={{ color: white, height: 30, fontSize: 15  }}>Purchase Method: {this.state.item.creditDebitIndicator} transaction - {this.state.item.pointOfSale}</Text>
                    <Text style={{ color: white, height: 30, fontSize: 15  }}>Category: {this.state.item.merchant.category}</Text>
                    <Text style={{ color: white, height: 40, fontSize: 15  }}>Merchant Description: {this.state.item.merchant.description}</Text>
                </View>
            </View>
        );
    }
}