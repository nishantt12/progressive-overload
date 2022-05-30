import React from 'react';

import { StyleSheet, FlatList,Dimensions, View, Text, Button, TouchableOpacity, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);


import { loadData, updateWorkout } from '../db/store'

const { useState, useEffect } = React;
var DATA = []
var _carousel = React.createRef()


class SET extends React.Component {


    state = {
        set: {}
    }

    plusWight = (set, index, listIndex) => {
        let newSet = set
        newSet.weight += 2.5;
        updateWorkout(newSet, index, listIndex)

        this.setState({ set: set });
    }

    minusWight = (set, index, listIndex) => {
        let newSet = set
        if (newSet.weight > 2.5)
            newSet.weight -= 2.5;
        else
            newSet.weight = 0
        updateWorkout(newSet, index, listIndex)

        this.setState({ set: set });
    }

    plusReps = (set, index, listIndex) => {
        let newSet = set
        newSet.reps += 1;
        updateWorkout(newSet, index, listIndex)

        this.setState({ set: set });
    }

    minusReps = (set, index, listIndex) => {
        let newSet = set
        if (newSet.reps > 0) {
            newSet.reps -= 1;
        }


        updateWorkout(newSet, index, listIndex)

        this.setState({ set: set });
    }


    // plusWight = async (set, index, listIndex) => {
    //     var newData = myArray;
    //     newData[listIndex].set[index].weight += 2.5;
    //     try {
    //         await AsyncStorage.setItem('workout', JSON.stringify(newData));
    //     } catch (e) {
    //         // saving error
    //         console.log(e);
    //     }

    //     setMyArray([...newData]);
    // }

    // minusWight = async (set, index, listIndex) => {
    //     var newData = myArray;
    //     newData[listIndex].set[index].weight -= 2.5;
    //     try {
    //         await AsyncStorage.setItem('workout', JSON.stringify(newData));
    //     } catch (e) {
    //         // saving error
    //         console.log(e);
    //     }

    //     setMyArray([...newData]);
    // }


    render() {

        const { set, index, listIndex } = this.props;

        console.log("Set: " + set);

        return (<View style={styles.set}>
            <Text style={styles.set_count}>{index + 1}:</Text>
            <View>

                <View style={styles.each_set}>
                    <Text style={styles.set_title}>Weight </Text>
                    <TouchableOpacity
                        onPress={() => this.minusWight(set, index, listIndex)}
                        style={styles.counter}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.weight}>{set.weight}</Text>
                    <TouchableOpacity
                        onPress={() => this.plusWight(set, index, listIndex)}
                        style={styles.counter}>
                        <Text>+</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', justifyContent: 'center', alignContent: 'center' }}> Kgs</Text>
                </View>

                <View style={styles.each_set}>
                    <Text style={styles.set_title}>Reps </Text>
                    <TouchableOpacity
                        onPress={() => this.minusReps(set, index, listIndex)}
                        style={styles.counter}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.weight}>{set.reps}</Text>
                    <TouchableOpacity
                        onPress={() => this.plusReps(set, index, listIndex)}
                        style={styles.counter}>
                        <Text>+</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', justifyContent: 'center', alignContent: 'center' }}> Reps</Text>
                </View>

            </View>



        </View>
        )


    }


}

export default function Home() {

    // re-render single component of list and make the flatlist fast

    const [myArray, setMyArray] = useState([])

    useEffect(() => {

        const getData = async () => {
            console.log("useEffect")
            const DATA = await loadData()
            console.log("DATA");
            console.log(JSON.stringify(DATA));
            setMyArray(DATA);
        }

        getData()

    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
                 <Text style={styles.title}>
                    {item.title} : {index+1}
                </Text> 
                {/* <Text style={styles.set_title}>
                    Sets
                </Text> */}
                {item.set.map((set, setIndex) => <SET set={set} index={setIndex} listIndex={index} />)}
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <Text>{_carousel.currentIndex+1}/{myArray.length}</Text>
            <Carousel
              ref={(c) => { _carousel = c; }}
              sliderWidth={350}
              itemWidth={350}
              itemHeight={500}
              data={myArray}
              activeSlideAlignment="center"
              renderItem={renderItem}
              contentContainerCustomStyle={{ alignItems: 'center' }}
             
            />
            <Text>Hello</Text>
            {/* <FlatList
                data={myArray}
                renderItem={renderItem}

            /> */}
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
        fontSize: 25,

        color: 'white',

    },
    set_count: {
        fontSize: 16,

        color: 'white',
        margin: 5
    },
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

});
