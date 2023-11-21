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

const EXERCIESES = {
  "biceps": [
    "Plank",
    "Biceps Dumble curls",
    "Barbell Bicep Curl",
    "Dumbbell Bicep Curl",
    "Preacher Curl",
    "Hammer Curl",
    "Concentration Curl",
    "Cable Bicep Curl",
    "Incline Dumbbell Curl",
    "Reverse Curl",
    "Zottman Curl",
    "21s",
    "Spider Curl",
    "Drag Curl",
    "Single Arm Cable Curl",
    "EZ Bar Curl",
    "Cross Body Hammer Curl"
  ],

  "triceps": [
    "Tricep Dips",
    "Tricep Pushdown",
    "Close Grip Bench Press",
    "Skull Crushers",
    "Overhead Tricep Extension",
    "Tricep Kickbacks",
    "Diamond Push-Ups",
    "Rope Tricep Pushdown",
    "Bench Dips",
    "Tricep Rope Overhead Extension",
    "Seated Tricep Press",
    "One-Arm Dumbbell Tricep Extension",
    "Tricep T-Bar Pushdown",
    "Reverse Grip Tricep Pushdown",
    "Bodyweight Tricep Extension"
  ],

  "chest": [
    "Bench Press",
    "Push-Ups",
    "Dumbbell Flyes",
    "Incline Bench Press",
    "Chest Dips",
    "Decline Bench Press",
    "Chest Press Machine",
    "Pec Deck Machine",
    "Dumbbell Pullover",
    "Cable Crossover",
    "Incline Dumbbell Press",
    "Machine Chest Press",
    "Wide Grip Push-Ups",
    "Dumbbell Squeeze Press",
    "Landmine Press"
  ],

  "back": [
    "Deadlifts",
    "Bent Over Rows",
    "Pull-Ups",
    "Lat Pulldowns",
    "T-Bar Rows",
    "Single-Arm Dumbbell Rows",
    "Seated Cable Rows",
    "Face Pulls",
    "Hyperextensions",
    "Chin-Ups",
    "Close Grip Pulldowns",
    "Wide Grip Rows",
    "Pendlay Rows",
    "Inverted Rows",
    "Lat Pushdowns"
  ],

  "shoulder": [
    "Overhead Press (Military Press)",
    "Lateral Raises",
    "Front Raises",
    "Shrugs",
    "Face Pulls",
    "Arnold Press",
    "Upright Rows",
    "Reverse Flyes",
    "Lateral Dumbbell Raises",
    "Shoulder Press Machine",
    "Lying Lateral Raises",
    "Barbell Shrugs",
    "High Pulls",
    "Rotator Cuff Exercises",
    "Dumbbell Shoulder Scaption"
  ],

  "legs": [
    "Squats",
    "Lunges",
    "Leg Press",
    "Deadlifts",
    "Leg Curls",
    "Calf Raises",
    "Step-Ups",
    "Hack Squats",
    "Box Jumps",
    "Sumo Deadlifts",
    "Romanian Deadlifts",
    "Leg Extensions",
    "Walking Lunges",
    "Hamstring Curls",
    "Bulgarian Split Squats"
  ],

  "abs": [
    "Crunches",
    "Leg Raises",
    "Planks",
    "Russian Twists",
    "Bicycle Crunches",
    "Mountain Climbers",
    "Flutter Kicks",
    "Hanging Leg Raises",
    "Woodchoppers",
    "Reverse Crunches",
    "Side Planks",
    "Ab Rollouts",
    "V-Ups",
    "Oblique Crunches",
    "Seated Russian Twists"
  ],

  "forearms": [
    "Wrist Curls",
    "Reverse Wrist Curls",
    "Farmers Walk",
    "Plate Pinch",
    "Hammer Curls",
    "Reverse Grip Barbell Curl",
    "Behind-the-Back Wrist Curl",
    "Zottman Curl",
    "Grip Strengthener Exercises",
    "Dumbbell Wrist Twist",
    "Towel Grip Hang",
    "Thick Bar Training",
    "Finger Extensions with Rubber Band",
    "Wrist Roller",
    "Hand Gripper Exercises"
  ]


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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "id": 2,
        key: "2",
        "title": "Deadlift",
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
  },






  "shoulder": {
    "title": "Shoulder",
    "index": 0,
    "workouts": [
      {
        "id": 0,
        key: "0",
        "title": "Military Press",
        "isActive": true,
        "set": [
          {
            "key": "4",
            "weight": 30,
            "reps": 15
          },
          {
            "key": "5",
            "weight": 35,
            "reps": 12
          },
          {
            "key": "6",
            "weight": 40,
            "reps": 10
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Rear delt fly",
        "isActive": true,
        "set": [
          {
            "weight": 45,
            "reps": 15
          },
          {
            "weight": 50,
            "reps": 12
          },
          {
            "weight": 55,
            "reps": 10
          },
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Dumbbell front raise",
        "isActive": true,
        "set": [
          {
            "weight": 10,
            "reps": 15
          },
          {
            "weight": 12.5,
            "reps": 12
          },
          {
            "weight": 12.5,
            "reps": 12
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Side lateral raise",
        "isActive": true,
        "set": [
          {
            "weight": 7.5,
            "reps": 15
          },
          {
            "weight": 10,
            "reps": 12
          },
          {
            "weight": 10,
            "reps": 12
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Upright row",
        "isActive": true,
        "set": [
          {
            "weight": 40,
            "reps": 15
          },
          {
            "weight": 45,
            "reps": 12
          },
          {
            "weight": 50,
            "reps": 10
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Shrug",
        "isActive": true,
        "set": [
          {
            "weight": 25,
            "reps": 15
          },
          {
            "weight": 30,
            "reps": 12
          },
          {
            "weight": 35,
            "reps": 10
          }
        ]
      }
    ]
  },




  "chest-triceps": {
    "title": "Chest Triceps",
    "index": 0,
    "workouts": [
      {
        "id": 0,
        key: "0",
        "title": "Bench Press",
        "isActive": true,
        "set": [
          {
            "key": "4",
            "weight": 60,
            "reps": 15
          },
          {
            "key": "5",
            "weight": 65,
            "reps": 12
          },
          {
            "key": "6",
            "weight": 70,
            "reps": 10
          },
          {
            "key": "7",
            "weight": 75,
            "reps": 8
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Incline Bench Press",
        "isActive": true,
        "set": [
          {
            "weight": 50,
            "reps": 15
          },
          {
            "weight": 55,
            "reps": 12
          },
          {
            "weight": 60,
            "reps": 10
          },
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Fly",
        "isActive": true,
        "set": [
          {
            "weight": 50,
            "reps": 15
          },
          {
            "weight": 55,
            "reps": 12
          },
          {
            "weight": 60,
            "reps": 10
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Cable Iron Cross",
        "isActive": true,
        "set": [
          {
            "weight": 12.5,
            "reps": 15
          },
          {
            "weight": 15,
            "reps": 12
          },
          {
            "weight": 17.5,
            "reps": 10
          }
        ]
      },
      {
        "id": 2,
        key: "2",
        "title": "Dip",
        "isActive": true,
        "set": [
          {
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
  },








  "push-ups": {
    "title": "Push Ups",
    "index": 0,
    "workouts": [
      {
        "id": 0,
        key: "0",
        "title": "Push Ups",
        "isActive": true,
        "set": [
          {
            "key": "4",
            "weight": 0,
            "reps": 50
          },
          {
            "key": "5",
            "weight": 0,
            "reps": 45
          },
          {
            "key": "6",
            "weight": 0,
            "reps": 40
          }
        ]
      }
    ]
  },




  "abs": {
    "title": "Abs",
    "index": 0,
    "workouts": [
      {
        "id": 0,
        key: "0",
        "title": "Hanging Leg Raise",
        "isActive": true,
        "set": [
          {
            "key": "4",
            "weight": 0,
            "reps": 12
          },
          {
            "key": "5",
            "weight": 0,
            "reps": 10
          },
          {
            "key": "6",
            "weight": 0,
            "reps": 10
          }
        ]
      },

      {
        "id": 0,
        key: "0",
        "title": "Cable Crunch",
        "isActive": true,
        "set": [
          {
            "key": "4",
            "weight": 35,
            "reps": 20
          },
          {
            "key": "5",
            "weight": 37.5,
            "reps": 15
          },
          {
            "key": "6",
            "weight": 40,
            "reps": 12
          }
        ]
      },

      {
        "id": 0,
        key: "0",
        "title": "Weighted Crunches ",
        "isActive": true,
        "set": [
          {
            "key": "4",
            "weight": 30,
            "reps": 50
          },
          {
            "key": "5",
            "weight": 35,
            "reps": 40
          },
          {
            "key": "6",
            "weight": 40,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
        "isActive": true,
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
    "isActive": true,
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