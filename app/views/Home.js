import React from 'react';

import { StyleSheet, FlatList, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { set } from 'react-native-reanimated';

import { DATA } from '../utils/data'

const SET = ({ set, index }) => {
    return (
        // create seprate components for weight and reps with button and use flexbox
        <Text style={styles.title}>{index + 1}: Weight {set.weight},   Reps: {set.reps}</Text>
    )
}

const renderItem = ({ item }) => {

    return (
        <View style={styles.item}>
            <Text style={styles.title}>
                {item.title}
            </Text>
            <Text style={styles.title}>
                Sets
            </Text>
            {item.set.map((set, index) => <SET set={set} index={index} />)}
        </View>
    )
}


export default function Home() {

    console.log(JSON.stringify(DATA));

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>


    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 10,
        borderRadius: 5,

        backgroundColor: 'blue'

    },
    title: {
        fontSize: 16,
        textColor: 'white',
        color: 'white',
        margin: 3
    },
    container: {
        backgroundColor: 'white',
        flex: 1
    },

});
