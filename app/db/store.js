import AsyncStorage from '@react-native-async-storage/async-storage';

const DEFAULT_WORKOUT = "legs";

export async function updateWorkout(set, index, listIndex) {
  var currentWorkout = await AsyncStorage.getItem('currentWorkout')
  if (currentWorkout == null)
    currentWorkout = DEFAULT_WORKOUT;

  const DATA = await loadWorkout();

  let newData = DATA;

  newData[currentWorkout].workouts[listIndex].set[index] = set;

  console.log("new data");

  console.log(JSON.stringify(newData));

  try {
    await AsyncStorage.setItem('workout', JSON.stringify(newData));
  } catch (e) {
    // saving error
    console.log(e);
  }

}

export async function updateCurrentWorkout(currentWorkout) {

  try {
    await AsyncStorage.setItem('currentWorkout', currentWorkout);
  } catch (e) {
    // saving error
    console.log(e);
  }

}

export async function getWorkoutMap() {
  let totalWorkout = await loadWorkout();
  const filenames = Object.keys(totalWorkout);
  let makeItems = []
  filenames.forEach((item) => {
    let workout = totalWorkout[item]
    const makeItem = {
      "key": item,
      "value": workout.title
    }
    makeItems.push(makeItem)
  })

  // const newItems = Object.keys(totalWorkout).map(v => ({ [v]: { ...totalWorkout[v] } }));
  // console.log("newItems");
  // let makeItems = []
  // newItems.forEach((newItem) => {
  //   console.log(newItem)
  //   // makeItems.push({ "key": newItem.key, "value": newItem.value.title })
  // });
  // for(item of newItems){
  //     console.log(item)
  //     // makeItems.push({"key":item.key, "value": item.value.title})
  // }
  console.log(makeItems)
  return makeItems;
}

export async function loadWorkout() {

  const value = await AsyncStorage.getItem('workout')
    .then(req => JSON.parse(req));
  console.log(value);

  if (value != null) {
    console.log("Values is not  null")
    if (value[DEFAULT_WORKOUT] == null) {
      value[DEFAULT_WORKOUT] = WORKOUT_PLAN[DEFAULT_WORKOUT]
    }
    return value;
  }
  else {
    console.log("Values is null")
    console.log(JSON.stringify(WORKOUT_PLAN))
    return WORKOUT_PLAN;
  }
}


export async function loadData(key) {
  var currentWorkout = await AsyncStorage.getItem('currentWorkout')
  if (currentWorkout == null)
    currentWorkout = DEFAULT_WORKOUT;
  const value = await loadWorkout();
  return value[currentWorkout].workouts;
}



export const WORKOUT_PLAN = {
  "biceps-triceps": {
    "title": "Biceps & Triceps",
    "index": 0,
    "workouts": [
      {
        "id": 0,
        key: "0",
        "title": "Plank",
        "set": [
          {
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
        "set": [
          {
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
        "set": [
          {
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
      },
      {
        "id": 2,
        key: "2",
        "title": "Hammer Dumble curls",
        "set": [
          {
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
      },
      {
        "id": 2,
        key: "2",
        "title": "Peacher",
        "set": [
          {
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
        "set": [
          {
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
        "set": [
          {
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
        "set": [
          {
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
        "set": [
          {
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
  },





  "back-biceps": {
    "title": "Back & Biceps",
    "index": 0,
    "workouts": [
      {
        "id": 0,
        key: "0",
        "title": "Plank",
        "set": [
          {
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
        "id": 2,
        key: "2",
        "title": "Deadlift",
        "set": [
          {
            "weight": 75,
            "reps": 15
          },
          {
            "weight": 95,
            "reps": 10
          },
          {
            "weight": 115,
            "reps": 8
          },
          {
            "weight": 135,
            "reps": 6
          }
          ,
          {
            "weight": 155,
            "reps": 4
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Lat pull down",
        "set": [
          {
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
      },
      {
        "id": 2,
        key: "2",
        "title": "Barbell row",
        "set": [
          {
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
        "title": "Single arm row",
        "set": [
          {
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
        "title": "Biceps Dumble curls",
        "set": [
          {
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
        "title": "Hammer Dumble curls",
        "set": [
          {
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
      }
    ]
  },






  "legs": {
    "title": "Legs",
    "index": 0,
    "workouts": [
      {
        "id": 0,
        key: "0",
        "title": "Crunches",
        "set": [
          {
            "key": "4",
            "weight": 0,
            "reps": 50
          },
          {
            "key": "5",
            "weight": 0,
            "reps": 55
          },
          {
            "key": "6",
            "weight": 0,
            "reps": 60
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Squats",
        "set": [
          {
            "weight": 75,
            "reps": 12
          },
          {
            "weight": 85,
            "reps": 10
          },
          {
            "weight": 95,
            "reps": 6
          },
          {
            "weight": 105,
            "reps": 4
          }
          ,
          {
            "weight": 115,
            "reps": 1
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Leg press",
        "set": [
          {
            "weight": 200,
            "reps": 12
          },
          {
            "weight": 220,
            "reps": 10
          },
          {
            "weight": 240,
            "reps": 8
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Sumo squat",
        "set": [
          {
            "weight": 40,
            "reps": 12
          },
          {
            "weight": 40,
            "reps": 14
          },
          {
            "weight": 40,
            "reps": 16
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Leg extension",
        "set": [
          {
            "weight": 55,
            "reps": 12
          },
          {
            "weight": 60,
            "reps": 10
          },
          {
            "weight": 65,
            "reps": 8
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Ham string curls",
        "set": [
          {
            "weight": 55,
            "reps": 12
          },
          {
            "weight": 60,
            "reps": 10
          },
          {
            "weight": 65,
            "reps": 8
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Calf raise",
        "set": [
          {
            "weight": 0,
            "reps": 30
          },
          {
            "weight": 0,
            "reps": 32
          },
          {
            "weight": 0,
            "reps": 35
          }
        ]
      }
    ]
  }
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