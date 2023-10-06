import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
    const restaurant = featured.restaurants[1];
    const navigation = useNavigation();
    return (
        <View className="bg-white flex-1">
            {/**BACK button */}
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                >
                    <Icon.ArrowLeft stroke="white" strokeWidth={3} />

                </TouchableOpacity>

                <View>
                    <Text className="font-bold text-center text-xl">
                        Your cart
                    </Text>
                    <Text className="text-gray-500 text-center">{restaurant.name}</Text>
                </View>
            </View>

            {/**delivery time */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center"
            >
                <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full" />
                <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text className="font-bold" style={{ color: themeColors.text }}>
                        Change
                    </Text>

                </TouchableOpacity>

            </View>

            {/**dishes */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 50 }}
                showsVerticalScrollIndicator={false}
                className="bg-white pt-5"
            >
                {
                    restaurant.dishes.map((dish, index) => {
                        return (
                            <View key={index}
                                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
                            >
                                <Text className="font-bold" style={{ color: themeColors.text }}>2 x</Text>
                                <Image className="h-14 w-14 rounded-full" source={dish.image} />
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                <Text className="text-base font-semibold">${dish.price}</Text>
                                <TouchableOpacity className="p-1 rounded-full" style={{ backgroundColor: themeColors.bgColor(1) }}>
                                    <Icon.Minus stroke="white" strokeWidth={2} height={20} width={20} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>


            {/**Totals to: */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className="p-6 px-8 rounded-t-3xl space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">$20</Text>

                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700">$2</Text>

                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Order Total</Text>
                    <Text className="text-gray-700">$22</Text>

                </View>

                <View>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('OrderPreparing')}
                    style={{ backgroundColor:themeColors.bgColor(1) }} className="p-3 rounded-full">
                        <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({})