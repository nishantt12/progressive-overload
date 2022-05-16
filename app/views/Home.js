import React from 'react';

import { StyleSheet, FlatList, View, Text, Button, TouchableOpacity, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




import { loadData } from '../utils/data'

const { useState, useEffect } = React;
var DATA = []

export default function Home() {

    // re-render single component of list and make the flatlist fast

    const [myArray, setMyArray] = useState([])

    useEffect(() => {

        const getData  = async () =>{
            console.log("useEffect")
            const  DATA = await loadData()
            console.log("DATA");
            console.log(JSON.stringify(DATA));
            setMyArray(DATA);
        }
        
        getData()

    }, [])

    const plusWight = async (set, index, listIndex) => {
        var newData = myArray;
        newData[listIndex].set[index].weight += 2.5;
        try {
            await AsyncStorage.setItem('workout', JSON.stringify(newData));
        } catch (e) {
            // saving error
            console.log(e);
        }

        setMyArray([...newData]);
    }

    const minusWight = async (set, index, listIndex) => {
        var newData = myArray;
        newData[listIndex].set[index].weight -= 2.5;
        try {
            await AsyncStorage.setItem('workout', JSON.stringify(newData));
        } catch (e) {
            // saving error
            console.log(e);
        }

        setMyArray([...newData]);
    }

    const SET = ({ set, index, listIndex, key }) => {
        // const [mySet, setMySet] = useState(set)

        // const plusWight = (index, listIndex) => {
        //     console.log(mySet+"  ");
        //     console.log(JSON.stringify(mySet));
        //     let newSet = mySet
        //     newSet.weight += 2.5;

        //     setMySet(newSet);
        // }

        // const minusWight = (set, index, listIndex) => {
        //     set[index].weight -= 2.5;

        //     setMySet([...set]);
        // }

        return (
            // create seprate components for weight and reps with button and use flexbox
            <View style={styles.set}>
                <Text style={styles.set_count}>{index + 1}:</Text>
                <View>

                    <View style={styles.each_set}>
                        <Text style={styles.set_title}>Weight </Text>
                        <TouchableOpacity
                            onPress={() => minusWight(set, index, listIndex)}
                            style={styles.counter}>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.weight}>{set.weight}</Text>
                        <TouchableOpacity
                            onPress={() => plusWight(set, index, listIndex)}
                            style={styles.counter}>
                            <Text>+</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'white', justifyContent: 'center', alignContent: 'center' }}> Kgs</Text>
                    </View>

                    <View style={styles.each_set}>
                        <Text style={styles.set_title}>Reps </Text>
                        <TouchableOpacity
                            style={styles.counter}>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.weight}>{set.reps}</Text>
                        <TouchableOpacity
                            style={styles.counter}>
                            <Text>+</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'white', justifyContent: 'center', alignContent: 'center' }}> Reps</Text>
                    </View>

                </View>



            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={styles.set_title}>
                    Sets
                </Text>
                {item.set.map((set, setIndex) => <SET set={set} index={setIndex} listIndex={index} />)}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={myArray}
                renderItem={renderItem}

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
        backgroundColor: '#66ccff'
    },
    set_title: {
        width: 100,
        fontSize: 16,

        color: 'white',

    },
    counter: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'white',
    },
    set: {
        flexDirection: 'row',
        margin: 5,

    },
    each_set: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
        alignContent: 'center'

    },
    weight: {
        width: 50,
        fontSize: 16,

        color: 'white',
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    title: {
        fontSize: 30,

        color: 'white',

    },
    set_count: {
        fontSize: 16,

        color: 'white',
        margin: 5
    },
    container: {
        backgroundColor: 'white',
        flex: 1
    },

});
