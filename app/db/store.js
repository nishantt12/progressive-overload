import AsyncStorage from '@react-native-async-storage/async-storage';

export async function updateWorkout(set, index, listIndex) {
    var currentWorkout = await AsyncStorage.getItem('currentWorkout')
    if (currentWorkout == null)
        currentWorkout = 0;

    const DATA = await loadWorkout();

    let newData = DATA;

    newData[currentWorkout].workouts[listIndex].set[index] = set;

    // console.log(JSON.stringify(set));

    // console.log(JSON.stringify(newData[listIndex].set[index]));

    // console.log("updateworkout");

    console.log(JSON.stringify(newData));

    try {
        await AsyncStorage.setItem('workout', JSON.stringify(newData));
    } catch (e) {
        // saving error
        console.log(e);
    }

}

export async function loadWorkout() {

    const value = await AsyncStorage.getItem('workout')
        .then(req => JSON.parse(req));
    console.log(value);

    if (value != null) {
        console.log("Values is not  null")
        return value;
    }
    else {
        console.log("Values is null")
        console.log(JSON.stringify(DATA))
        return DATA;
    }
}


export async function loadData() {
    var currentWorkout = await AsyncStorage.getItem('currentWorkout')
    if (currentWorkout == null)
        currentWorkout = 0;
    const value = await loadWorkout();
    return value[currentWorkout].workouts;
}


export const DATA = [
    {
        "title": "Biceps & Tricps",
        "index": 0,
        "workouts": [
            {
                "id": 0,
                key: "0",
                "title": "Plank",
                "set": [{
                    "key": "4",
                    "weight": 0,
                    "reps": 100
                },
                {
                    "key": "5",
                    "weight": 10,
                    "reps": 45
                },
                {
                    "key": "6",
                    "weight": 10,
                    "reps": 45
                }

                ]
            },
            {
                "id": 1,
                key: "1",
                "title": "Crunches",
                "set": [{
                    "key": "7",
                    "weight": 0,
                    "reps": 50
                },
                {
                    "key": "8",
                    "weight": 0,
                    "reps": 60
                },
                {
                    "key": "9",
                    "weight": 0,
                    "reps": 70
                }

                ]
            },
            {
                "id": 2,
                key: "2",
                "title": "Biceps Dumble curls",
                "set": [{
                    "weight": 12.5,
                    "reps": 15
                },
                {
                    "weight": 12.5,
                    "reps": 15
                },
                {
                    "weight": 15,
                    "reps": 12
                },
                {
                    "weight": 15,
                    "reps": 12
                }

                ]
            }
            ,
            {
                "id": 2,
                key: "2",
                "title": "Hammer Dumble curls",
                "set": [{
                    "weight": 12.5,
                    "reps": 15
                },
                {
                    "weight": 12.5,
                    "reps": 15
                },
                {
                    "weight": 15,
                    "reps": 12
                }

                ]
            }
            ,
            {
                "id": 2,
                key: "2",
                "title": "Peacher",
                "set": [{
                    "weight": 12.5,
                    "reps": 15
                },
                {
                    "weight": 12.5,
                    "reps": 15
                },
                {
                    "weight": 15,
                    "reps": 10
                }

                ]
            },
            {
                "id": 2,
                key: "2",
                "title": "Triceps push down",
                "set": [{
                    "weight": 50,
                    "reps": 25
                },
                {
                    "weight": 60,
                    "reps": 20
                },
                {
                    "weight": 70,
                    "reps": 15
                }

                ]
            },

            {
                "id": 2,
                key: "2",
                "title": "Triceps overhead",
                "set": [{
                    "weight": 50,
                    "reps": 25
                },
                {
                    "weight": 60,
                    "reps": 20
                },
                {
                    "weight": 70,
                    "reps": 15
                }

                ]
            },

            {
                "id": 2,
                key: "2",
                "title": "Dumbbell Overhead",
                "set": [{
                    "weight": 22.5,
                    "reps": 12
                },
                {
                    "weight": 25,
                    "reps": 10
                },
                {
                    "weight": 25,
                    "reps": 10
                }

                ]
            },

            {
                "id": 2,
                key: "2",
                "title": "Parallel bar dips",
                "set": [{
                    "weight": 0,
                    "reps": 15
                },
                {
                    "weight": 0,
                    "reps": 12
                },
                {
                    "weight": 0,
                    "reps": 12
                }

                ]
            }

        ]

    }



]


export const DATA2 = [
    {
        "id": 0,
        "title": "Plank",
        "set": [{
            "weight": 10,
            "reps": 100
        },
        {
            "weight": 10.5,
            "reps": 60
        },
        {
            "weight": 20,
            "reps": 45
        }

        ]
    },

]