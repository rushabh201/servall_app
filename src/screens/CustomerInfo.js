import React from "react";
import { View , StyleSheet } from 'react-native';
import {FormBuilder} from 'react-native-paper-form-builder';
import {useForm} from 'react-hook-form';
import { Button, useTheme } from "react-native-paper";
import { colors } from "../constants";

const CustomerInfo = ({ navigation }) => {
    const { colors } = useTheme();

    const {control, setFocus, handleSubmit} = useForm({
        defaultValues: {
            name: '',
            phonenumber: '',
            email: '',
            address: '',
            GSTIN: '',
        },
        mode: 'onChange',
      });

    return (

    <View style={styles.PageContainer}>
        <View style={{marginTop: 10}}>
            <FormBuilder
                style={styles.formContainer}
                control={control}
                setFocus={setFocus}
                formConfigArray={[
                    {
                        type: "text",
                        name: "name",
                        rules: {
                            required: {
                            value: true,
                            message: 'Name is required',
                            },
                        },
                        textInputProps: {
                            label: 'Name',
                        },
                    },
                    {
                        type: 'text',
                        name: 'phonenumber',
                        rules: {
                            required: {
                            value: true,
                            message: 'Phone Number is required',
                            },
                        },
                        textInputProps: {
                            label: 'Phone Number',
                        },
                    },
                    {
                        type: 'email',
                        name: 'email',

                        rules: {
                            required: {
                            value: true,
                            message: 'Email is required',
                            },
                        },
                        textInputProps: {
                            label: 'Email',
                        },
                    },
                    {
                        type: "text",
                        name: "address",
                        rules: {
                            required: {
                            value: true,
                            message: 'Address is required',
                            },
                        },
                        textInputProps: {
                            label: 'Address',
                        },
                    },
                    {
                        type: 'text',
                        name: 'GSTIN',
                        textInputProps: {
                            label: "GSTIN",
                        },
                    }
                ]}
            />
            <Button
                mode={'contained'}
                onPress={handleSubmit((data)=>{
                    console.log('formData', data);
                    navigation.navigate('DashboardStack');
                })}
               >
                Submit
            </Button>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    PageContainer: {
        padding:20,
        flex: 1,
        backgroundColor: colors.white, 
        justifyContent:'center',
    },
    formContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CustomerInfo;