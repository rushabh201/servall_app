import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Button, useTheme, Badge, Divider } from "react-native-paper";
import { colors } from "../constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const customerTopTabs = createMaterialTopTabNavigator();

const CustomerDetails = ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <View style={styles.surfaceContainer}>
            <View style={styles.upperContainer}>
                <View>
                    <Image type="MaterialCommunityIcons" resizeMode={"cover"} style={styles.imageContainer} source={{uri:'https://i.pravatar.cc/300'}} />
                </View>
                <View style={{flexDirection: "row", alignItems:"center",}}>
                    <Text style={styles.customerName}>Karankumar Bilimoria</Text>
                    <Icon onPress={() => navigation.navigate('CustomerInfo')} name={"pencil"} size={20} color={colors.gray} />
                </View>
                <View>
                    <Text style={styles.customerPhonenumber}>8200250077</Text>
                </View>
                <View style={{flexDirection:"row", marginTop: 15, flexWrap:"wrap", alignSelf:"center", justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={styles.smallButton}><Icon name={"phone"} size={20} color={colors.primary} /></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={styles.smallButton}><Icon name={"comment-multiple"} size={20} color={colors.primary} /></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={styles.smallButton}><Icon name={"whatsapp"} size={20} color={colors.primary} /></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={styles.smallButton}><Icon name={"bell"} size={20} color={colors.primary} /><Text style={{marginLeft:4, color:colors.primary}}>Reminders</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={styles.smallButton}><Text style={{color:colors.primary}}>Vehicles</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={[styles.smallButton, { marginTop:8}]}><Text style={{color:colors.primary}}>Appointments</Text></TouchableOpacity>
                </View>
                <View style={styles.cardContainer}>
                    <View style={{flexDirection: "column", alignItems:"center",justifyContent:"center", marginRight: 10}}>
                        <Text style={{color: colors.danger2, fontSize: 16}}>Outstanding</Text>
                        <Text style={{color: colors.danger2, fontSize: 16}}>₹ 0</Text>
                    </View>
                    <View style={{flexDirection: "column", alignItems:"center",justifyContent:"center"}}>
                        <Text style={{color: colors.green, fontSize: 16}}>Paid</Text>
                        <Text style={{color: colors.green, fontSize: 16}}>₹ 8,818</Text>
                    </View>
                </View>
            </View>

            <View style={styles.lowerContainer}>

                    <customerTopTabs.Navigator>
                        <customerTopTabs.Screen name="CustomerOrders" component={CustomerOrders}
                            options={{ 
                                title: () => ( 
                                    <View style={styles.haveBadge}>
                                        <Badge // bg="red.400"
                                            style={styles.badgeTag}  rounded="full" mb={-14} mr={-4} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
                                                fontSize: 12
                                            }}>
                                                4
                                        </Badge>
                                        <Text style={styles.badgeBtn}>
                                            Orders
                                        </Text>
                                    </View>
                                  ),
                            }}
                            />
                        <customerTopTabs.Screen name="CustomerNotifications" component={CustomerNotifications} 
                            options={{ 
                                title: () => ( 
                                    <View style={styles.haveBadge}>
                                        <Badge // bg="red.400"
                                            style={styles.badgeTag} rounded="full" mb={-14} mr={-4} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
                                                fontSize: 12
                                            }}>
                                                0
                                        </Badge>
                                        <Text style={styles.badgeBtn}>
                                            Notifications
                                        </Text>
                                    </View>
                                  ),
                                }} />
                    </customerTopTabs.Navigator>

            </View>
            
        </View>
    )
}

const CustomerNotifications = () => {
    return (
        <ScrollView style={styles.innerTabContainer}>
           <View style={styles.cards}>
               <View style={styles.cardTags} >
                    <Text style={styles.tags}>Running Repair</Text>
                    <Text style={styles.tags}>Running Repair</Text>
                    <Text style={styles.tags}>Running Repair</Text>
                </View>
                <View style={styles.cardOrderDetails}>
                    <Text style={styles.orderID}>Order ID: 11469</Text>
                    <Text style={styles.orderStatus}>Completed</Text>
                </View>
                <View>
                <Text style={styles.orderAmount}>Order Amount: ₹ 8,818</Text>
                <Divider />
                <Text style={styles.cardCustomerName}>Name: Karankumar Bilimoria</Text>
                <Divider />
                <Text style={styles.orderDate}>Order Date: 21 Sep 2021 10:02</Text>
                <Divider />
                <Text style={styles.kmNoted}>KM: 9311 KM</Text>
                </View>
                <View style={styles.cardActions}>
                    <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={[styles.smallButton, {width: 150, marginTop:8}]}><Text style={{color:colors.primary}}>View Details</Text></TouchableOpacity>
                </View>
           </View>

           <View style={styles.cards}>
               <View style={styles.cardTags} >
                    <Text style={styles.tags}>Running Repair</Text>
                    <Text style={styles.tags}>Running Repair</Text>
                    <Text style={styles.tags}>Running Repair</Text>
                </View>
                <View style={styles.cardOrderDetails}>
                    <Text style={styles.orderID}>Order ID: 11469</Text>
                    <Text style={styles.orderStatus}>Completed</Text>
                </View>
                <View>
                <Text style={styles.orderAmount}>Order Amount: ₹ 8,818</Text>
                <Divider />
                <Text style={styles.cardCustomerName}>Name: Karankumar Bilimoria</Text>
                <Divider />
                <Text style={styles.orderDate}>Order Date: 21 Sep 2021 10:02</Text>
                <Divider />
                <Text style={styles.kmNoted}>KM: 9311 KM</Text>
                </View>
                <View style={styles.cardActions}>
                    <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={[styles.smallButton, {width: 150, marginTop:8}]}><Text style={{color:colors.primary}}>View Details</Text></TouchableOpacity>
                </View>
           </View>

           <View style={styles.cards}>
               <View style={styles.cardTags} >
                    <Text style={styles.tags}>Running Repair</Text>
                    <Text style={styles.tags}>Running Repair</Text>
                    <Text style={styles.tags}>Running Repair</Text>
                </View>
                <View style={styles.cardOrderDetails}>
                    <Text style={styles.orderID}>Order ID: 11469</Text>
                    <Text style={styles.orderStatus}>Completed</Text>
                </View>
                <View>
                <Text style={styles.orderAmount}>Order Amount: ₹ 8,818</Text>
                <Divider />
                <Text style={styles.cardCustomerName}>Name: Karankumar Bilimoria</Text>
                <Divider />
                <Text style={styles.orderDate}>Order Date: 21 Sep 2021 10:02</Text>
                <Divider />
                <Text style={styles.kmNoted}>KM: 9311 KM</Text>
                </View>
                <View style={styles.cardActions}>
                    <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={[styles.smallButton, {width: 150, marginTop:8}]}><Text style={{color:colors.primary}}>View Details</Text></TouchableOpacity>
                </View>
           </View>
        </ScrollView>
    )
}

const CustomerOrders = () => {
    return (
        <ScrollView style={styles.innerTabContainer}>
        <View style={styles.cards}>
            <View style={styles.cardTags} >
                 <Text style={styles.tags}>Running Repair</Text>
                 <Text style={styles.tags}>Running Repair</Text>
                 <Text style={styles.tags}>Running Repair</Text>
             </View>
             <View style={styles.cardOrderDetails}>
                 <Text style={styles.orderID}>Order ID: 11469</Text>
                 <Text style={styles.orderStatus}>Completed</Text>
             </View>
             <View>
             <Text style={styles.orderAmount}>Order Amount: ₹ 8,818</Text>
             <Divider />
             <Text style={styles.cardCustomerName}>Name: Karankumar Bilimoria</Text>
             <Divider />
             <Text style={styles.orderDate}>Order Date: 21 Sep 2021 10:02</Text>
             <Divider />
             <Text style={styles.kmNoted}>KM: 9311 KM</Text>
             </View>
             <View style={styles.cardActions}>
                 <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={[styles.smallButton, {width: 150, marginTop:8}]}><Text style={{color:colors.primary}}>View Details</Text></TouchableOpacity>
             </View>
        </View>

        <View style={styles.cards}>
            <View style={styles.cardTags} >
                 <Text style={styles.tags}>Running Repair</Text>
                 <Text style={styles.tags}>Running Repair</Text>
                 <Text style={styles.tags}>Running Repair</Text>
             </View>
             <View style={styles.cardOrderDetails}>
                 <Text style={styles.orderID}>Order ID: 11469</Text>
                 <Text style={styles.orderStatus}>Completed</Text>
             </View>
             <View>
             <Text style={styles.orderAmount}>Order Amount: ₹ 8,818</Text>
             <Divider />
             <Text style={styles.cardCustomerName}>Name: Karankumar Bilimoria</Text>
             <Divider />
             <Text style={styles.orderDate}>Order Date: 21 Sep 2021 10:02</Text>
             <Divider />
             <Text style={styles.kmNoted}>KM: 9311 KM</Text>
             </View>
             <View style={styles.cardActions}>
                 <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={[styles.smallButton, {width: 150, marginTop:8}]}><Text style={{color:colors.primary}}>View Details</Text></TouchableOpacity>
             </View>
        </View>

        <View style={styles.cards}>
            <View style={styles.cardTags} >
                 <Text style={styles.tags}>Running Repair</Text>
                 <Text style={styles.tags}>Running Repair</Text>
                 <Text style={styles.tags}>Running Repair</Text>
             </View>
             <View style={styles.cardOrderDetails}>
                 <Text style={styles.orderID}>Order ID: 11469</Text>
                 <Text style={styles.orderStatus}>Completed</Text>
             </View>
             <View>
             <Text style={styles.orderAmount}>Order Amount: ₹ 8,818</Text>
             <Divider />
             <Text style={styles.cardCustomerName}>Name: Karankumar Bilimoria</Text>
             <Divider />
             <Text style={styles.orderDate}>Order Date: 21 Sep 2021 10:02</Text>
             <Divider />
             <Text style={styles.kmNoted}>KM: 9311 KM</Text>
             </View>
             <View style={styles.cardActions}>
                 <TouchableOpacity onPress={()=>{console.log("Pressed Me!")}} style={[styles.smallButton, {width: 150, marginTop:8}]}><Text style={{color:colors.primary}}>View Details</Text></TouchableOpacity>
             </View>
        </View>
     </ScrollView>
    )
}

const styles = StyleSheet.create({
    surfaceContainer: {
        flexDirection: "column",
        // padding: 10,
        flex: 1,
    },
    upperContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
         padding: 10,
    },
    lowerContainer: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
    },
    imageContainer: {
        width: 80,
        height: 80,
        borderRadius: 500,
        resizeMode: 'contain',    
        marginBottom: 10
    },
    customerName: {
        fontSize: 18,
        color: colors.black,
        marginRight: 10,
    },
    customerPhonenumber: {
        color: colors.black,
        marginTop: 5,
        fontSize: 16,
    },
    smallButton: {
        fontSize: 16,
        color: colors.primary,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: colors.primary,
        padding: 3,
        marginHorizontal: 4
    },
    cardContainer: {
        flexDirection: "row", 
        alignItems:"center", 
        elevation: 3, 
        backgroundColor: colors.white,
        padding: 8,
        margin: 10,
        justifyContent:"space-around",
        width: "70%",
    },
    badgeValue: {
        top: 5,
        right: 0,
        left: 0,
        bottom: 0,
    },
    haveBadge: {
        position: "relative",
        color: colors.black
    },
    badgeTag: {
        top: -5,
        right: -10,
        position: "absolute",
    },
    badgeBtn: {
        // paddingTop: 8,
        fontSize: 16,
        // paddingTop: 10,
        left: -15,
        color: colors.black
    },
    innerTabContainer: {
        padding:10,
        marginBottom: 10
    },
    cards: {
        padding: 25,
        elevation: 3,
        backgroundColor: colors.white,
        marginBottom: 10,
    },
    cardTags: {
        flexDirection: "row",
    },
    tags: {
        fontSize: 12,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: colors.black,
        color: colors.black,
        marginRight: 3,
    },
    cardOrderDetails: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 7,
    },
    orderStatus: {
        fontSize: 16,
        backgroundColor: colors.secondary,
        paddingVertical: 3,
        paddingHorizontal: 7,
        color: colors.white,
        marginHorizontal: 10,
    },
    orderID: {
        color: colors.black,
        borderColor: colors.black,
        borderWidth: 1,
        paddingVertical: 3,
        paddingHorizontal: 7,
    },
    orderAmount: {
        color: colors.black,
        fontSize: 16,
        paddingVertical: 4        
    },
    cardCustomerName: {
        color: colors.black,
        fontSize: 16,
        paddingVertical: 4      
    },
    orderDate: {
        color: colors.black,
        paddingVertical: 4,
        fontSize: 16,
    },
    kmNoted: {
        color: colors.black,
        paddingVertical: 4,
        fontSize: 16,   
    },
    // cardActions: {
    //     flex: 1
    // }
})

export default  CustomerDetails;