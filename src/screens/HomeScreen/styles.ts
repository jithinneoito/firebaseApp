import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1 },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        margin: 20,
    },
    buttonWrap: {
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderRadius: 10
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'white'
    }


});

export { styles }