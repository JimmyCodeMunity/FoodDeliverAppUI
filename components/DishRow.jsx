import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather'
import { Image } from 'react-native'
import { themeColors } from '../theme'

const DishRow = ({ item }) => {
    return (
        <View className="flex-row iteme-center rounded-3xl p-3 shadow-2xl mb-3 mx-2">
            <Image
                className="rounded-3xl"
                style={{ height: 100, width: 100 }}
                source={item.image}
            />
            <View className="flex flex-1 space-y-3">
                <View className="pl-3">
                    <Text className="text-xl">{item.name}</Text>
                    <Text className="text-gray-700">{item.description}</Text>
                </View>

                <View className="flex-row justify-between pl-3 items-center">
                    <Text className="text-gray-700 text-lg font-bold">
                        ${item.price}
                    </Text>
                    <View className="flex-row items-center">
                        <TouchableOpacity
                        className="p-1 rounded-full"
                        style={{ backgroundColor:themeColors.bgColor(1) }}
                        >
                            <Icon.Plus strokeWidth={2} color="white" width="20" height="20" />

                        </TouchableOpacity>

                        <Text className="px-3">
                            2
                        </Text>

                        <TouchableOpacity
                        className="p-1 rounded-full"
                        style={{ backgroundColor:themeColors.bgColor(1) }}
                        >
                            <Icon.Minus strokeWidth={2} color="white" width="20" height="20" />

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DishRow

const styles = StyleSheet.create({})