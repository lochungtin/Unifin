import { Dimensions, StyleSheet } from 'react-native';

export const maxHeight = Dimensions.get('screen').height;
export const maxWidth = Dimensions.get('screen').width;

export const black = '#1C1C1C';
export const white = '#E0E0E0';

export const accent = '#9e36d1'

export const shade1 = '#E0E0E0';
export const shade2 = '#ACACAC';

export const styles = StyleSheet.create({
    centerText: {
        color: black,
        textAlign: 'center',
    },
    columns: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    roundView: {
        borderRadius: 40,
        paddingHorizontal: 40,
        paddingVertical: 10,
        margin: 10,
    },
    rows: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
    },
    screen: {
        alignItems: 'center',
        backgroundColor: black,
        flex: 1,
        justifyContent: 'flex-start',
        minWidth: maxWidth,
        paddingTop: '10%',
    },
});

export const recordItem = StyleSheet.create({
    item: {
        backgroundColor: shade1,
    }
});