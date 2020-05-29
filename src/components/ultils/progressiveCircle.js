import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { View } from 'react-native'
export default function ProgressiveCircle(){
    return(
        <View>
        <ProgressCircle
        style={ { height: 30 } }
        progress={ 0.7 }
        progressColor={'rgb(134, 65, 244)'}
    />
        </View>

    );
}