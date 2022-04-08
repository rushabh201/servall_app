// Libraries which uses to build our component
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Divider, List, useTheme } from "react-native-paper";
import { colors } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome5';

// What we have display

const ChooseGarage = ({ navigation }) => {

    const colors = useTheme();

    return (
        <View style={styles.surfaceContainer}>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <List.Item
                        title='SHIV AUTOMOTIVE (A)'
                        description='Kaushal Naik'
                        right={()=> (<Icon name={'chevron-right'} size={14} style={{alignSelf:'center'}} color={colors.gray} />)}
                        onPress={() => navigation.navigate('DashboardStack', {screen: "Services"} )}
                    />
                    <Divider />
                    <List.Item
                        title='SHIV AUTOMOTIVE (B)'
                        description='Kaushal Naik'
                        right={()=> (<Icon name={'chevron-right'} size={14} style={{alignSelf:'center'}} color={colors.gray} />)}
                        onPress={() => navigation.navigate('DashboardStack', {screen: "Services"} )}
                    />
                    <Divider />
                    <List.Item
                        title='SHIV AUTOMOTIVE (C)'
                        description='Kaushal Naik'
                        right={()=> (<Icon name={'chevron-right'} size={14} style={{alignSelf:'center'}} color={colors.gray} />)}
                        onPress={() => navigation.navigate('DashboardStack', {screen: "Services"} )}
                    />
                    <Divider />
                    <List.Item
                        title='Adinath Associates'
                        description='Kaushal Naik'
                        right={()=> (<Icon name={'chevron-right'} size={14} style={{alignSelf:'center'}} color={colors.gray} />)}
                        onPress={() => navigation.navigate('DashboardStack', {screen: "Services"} )}
                    />
                    <Divider />
                    <List.Item
                        title='Natural Automotive'
                        description='Kaushal Naik'
                        right={()=> (<Icon name={'chevron-right'} size={14} style={{alignSelf:'center'}} color={colors.gray} />)}
                        onPress={() => navigation.navigate('DashboardStack', {screen: "Services"} )}
                    />
               
               </View>
            </ScrollView>
          
        </View>
    )
}

const styles = StyleSheet.create({
    surfaceContainer: {
        flex:1,
        flexDirection: 'column',
        padding:10
    },
    mainContainer: {
        backgroundColor: colors.white,
        padding: 10,
        elevation: 4,
    },
})

export default ChooseGarage;
