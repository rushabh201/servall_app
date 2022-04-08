import React, { useState, useRef, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Linking, ActivityIndicator, FlatList } from "react-native";
import { List, Button, Divider, Searchbar } from "react-native-paper";
import { colors } from  "../constants";
import  { API_URL } from "../constants/config"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RBSheet from "react-native-raw-bottom-sheet";
 

const MyCustomer = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const refRBSheet = useRef();
    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = query => setSearchQuery(query);
    const [isGarageId, setGarageId] = useState('2');
 
    const getCustomerList = () => {
        // setLoading(false);
        return fetch(`${API_URL}fetch_my_garage_customers?garage_id=${isGarageId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // data: {
            //     garage_id: '2',
            // }
          })
        //   .then(setLoading(false))
        // .then(() =>  setLoading(false))
        // .then(response => console.log(response))
          .then((response) => response.json())
        //   .then((responseJson) => {
        //     return responseJson.data;
        //     })
          .then((data)  => {
            // console.log(data.user_list);
            setData(data);
            setLoading(false);
            // this.setData({users: result, setLoading: false})
          })
          .catch((error) => {
            console.error(error);
          });
      };

    useEffect(() => {
        getCustomerList();
    }, []);

  
    // const getMovies = async () => {
    //     try {
    //      const response = await fetch('https://reactnative.dev/movies.json');
    //      const json = await response.json();
    //      setData(json.);
    //    } catch (error) {
    //      console.error(error);
    //    } finally {
    //      setLoading(false);
    //    }
    //  }

    // render(); {
        return (
            <View style={styles.surfaceContainer}>
             
                {/* <ScrollView> */}
                    <Searchbar
                        placeholder="Search here..."
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                    {isLoading ? <ActivityIndicator></ActivityIndicator> :
                        <View style={{flexDirection: "column", backgroundColor:colors.white, marginVertical:15 }}>
                            <FlatList
                            //  ItemSeparatorComponent= {() => (<Divider />)}
                                data={data.user_list}
                                keyExtractor={item => item.id}
                                
                            // keyExtractor={(item, index) => index.toString()}
                                // data={[{ title: 'title', key: 'item1' }]}
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
                                    right={()=> (<Icon onPress={() => refRBSheet.current.open()}  type={"MaterialCommunityIcons"} style={{right: 5, top: 8,position: 'absolute',}} name={'dots-vertical'} size={18}  color={colors.gray} />)}
                                />
                                    
                                )}
                                // keyExtractor={(item, index) => index.toString()}

                            /> 
                            
                            {/* <List.Item
                                style={{position: 'relative'}}
                                title={
                                    <View>
                                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center",}}>
                                            <Text style={{fontSize:16, color: colors.black}}>Karankumar Bilimoriya</Text>
                                            <Text> (8200250077)</Text>
                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center", marginVertical:15, flex:1}}>
                                            <View style={{flex:1}}>
                                                <Button
                                                    onPress={() => Linking.openURL("https://wa.me/07990433775") }
                                                    style={styles.buttonStyle}
                                                    color={colors.secondary}
                                                    icon={ (color) => <Icon name={'whatsapp'} size={24} color={colors.secondary}  /> }
                                                    uppercase={false} 
                                                ><Text style={{fontSize:12}}>Whatsapp</Text></Button>
                                            </View>
                                            <View style={{flex:3}}></View>
                                            <View style={{flex:1}}>
                                                <Button
                                                    onPress={() => Linking.openURL("tel:7990433775") }
                                                    style={styles.buttonStyle}
                                                    color={colors.secondary}
                                                    icon={ (color) => <Icon name={'phone'} size={24} color={colors.secondary}  /> }
                                                    uppercase={false} 
                                                ><Text style={{fontSize:12}}>Call</Text></Button>
                                            </View>
                                        </View>
                                    </View>
                                }
                                right={()=> (<Icon onPress={() => refRBSheet.current.open()} type={"MaterialCommunityIcons"} style={{right: 5, top: 8,position: 'absolute',}} name={'dots-vertical'} size={18}  color={colors.gray} />)}
                            />
                                <Divider />
                                
                            <List.Item
                                style={{position: 'relative'}}
                                title={
                                    <View>
                                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center",}}>
                                            <Text style={{fontSize:16, color: colors.black}}>Karankumar Bilimoriya</Text>
                                            <Text> (8200250077)</Text>
                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center", marginVertical:15, flex:1}}>
                                            <View style={{flex:1}}>
                                                <Button
                                                    onPress={() => Linking.openURL("https://wa.me/07990433775") }
                                                    style={styles.buttonStyle}
                                                    color={colors.secondary}
                                                    icon={ (color) => <Icon name={'whatsapp'} size={24} color={colors.secondary}  /> }
                                                    uppercase={false} 
                                                ><Text style={{fontSize:12}}>Whatsapp</Text></Button>
                                            </View>
                                            <View style={{flex:3}}></View>
                                            <View style={{flex:1}}>
                                                <Button
                                                    onPress={() => Linking.openURL("tel:7990433775") }
                                                    style={styles.buttonStyle}
                                                    color={colors.secondary}
                                                    icon={ (color) => <Icon name={'phone'} size={24} color={colors.secondary}  /> }
                                                    uppercase={false} 
                                                ><Text style={{fontSize:12}}>Call</Text></Button>
                                            </View>
                                        </View>
                                    </View>
                                }
                                right={()=> (<Icon onPress={() => refRBSheet.current.open()} type={"MaterialCommunityIcons"} style={{right: 5, top: 8,position: 'absolute',}} name={'dots-vertical'} size={18}  color={colors.gray} />)}
                            /> */}

                    
                            <RBSheet
                                ref={refRBSheet}
                                height={190}
                                openDuration={250}
                                customStyles={{
                                    // container: {
                                    // justifyContent: "center",
                                    // alignItems: "center"
                                    // }
                                }}
                                >
                                <View style={{flexDirection:"column", flex:1}}>
                                    <List.Item
                                        title="View Customer Details"
                                        style={{paddingVertical:15}}
                                        onPress={() => navigation.navigate("CustomerDetails")}
                                        left={() => (<Icon type={"MaterialCommunityIcons"} name="eye" style={{marginHorizontal:10, alignSelf:"center"}} color={colors.black} size={26} />)}
                                    />
                                    <Divider />
                                    <List.Item
                                        title="Activity Log"
                                        style={{paddingVertical:15}}
                                        onPress={() => navigation.navigate("MyCustomers")}
                                        left={() => (<Icon type={"MaterialCommunityIcons"} name="clipboard-list-outline" style={{marginHorizontal:10, alignSelf:"center"}} color={colors.black} size={26} />)}
                                    />
                                    <Divider />
                                    <List.Item
                                        title="Add Note"
                                        style={{paddingVertical:15}}
                                        onPress={() => navigation.navigate("MyCustomers")}
                                        left={() => (<Icon type={"MaterialCommunityIcons"} name="notebook-plus-outline" style={{marginHorizontal:10, alignSelf:"center"}} color={colors.black} size={26} />)}
                                    />
                                
                                </View>
                            </RBSheet>
                                
                        </View>
                    }

                {/* </ScrollView> */}
            </View>
        
        );
    // }
}

// const ModalContainer = () => {
//     return (
      
//     )
//   }

const styles = StyleSheet.create({
    surfaceContainer: {
        flex:1,
        padding:15,
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

export default MyCustomer;
