import { StyleSheet, Text, TextInput, TextInputProps, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import Eye from '../../../assets/icons/eye-open.svg';

interface Props extends TextInputProps {
  solid?: boolean;
}

const Input = (props: Props) => {
  const [password, setPassword] = useState<boolean | undefined>(props.secureTextEntry);

  return (
    <>
      <Text className={`text-[15px] font-sora mb-2`}>
        {props.placeholder}
      </Text>
      <View className={`border px-4 border-grey-300 ${props.solid && "bg-grey-200"} rounded-md flex flex-row items-center`}>
        <TextInput
          {...props}
          className={`font-sora text-[15px] py-3 flex-1`}
          secureTextEntry={password}
        />

        {props.secureTextEntry && (
          <TouchableWithoutFeedback onPress={() => { setPassword(!password) }}>
            <View className={`flex items-center flex-row`}>
              <Eye />

              <Text className={`font-sora text-grey-700 ml-1`}>
                {password ? "Show" : "Hide"}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </>
  )
}

export default Input

const styles = StyleSheet.create({})