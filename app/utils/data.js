import AsyncStorage from '@react-native-async-storage/async-storage';


export async function loadData() {
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


export const DATA = [
    {
        "id": 0,
        key: "0",
        "title": "Plank",
        "set": [{
            "key": "4",
            "weight": 10,
            "reps": 100
        },
        {
            "key": "5",
            "weight": 10.5,
            "reps": 60
        },
        {
            "key": "6",
            "weight": 20,
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
            "reps": 50
        },
        {
            "key": "9",
            "weight": 0,
            "reps": 50
        }

        ]
    },
    {
        "id": 2,
        key: "2",
        "title": "Hanging Leg Raises",
        "set": [{
            "weight": 0,
            "reps": 15
        },
        {
            "weight": 0,
            "reps": 15
        },
        {
            "weight": 0,
            "reps": 15
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