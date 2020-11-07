import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { maxWidth, styles } from '../styles';
import RecordItem from '../Components/RecordItem';

class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: 0,
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <SafeAreaView>
                    <FlatList
                        data={this.props.records}
                        keyExtractor={item => item.transactionUUID}
                        renderItem={({ item }) => <RecordItem item={item} nav={this.props.navigation}/>}
                        style={{ minWidth: maxWidth, paddingHorizontal: '5%' }}
                    />
                </SafeAreaView>
            </View>
        );
    }
}


const mapStateToProps = state => ({
    records: state.records
})

export default connect(mapStateToProps)(Screen);