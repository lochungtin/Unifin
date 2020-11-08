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
            console.log(r.timestamp);
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