import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Switch } from 'react-native';
import Pie from 'react-native-pie'
import { connect } from 'react-redux';

import { maxWidth, styles, black, white, accent, shade2 } from '../styles';
import RecordItem from '../Components/RecordItem';

import { getSectors, parsePie, getMonthly } from '../API/Parser';

class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: 0,
            pie: true,
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={{ flex: 1, height: '10%' }}>
                    <Text style={{ color: accent, fontSize: 35 }}>$ {getMonthly(this.props.records)}</Text>
                    <Text style={{ color: white, fontSize: 15 }}>Monthly Spendings</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row-reverse', minWidth: maxWidth, paddingRight: '10%', }}>
                    <View style={{ backgroundColor: white, height: '50%', flex: 1, justifyContent: 'center', maxWidth: '20%', borderBottomLeftRadius: 30, borderTopLeftRadius: 30 }}>
                        <Switch
                            value={this.state.pie}
                            thumbColor={accent}
                            trackColor={{ true: shade2, false: shade2 }}
                            onValueChange={value => this.setState({ pie: value })}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, minHeight: '70%' }}>
                    {this.state.pie &&
                        <SafeAreaView>
                            <Pie
                                radius={120}
                                innerRadius={90}
                                sections={parsePie(this.props.records)}
                                dividerSize={10}
                                strokeCap={'butt'}
                                backgroundColor={black}
                            />
                            <View style={{ flex: 1, paddingTop: 20 }}>
                                {getSectors(this.props.records).map(item => {
                                    return (
                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} key={item.category}>
                                            <View style={{ height: 10, width: 10, backgroundColor: item.color, borderRadius: 5 }} />
                                            <View style={{ flex: 1, paddingLeft: 70 }}>
                                                <Text style={{ color: white }}>{item.category}</Text>
                                            </View>
                                        </View>
                                    );
                                })}
                            </View>
                        </SafeAreaView>
                    }
                    {!this.state.pie &&
                        <SafeAreaView>
                            <FlatList
                                data={this.props.records}
                                keyExtractor={item => item.transactionUUID}
                                renderItem={({ item }) => <RecordItem item={item} nav={this.props.navigation} />}
                                style={{ minWidth: maxWidth, paddingHorizontal: '5%' }}
                            />
                        </SafeAreaView>
                    }
                </View>
            </View>
        );
    }
}


const mapStateToProps = state => ({
    records: state.records
})

export default connect(mapStateToProps)(Screen);