import Sound from "react-native-sound";

const cerebrin = new Sound("cerebrin.mp3", Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log("Failed to load the sound: ", err)
        return
    }
})

const click_hihat = new Sound('click_hihat1.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const levelStart = new Sound('levelStart.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const negative_kalimba1 = new Sound('negative_kalimba1.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const negative_kalimba2 = new Sound('negative_kalimba2.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const negative_wurlitzer1 = new Sound('negative_wurlitzer1.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const negative_wurlitzer2 = new Sound('negative_wurlitzer2.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const negative_wurlitzer3 = new Sound('negative_wurlitzer3.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const negative_wurlitzer4 = new Sound('negative_wurlitzer4.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const positive_glockArpeggio1 = new Sound('positive_glock-arpeggio1.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const positive_glockArpeggio2 = new Sound('positive_glock-arpeggio2.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const positive_glock1 = new Sound('positive_glock1.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const positive_glock2 = new Sound('positive_glock2.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const positive_horns = new Sound('positive_horns.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const positive_kalimba1 = new Sound('positive_kalimba1.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const positive_kalimba2 = new Sound('positive_kalimba2.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const positive_marktree1 = new Sound('positive_marktree1.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const positive_stringPluck1 = new Sound('positive_string-pluck1.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const positive_stringPluck2 = new Sound('positive_string-pluck2.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const positive_stringPluck3 = new Sound('positive_string-pluck3.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})

const woodblock = new Sound('woodblock.mp3', Sound.MAIN_BUNDLE, err => {
    if (err) {
        console.log('Failed to load the sound: ', err)
        return
    }
})
export const gameSounds = {
    cerebrin,
    click_hihat,
    levelStart,
    negative_kalimba1,
    negative_kalimba2,
    negative_wurlitzer1,
    negative_wurlitzer2,
    negative_wurlitzer3,
    negative_wurlitzer4,
    positive_glock1,
    positive_glock2,
    positive_glockArpeggio1,
    positive_glockArpeggio2,
    positive_horns,
    positive_kalimba1,
    positive_kalimba2,
    positive_marktree1,
    positive_stringPluck1,
    positive_stringPluck2,
    positive_stringPluck3,
    woodblock
}

export const gameSoundsArray = [
    { sound: cerebrin, name: "cerebrin" },
    { sound: click_hihat, name: "click_hihat" },
    { sound: levelStart, name: "levelStart" },
    { sound: negative_kalimba1, name: "negative_kalimba1" },
    { sound: negative_kalimba2, name: "negative_kalimba2" },
    { sound: negative_wurlitzer1, name: "negative_wurlitzer1" },
    { sound: negative_wurlitzer2, name: "negative_wurlitzer2" },
    { sound: negative_wurlitzer3, name: "negative_wurlitzer3" },
    { sound: negative_wurlitzer4, name: "negative_wurlitzer4" },
    { sound: positive_glock1, name: "positive_glock1" },
    { sound: positive_glock2, name: "positive_glock2" },
    { sound: positive_glockArpeggio1, name: "positive_glockArpeggio1" },
    { sound: positive_glockArpeggio2, name: "positive_glockArpeggio2" },
    { sound: positive_horns, name: "positive_horns" },
    { sound: positive_kalimba1, name: "positive_kalimba1" },
    { sound: positive_kalimba2, name: "positive_kalimba2" },
    { sound: positive_marktree1, name: "positive_marktree1" },
    { sound: positive_stringPluck1, name: "positive_stringPluck1" },
    { sound: positive_stringPluck2, name: "positive_stringPluck2" },
    { sound: positive_stringPluck3, name: "positive_stringPluck3" },
    { sound: woodblock, name: "woodblock" }
]