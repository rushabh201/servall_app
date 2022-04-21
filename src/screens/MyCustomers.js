import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Linking, ActivityIndicator, FlatList } from "react-native";
import { connect } from 'react-redux';
import { List, Button, Divider, Searchbar } from "react-native-paper";
import { colors } from  "../constants";
import  { API_URL } from "../constants/config"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RBSheet from "react-native-raw-bottom-sheet";
 
const MyCustomer = ({navigation, userToken, garageId }) => {
    const [isLoading, setIsLoading] = useState(true);
    const refRBSheet = useRef();
    const [isGarageId, setGarageId] = useState(garageId);
    const [data, setData] = useState([]);
    const [customerId, setCustomerId] = useState('');
    const [searchQuery, setSearchQuery] = useState(""); 
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setSearchQuery("");
        setFilteredData([]);
        // setData([]);
        setData([]);
        getCustomerList();
    }, []);

    const getCustomerList = async () => {
        try {
            const res = await fetch(`${API_URL}fetch_my_garage_customers?garage_id=${isGarageId}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                },
            });
            const json = await res.json();
            if (json !== undefined) {
                // console.log(json);
                setFilteredData(json.user_list)
                setData(json.user_list);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const searchFilter = (text) => {
        if (text) {
            const newData = data.filter(
                function (listData) {
                const itemData = listData.name
                    ? listData.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
                }
            );
            setFilteredData(newData);
            setSearchQuery(text);
        } else {
            setFilteredData(data);
            setSearchQuery(text);
        }
    };

    //  useEffect(() => {
    //    console.log(customerId);
    // }, [customerId]);

    // useEffect(() => {
    //    console.log(garage_id);
    // }, [garage_id]);

    return (
        <View style={styles.surfaceContainer}>
            <Searchbar
                placeholder="Search here..."
                onChangeText={(text) => searchFilter(text)}
                value={searchQuery}
            />
            <View style={{flexDirection: "column", backgroundColor:colors.white, marginVertical:15, elevation: 2 }}>
                {isLoading ? <ActivityIndicator style={{marginVertical: 30}}></ActivityIndicator> :
                    <FlatList
                        ItemSeparatorComponent= {() => (<Divider />)}
                        data={filteredData}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <List.Item
                                title={
                                    <View style={{flexDirection:"column"}} >
                                        <View style={{flexDirection:"row", display:'flex', flexWrap: "wrap"}}>
                                            <Text style={{fontSize:16, color: colors.black}}>{item.name}</Text>
                                            <Text>   ({item.phone_number})</Text>
                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center", marginVertical:15, flex:1}}>
                                            <View style={{width:130}}>
                                                <Button
                                                    onPress={() => Linking.openURL(`https://wa.me/${item.phone_number}`) }
                                                    style={styles.buttonStyle}
                                                    color={colors.secondary}
                                                    icon={ (color) => <Icon name={'whatsapp'} size={24} color={colors.secondary}  /> }
                                                    uppercase={false} 
                                                ><Text style={{fontSize:12}}>Whatsapp</Text></Button>
                                            </View>
                                            <View style={{width:15}}></View>
                                            <View style={{width:100}}>
                                                <Button
                                                    onPress={() => Linking.openURL(`tel:${item.phone_number}`) }
                                                    style={styles.buttonStyle}
                                                    color={colors.secondary}
                                                    icon={ (color) => <Icon name={'phone'} size={24} color={colors.secondary}  /> }
                                                    uppercase={false} 
                                                ><Text style={{fontSize:12}}>Call</Text></Button>
                                            </View>
                                        </View>
                                    </View> 
                                }
                                right={() => <Icon onPress={() => { refRBSheet.current.open(); setCustomerId(''); setCustomerId(item.id); }}  type={"MaterialCommunityIcons"} style={{right: 5, top: 8,position: 'absolute',}} name={'dots-vertical'} size={18}  color={colors.gray} />}
                            />
                        )}
                        // keyExtractor={(item, index) => index.toString()}
                    />   
                }
            </View>
            <RBSheet
                ref={refRBSheet}
                height={190}
                openDuration={250}
                >
                <View style={{flexDirection:"column", flex:1}}>
                    <List.Item
                        title="View Customer Details"
                        style={{paddingVertical:15}}
                        onPress={() => { navigation.navigate("CustomerDetails", { userId: customerId });  refRBSheet.current.close(); }}
                        left={() => (<Icon type={"MaterialCommunityIcons"} name="eye" style={{marginHorizontal:10, alignSelf:"center"}} color={colors.black} size={26} />)}
                    />
                    <Divider />
                    <List.Item
                        title="Activity Log"
                        style={{paddingVertical:15}}
                        onPress={() =>  { navigation.navigate("MyCustomers");  refRBSheet.current.open(); }}
                        left={() => (<Icon type={"MaterialCommunityIcons"} name="clipboard-list-outline" style={{marginHorizontal:10, alignSelf:"center"}} color={colors.black} size={26} />)}
                    />
                    <Divider />
                    <List.Item
                        title="Add Note"
                        style={{paddingVertical:15}}
                        onPress={() => { navigation.navigate("MyCustomers");  refRBSheet.current.open(); }}
                        left={() => (<Icon type={"MaterialCommunityIcons"} name="notebook-plus-outline" style={{marginHorizontal:10, alignSelf:"center"}} color={colors.black} size={26} />)}
                    />
                </View>
            </RBSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    surfaceContainer: {
        flex:1,
        padding:15,
        marginBottom: 35
    },
    buttonStyle: {
        letterSpacing: 0,
        lineHeight:0,
        fontSize: 10,
        borderColor: colors.secondary,
        borderWidth: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

const mapStateToProps = state => ({
    userToken: state.user.userToken,
    // garage: state.garage,
    garageId: state.garage.garage_id,
})

export default connect(mapStateToProps)(MyCustomer);
