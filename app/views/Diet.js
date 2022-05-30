import React, { useEffect } from 'react';

import { StyleSheet, FlatList, View, Text, Button, TouchableOpacity, StatusBar } from 'react-native';
import { set } from 'react-native-reanimated';

import { DATA, DATA2 } from '../utils/data'

const { useState } = React;
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/diet.action';




export default function Diet() {

    const dispatch = useDispatch()

    const products = useSelector((state) =>
        state.products
    );

    // const [count, setCount] = useState(0)

    // const plusWight = () => {
    //     let newCount = count + 1;
    //     setCount(newCount);
    // }

    // const minusWight = () => {
    //     let newCount = count - 1;
    //     setCount(newCount);
    // }


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    console.log("products: "+products.length);

    return (

        <View style={styles.each_set}>
            <Text style={styles.set_title}>Weight </Text>

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

        color: 'black',

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

        color: 'black',
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
