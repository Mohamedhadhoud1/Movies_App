import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';
interface Props {
    placeholder: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
    focus?: boolean;
    ref?: React.Ref<TextInput>;
}
const SearchBar = ({ placeholder, onPress, value, onChangeText, focus, ref}: Props) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor={"#ab8bff"} />
            <TextInput
                placeholder='Search for movies or TV shows'
                placeholderTextColor='#ab8bff'
                className='ml-2 flex-1 text-white text-base'
                onPress={onPress}
                value={value}
                onChangeText={onChangeText}
                autoFocus={focus}
                readOnly={!focus}
                ref={ref}
            />
        </View>
    )
}

export default SearchBar