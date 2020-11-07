import { Dimensions, StyleSheet } from 'react-native';

export const maxHeight = Dimensions.get('screen').height;
export const maxWidth = Dimensions.get('screen').width;

export const black = '#0C0C0C';
export const white = '#FCFCFC';

const shade1 = '#E0E0E0';
const shade2 = '#ACACAC';

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
        backgroundColor: white,
        flex: 1,
        justifyContent: 'flex-start',
    },
});

export const recordItem = StyleSheet.create({
    item: {
        backgroundColor: shade1,
    }
});