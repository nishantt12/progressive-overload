import AsyncStorage from '@react-native-async-storage/async-storage';

const DEFAULT_WORKOUT = "biceps-triceps";

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
      value[DEFAULT_WORKOUT] = WORKOUT_PLAN_NEW[DEFAULT_WORKOUT]
    }
    return value;
  }
  else {
    console.log("Values is null")
    console.log(JSON.stringify(WORKOUT_PLAN_NEW))
    return WORKOUT_PLAN_NEW;
  }
}


export async function loadData(key) {
  var currentWorkout = await AsyncStorage.getItem('currentWorkout')
  if (currentWorkout == null)
    currentWorkout = DEFAULT_WORKOUT;
  const value = await loadWorkout();
  return value[currentWorkout].workouts;
}

const SET_4 = [
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

const SET_3 = [
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

const EXERCIESES = {
  "biceps": {
    "biceps_dumbbell_curls": {
      "id": 1,
      "key": "1",
      "title": "Biceps Dumbbell Curls",
      "isActive": true,
      "set": SET_3
    },
    "dumbbell_bicep_curl": {
      "id": 2,
      "key": "2",
      "title": "Dumbbell Bicep Curl",
      "isActive": true,
      "set": SET_3
    },
    "preacher_curl": {
      "id": 3,
      "key": "3",
      "title": "Preacher Curl",
      "isActive": true,
      "set": SET_3
    },
    "hammer_curl": {
      "id": 4,
      "key": "4",
      "title": "Hammer Curl",
      "isActive": true,
      "set": SET_3
    },
    "concentration_curl": {
      "id": 5,
      "key": "5",
      "title": "Concentration Curl",
      "isActive": true,
      "set": SET_3
    },
    "cable_bicep_curl": {
      "id": 6,
      "key": "6",
      "title": "Cable Bicep Curl",
      "isActive": true,
      "set": SET_3
    },
    "incline_dumbbell_curl": {
      "id": 7,
      "key": "7",
      "title": "Incline Dumbbell Curl",
      "isActive": true,
      "set": SET_3
    },
    "reverse_curl": {
      "id": 8,
      "key": "8",
      "title": "Reverse Curl",
      "isActive": true,
      "set": SET_3
    },
    "zottman_curl": {
      "id": 9,
      "key": "9",
      "title": "Zottman Curl",
      "isActive": true,
      "set": SET_3
    },
    "21s": {
      "id": 10,
      "key": "10",
      "title": "21s",
      "isActive": true,
      "set": SET_3
    },
    "spider_curl": {
      "id": 11,
      "key": "11",
      "title": "Spider Curl",
      "isActive": true,
      "set": SET_3
    },
    "drag_curl": {
      "id": 12,
      "key": "12",
      "title": "Drag Curl",
      "isActive": true,
      "set": SET_3
    },
    "single_arm_cable_curl": {
      "id": 13,
      "key": "13",
      "title": "Single Arm Cable Curl",
      "isActive": true,
      "set": SET_3
    },
    "ez_bar_curl": {
      "id": 14,
      "key": "14",
      "title": "EZ Bar Curl",
      "isActive": true,
      "set": SET_3
    },
    "cross_body_hammer_curl": {
      "id": 15,
      "key": "15",
      "title": "Cross Body Hammer Curl",
      "isActive": true,
      "set": SET_3
    }


  },

  "triceps": {
    "tricep_dips": {
      "id": 1,
      "key": "1",
      "title": "Tricep Dips",
      "isActive": true,
      "set": SET_3
    },
    "tricep_pushdown": {
      "id": 2,
      "key": "2",
      "title": "Tricep Pushdown",
      "isActive": true,
      "set": SET_3
    },
    "close_grip_bench_press": {
      "id": 3,
      "key": "3",
      "title": "Close Grip Bench Press",
      "isActive": true,
      "set": SET_3
    },
    "skull_crushers": {
      "id": 4,
      "key": "4",
      "title": "Skull Crushers",
      "isActive": true,
      "set": SET_3
    },
    "overhead_tricep_extension": {
      "id": 5,
      "key": "5",
      "title": "Overhead Tricep Extension",
      "isActive": true,
      "set": SET_3
    },
    "tricep_kickbacks": {
      "id": 6,
      "key": "6",
      "title": "Tricep Kickbacks",
      "isActive": true,
      "set": SET_3
    },
    "diamond_push_ups": {
      "id": 7,
      "key": "7",
      "title": "Diamond Push-Ups",
      "isActive": true,
      "set": SET_3
    },
    "rope_tricep_pushdown": {
      "id": 8,
      "key": "8",
      "title": "Rope Tricep Pushdown",
      "isActive": true,
      "set": SET_3
    },
    "bench_dips": {
      "id": 9,
      "key": "9",
      "title": "Bench Dips",
      "isActive": true,
      "set": SET_3
    },
    "tricep_rope_overhead_extension": {
      "id": 10,
      "key": "10",
      "title": "Tricep Rope Overhead Extension",
      "isActive": true,
      "set": SET_3
    },
    "seated_tricep_press": {
      "id": 11,
      "key": "11",
      "title": "Seated Tricep Press",
      "isActive": true,
      "set": SET_3
    },
    "one_arm_dumbbell_tricep_extension": {
      "id": 12,
      "key": "12",
      "title": "One-Arm Dumbbell Tricep Extension",
      "isActive": true,
      "set": SET_3
    },
    "both_arm_dumbbell_tricep_extension": {
      "id": 12,
      "key": "12",
      "title": "Both-Arm Dumbbell Tricep Extension",
      "isActive": true,
      "set": SET_3
    },
    "tricep_t_bar_pushdown": {
      "id": 13,
      "key": "13",
      "title": "Tricep T-Bar Pushdown",
      "isActive": true,
      "set": SET_3
    },
    "reverse_grip_tricep_pushdown": {
      "id": 14,
      "key": "14",
      "title": "Reverse Grip Tricep Pushdown",
      "isActive": true,
      "set": SET_3
    },
    "bodyweight_tricep_extension": {
      "id": 15,
      "key": "15",
      "title": "Bodyweight Tricep Extension",
      "isActive": true,
      "set": SET_3
    }


  },

  "chest": {
    "bench_press": {
      "id": 1,
      "key": "1",
      "title": "Bench Press",
      "isActive": true,
      "set": SET_3
    },
    "push_ups": {
      "id": 2,
      "key": "2",
      "title": "Push-Ups",
      "isActive": true,
      "set": SET_3
    },
    "dumbbell_flyes": {
      "id": 3,
      "key": "3",
      "title": "Dumbbell Flyes",
      "isActive": true,
      "set": SET_3
    },
    "incline_bench_press": {
      "id": 4,
      "key": "4",
      "title": "Incline Bench Press",
      "isActive": true,
      "set": SET_3
    },
    "chest_dips": {
      "id": 5,
      "key": "5",
      "title": "Chest Dips",
      "isActive": true,
      "set": SET_3
    },
    "decline_bench_press": {
      "id": 6,
      "key": "6",
      "title": "Decline Bench Press",
      "isActive": true,
      "set": SET_3
    },
    "chest_press_machine": {
      "id": 7,
      "key": "7",
      "title": "Chest Press Machine",
      "isActive": true,
      "set": SET_3
    },
    "pec_deck_machine": {
      "id": 8,
      "key": "8",
      "title": "Pec Deck Machine",
      "isActive": true,
      "set": SET_3
    },
    "dumbbell_pullover": {
      "id": 9,
      "key": "9",
      "title": "Dumbbell Pullover",
      "isActive": true,
      "set": SET_3
    },
    "cable_crossover": {
      "id": 10,
      "key": "10",
      "title": "Cable Crossover",
      "isActive": true,
      "set": SET_3
    },
    "incline_dumbbell_press": {
      "id": 11,
      "key": "11",
      "title": "Incline Dumbbell Press",
      "isActive": true,
      "set": SET_3
    },
    "machine_chest_press": {
      "id": 12,
      "key": "12",
      "title": "Machine Chest Press",
      "isActive": true,
      "set": SET_3
    },
    "wide_grip_push_ups": {
      "id": 13,
      "key": "13",
      "title": "Wide Grip Push-Ups",
      "isActive": true,
      "set": SET_3
    },
    "dumbbell_squeeze_press": {
      "id": 14,
      "key": "14",
      "title": "Dumbbell Squeeze Press",
      "isActive": true,
      "set": SET_3
    },
    "landmine_press": {
      "id": 15,
      "key": "15",
      "title": "Landmine Press",
      "isActive": true,
      "set": SET_3
    }

  },

  "back": {
    deadlifts: {
      id: 1,
      key: "1",
      title: "Deadlifts",
      isActive: true,
      set: SET_3
    },
    bent_over_rows: {
      id: 2,
      key: "2",
      title: "Bent Over Rows",
      isActive: true,
      set: SET_3
    },
    pull_ups: {
      id: 3,
      key: "3",
      title: "Pull-Ups",
      isActive: true,
      set: SET_3
    },
    lat_pulldowns: {
      id: 4,
      key: "4",
      title: "Lat Pulldowns",
      isActive: true,
      set: SET_3
    },
    t_bar_rows: {
      id: 5,
      key: "5",
      title: "T-Bar Rows",
      isActive: true,
      set: SET_3
    },
    single_arm_dumbbell_rows: {
      id: 6,
      key: "6",
      title: "Single-Arm Dumbbell Rows",
      isActive: true,
      set: SET_3
    },
    seated_cable_rows: {
      id: 7,
      key: "7",
      title: "Seated Cable Rows",
      isActive: true,
      set: SET_3
    },
    face_pulls: {
      id: 8,
      key: "8",
      title: "Face Pulls",
      isActive: true,
      set: SET_3
    },
    hyperextensions: {
      id: 9,
      key: "9",
      title: "Hyperextensions",
      isActive: true,
      set: SET_3
    },
    chin_ups: {
      id: 10,
      key: "10",
      title: "Chin-Ups",
      isActive: true,
      set: SET_3
    },
    close_grip_pulldowns: {
      id: 11,
      key: "11",
      title: "Close Grip Pulldowns",
      isActive: true,
      set: SET_3
    },
    wide_grip_rows: {
      id: 12,
      key: "12",
      title: "Wide Grip Rows",
      isActive: true,
      set: SET_3
    },
    pendlay_rows: {
      id: 13,
      key: "13",
      title: "Pendlay Rows",
      isActive: true,
      set: SET_3
    },
    inverted_rows: {
      id: 14,
      key: "14",
      title: "Inverted Rows",
      isActive: true,
      set: SET_3
    },
    lat_pushdowns: {
      id: 15,
      key: "15",
      title: "Lat Pushdowns",
      isActive: true,
      set: SET_3
    }

  },

  "shoulder": {
    overhead_press_military_press: {
      "id": 1,
      "key": "1",
      "title": "Overhead Press (Military Press)",
      "isActive": true,
      "set": SET_3
    },
    rear_delt_fly_machine: {
      "id": 2,
      "key": "2",
      "title": "Rear Delt Fly Machine",
      "isActive": true,
      "set": SET_3
    },
    lateral_raises: {
      "id": 2,
      "key": "2",
      "title": "Lateral Raises",
      "isActive": true,
      "set": SET_3
    },
    front_raises: {
      "id": 3,
      "key": "3",
      "title": "Front Raises",
      "isActive": true,
      "set": SET_3
    },
    shrugs: {
      "id": 4,
      "key": "4",
      "title": "Shrugs",
      "isActive": true,
      "set": SET_3
    },
    face_pulls: {
      "id": 5,
      "key": "5",
      "title": "Face Pulls",
      "isActive": true,
      "set": SET_3
    },
    arnold_press: {
      "id": 6,
      "key": "6",
      "title": "Arnold Press",
      "isActive": true,
      "set": SET_3
    },
    upright_rows: {
      "id": 7,
      "key": "7",
      "title": "Upright Rows",
      "isActive": true,
      "set": SET_3
    },
    reverse_flyes: {
      "id": 8,
      "key": "8",
      "title": "Reverse Flyes",
      "isActive": true,
      "set": SET_3
    },
    lateral_dumbbell_raises: {
      "id": 9,
      "key": "9",
      "title": "Lateral Dumbbell Raises",
      "isActive": true,
      "set": SET_3
    },
    shoulder_press_machine: {
      "id": 10,
      "key": "10",
      "title": "Shoulder Press Machine",
      "isActive": true,
      "set": SET_3
    },
    lying_lateral_raises: {
      "id": 11,
      "key": "11",
      "title": "Lying Lateral Raises",
      "isActive": true,
      "set": SET_3
    },
    barbell_shrugs: {
      "id": 12,
      "key": "12",
      "title": "Barbell Shrugs",
      "isActive": true,
      "set": SET_3
    },
    high_pulls: {
      "id": 13,
      "key": "13",
      "title": "High Pulls",
      "isActive": true,
      "set": SET_3
    },
    rotator_cuff_exercises: {
      "id": 14,
      "key": "14",
      "title": "Rotator Cuff Exercises",
      "isActive": true,
      "set": SET_3
    },
    dumbbell_shoulder_scaption: {
      "id": 15,
      "key": "15",
      "title": "Dumbbell Shoulder Scaption",
      "isActive": true,
      "set": SET_3
    }

  },

  "legs": {

    squats: {
      "id": 1,
      "key": "1",
      "title": "Squats",
      "isActive": true,
      "set": SET_3
    },
    lunges: {
      "id": 2,
      "key": "2",
      "title": "Lunges",
      "isActive": true,
      "set": SET_3
    },
    leg_press: {
      "id": 3,
      "key": "3",
      "title": "Leg Press",
      "isActive": true,
      "set": SET_3
    },
    deadlifts: {
      "id": 4,
      "key": "4",
      "title": "Deadlifts",
      "isActive": true,
      "set": SET_3
    },
    leg_curls: {
      "id": 5,
      "key": "5",
      "title": "Leg Curls",
      "isActive": true,
      "set": SET_3
    },
    calf_raises: {
      "id": 6,
      "key": "6",
      "title": "Calf Raises",
      "isActive": true,
      "set": SET_3
    },
    step_ups: {
      "id": 7,
      "key": "7",
      "title": "Step-Ups",
      "isActive": true,
      "set": SET_3
    },
    hack_squats: {
      "id": 8,
      "key": "8",
      "title": "Hack Squats",
      "isActive": true,
      "set": SET_3
    },
    box_jumps: {
      "id": 9,
      "key": "9",
      "title": "Box Jumps",
      "isActive": true,
      "set": SET_3
    },
    sumo_deadlifts: {
      "id": 10,
      "key": "10",
      "title": "Sumo Deadlifts",
      "isActive": true,
      "set": SET_3
    },
    romanian_deadlifts: {
      "id": 11,
      "key": "11",
      "title": "Romanian Deadlifts",
      "isActive": true,
      "set": SET_3
    },
    leg_extensions: {
      "id": 12,
      "key": "12",
      "title": "Leg Extensions",
      "isActive": true,
      "set": SET_3
    },
    walking_lunges: {
      "id": 13,
      "key": "13",
      "title": "Walking Lunges",
      "isActive": true,
      "set": SET_3
    },
    hamstring_curls: {
      "id": 14,
      "key": "14",
      "title": "Hamstring Curls",
      "isActive": true,
      "set": SET_3
    },
    bulgarian_split_squats: {
      "id": 15,
      "key": "15",
      "title": "Bulgarian Split Squats",
      "isActive": true,
      "set": SET_3
    }

  },

  "abs": {

    crunches: {
      "id": 1,
      "key": "1",
      "title": "Crunches",
      "isActive": true,
      "set": SET_3
    },
    cable_crunches: {
      "id": 1,
      "key": "1",
      "title": "Cabel Crunches",
      "isActive": true,
      "set": SET_3
    },
    leg_raises: {
      "id": 2,
      "key": "2",
      "title": "Leg Raises",
      "isActive": true,
      "set": SET_3
    },
    planks: {
      "id": 3,
      "key": "3",
      "title": "Planks",
      "isActive": true,
      "set": SET_3
    },
    russian_twists: {
      "id": 4,
      "key": "4",
      "title": "Russian Twists",
      "isActive": true,
      "set": SET_3
    },
    bicycle_crunches: {
      "id": 5,
      "key": "5",
      "title": "Bicycle Crunches",
      "isActive": true,
      "set": SET_3
    },
    mountain_climbers: {
      "id": 6,
      "key": "6",
      "title": "Mountain Climbers",
      "isActive": true,
      "set": SET_3
    },
    flutter_kicks: {
      "id": 7,
      "key": "7",
      "title": "Flutter Kicks",
      "isActive": true,
      "set": SET_3
    },
    hanging_leg_raises: {
      "id": 8,
      "key": "8",
      "title": "Hanging Leg Raises",
      "isActive": true,
      "set": SET_3
    },
    woodchoppers: {
      "id": 9,
      "key": "9",
      "title": "Woodchoppers",
      "isActive": true,
      "set": SET_3
    },
    reverse_crunches: {
      "id": 10,
      "key": "10",
      "title": "Reverse Crunches",
      "isActive": true,
      "set": SET_3
    },
    side_planks: {
      "id": 11,
      "key": "11",
      "title": "Side Planks",
      "isActive": true,
      "set": SET_3
    },
    ab_rollouts: {
      "id": 12,
      "key": "12",
      "title": "Ab Rollouts",
      "isActive": true,
      "set": SET_3
    },
    v_ups: {
      "id": 13,
      "key": "13",
      "title": "V-Ups",
      "isActive": true,
      "set": SET_3
    },
    oblique_crunches: {
      "id": 14,
      "key": "14",
      "title": "Oblique Crunches",
      "isActive": true,
      "set": SET_3
    },
    seated_russian_twists: {
      "id": 15,
      "key": "15",
      "title": "Seated Russian Twists",
      "isActive": true,
      "set": SET_3
    }

  },

  "forearms": {
    "wrist_curls": {
      "id": 1,
      "key": "1",
      "title": "Wrist Curls",
      "isActive": true,
      "set": SET_3
    },
    "reverse_wrist_curls": {
      "id": 2,
      "key": "2",
      "title": "Reverse Wrist Curls",
      "isActive": true,
      "set": SET_3
    },
    "farmers_walk": {
      "id": 3,
      "key": "3",
      "title": "Farmers Walk",
      "isActive": true,
      "set": SET_3
    },
    "plate_pinch": {
      "id": 4,
      "key": "4",
      "title": "Plate Pinch",
      "isActive": true,
      "set": SET_3
    },
    "hammer_curls": {
      "id": 5,
      "key": "5",
      "title": "Hammer Curls",
      "isActive": true,
      "set": SET_3
    },
    "reverse_grip_barbell_curl": {
      "id": 6,
      "key": "6",
      "title": "Reverse Grip Barbell Curl",
      "isActive": true,
      "set": SET_3
    },
    "behind_the_back_wrist_curl": {
      "id": 7,
      "key": "7",
      "title": "Behind-the-Back Wrist Curl",
      "isActive": true,
      "set": SET_3
    },
    "zottman_curl": {
      "id": 8,
      "key": "8",
      "title": "Zottman Curl",
      "isActive": true,
      "set": SET_3
    },
    "grip_strengthener_exercises": {
      "id": 9,
      "key": "9",
      "title": "Grip Strengthener Exercises",
      "isActive": true,
      "set": SET_3
    },
    "dumbbell_wrist_twist": {
      "id": 10,
      "key": "10",
      "title": "Dumbbell Wrist Twist",
      "isActive": true,
      "set": SET_3
    },
    "towel_grip_hang": {
      "id": 11,
      "key": "11",
      "title": "Towel Grip Hang",
      "isActive": true,
      "set": SET_3
    },
    "thick_bar_training": {
      "id": 12,
      "key": "12",
      "title": "Thick Bar Training",
      "isActive": true,
      "set": SET_3
    },
    "finger_extensions_with_rubber_band": {
      "id": 13,
      "key": "13",
      "title": "Finger Extensions with Rubber Band",
      "isActive": true,
      "set": SET_3
    },
    "wrist_roller": {
      "id": 14,
      "key": "14",
      "title": "Wrist Roller",
      "isActive": true,
      "set": SET_3
    },
    "hand_gripper_exercises": {
      "id": 15,
      "key": "15",
      "title": "Hand Gripper Exercises",
      "isActive": true,
      "set": SET_3
    }

  }

}

export const WORKOUT_PLAN_NEW = {
  "biceps-triceps": {
    "title": "Biceps & Triceps",
    "index": 0,
    "workouts": [
      EXERCIESES.biceps.dumbbell_bicep_curl,
      EXERCIESES.biceps.hammer_curl,
      EXERCIESES.biceps.preacher_curl,
      EXERCIESES.triceps.tricep_pushdown,
      EXERCIESES.triceps.overhead_tricep_extension,
      EXERCIESES.triceps.both_arm_dumbbell_tricep_extension,
      EXERCIESES.triceps.tricep_dips,
    ]
  },

  "back-biceps": {
    "title": "Back & Biceps",
    "index": 0,
    "workouts": [
      EXERCIESES.back.deadlifts,
      EXERCIESES.back.lat_pulldowns,
      EXERCIESES.back.bent_over_rows,
      EXERCIESES.back.single_arm_dumbbell_rows,
      EXERCIESES.biceps.dumbbell_bicep_curl,
      EXERCIESES.biceps.hammer_curl,
    ]
  },

  "legs": {
    "title": "Legs",
    "index": 0,
    "workouts": [
      EXERCIESES.legs.squats,
      EXERCIESES.legs.leg_press,
      EXERCIESES.legs.sumo_deadlifts,
      EXERCIESES.legs.leg_extensions,
      EXERCIESES.legs.hamstring_curls,
      EXERCIESES.legs.calf_raises,
    ]
  },

  "shoulder": {
    "title": "Shoulder",
    "index": 0,
    "workouts": [
      EXERCIESES.shoulder.overhead_press_military_press,
      EXERCIESES.shoulder.rear_delt_fly_machine,
      EXERCIESES.shoulder.front_raises,
      EXERCIESES.shoulder.lateral_raises,
      EXERCIESES.shoulder.upright_rows,
      EXERCIESES.shoulder.shrugs,
    ]
  },

  "chest-triceps": {
    "title": "Chest Triceps",
    "index": 0,
    "workouts": [
      EXERCIESES.chest.bench_press,
      EXERCIESES.chest.incline_bench_press,
      EXERCIESES.chest.dumbbell_flyes,
      EXERCIESES.chest.cable_crossover,
      EXERCIESES.triceps.tricep_dips,
    ]
  },

  "push-ups": {
    "title": "Push Ups",
    "index": 0,
    "workouts": [
      EXERCIESES.chest.push_ups,
    ]
  },
  
  "abs": {
    "title": "Abs",
    "index": 0,
    "workouts": [
      EXERCIESES.abs.hanging_leg_raises,
      EXERCIESES.abs.crunches,
      EXERCIESES.abs.cable_crunches,
    ]
  }
}

export const WORKOUT_PLAN = {


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