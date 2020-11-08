/*
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Pie from 'react-native-pie'
import { connect } from 'react-redux';

import { maxWidth, styles } from '../styles';
import RecordItem from '../Components/RecordItem';

import { parseAll, parsePie } from '../API/Parser';

class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: 0,
        }
        for (const r of parseAll(props.records)) {
            console.log(r);
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.container}>
                    <View
                        style={{
                            paddingVertical: 15,
                            flexDirection: 'row',
                            width: 350,
                            justifyContent: 'space-between',
                        }}
                    >
                        <Pie
                            radius={80}
                            innerRadius={60}
                            sections={parsePie(this.props.records)}
                            dividerSize={10}
                            strokeCap={'butt'}
                        />
                    </View>
                </View>
            </View >
        );
    }
}


const mapStateToProps = state => ({
    records: state.records
})

export default connect(mapStateToProps)(Screen);
*/

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