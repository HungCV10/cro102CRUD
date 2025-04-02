import React, { useState } from 'react'
import { View, Text, Alert, TouchableOpacity } from "react-native"
import { useDispatch } from 'react-redux';
import { createSanPhamAction } from '../redux/actions/sanPhamAction';
import { TextInput } from 'react-native-gesture-handler';

const AddSanPham = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const dispatch = useDispatch();

    const handleAdd = () => {
        // tạo đối tượng sản phẩm mới
        const newSanPham = {
            name,
            price,
            image
        }

        dispatch(createSanPhamAction(newSanPham));
        Alert.alert("thêm thành công")

    }


    return (
        <View>
            <Text>Đây là màn thêm sản phẩm</Text>
            <TextInput
                placeholder='Tên sản phẩm'
                value={name}
                onChangeText={setName}
            ></TextInput>
            <TextInput
                placeholder='Giá sản phẩm'
                value={price}
                onChangeText={setPrice}
            ></TextInput>
            <TextInput
                placeholder='Ảnh sản phẩm'
                value={image}
                onChangeText={setImage}
            ></TextInput>

            <TouchableOpacity onPress={handleAdd}>
                <Text>Thêm SP</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddSanPham