import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import { useDispatch } from 'react-redux';

const EditSanPham = ({route}) => {
    //có đối tượng sản phẩm từ list truyền sang
    const {sanPham} = route.params;

    console.log("abc",sanPham);
    const [name, setName] = useState(sanPham.name);
    const [price, setPrice] = useState(""+sanPham.price);
    const [image, setImage] = useState(sanPham.image);

    const dispatch = useDispatch();

    const handleEdit = () => {
        // tạo đối tượng sản phẩm chỉnh sửa
        const objEdit = {
            name,
            price,
            image
        }

        dispatch(createSanPhamAction(newSanPham));
        Alert.alert("thêm thành công")

    }


    return (
        <View>
            <Text>Đây là màn sửa sản phẩm</Text>
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

            <TouchableOpacity onPress={handleEdit}>
                <Text>Thêm SP</Text>
            </TouchableOpacity>
        </View>
    )
}
export default EditSanPham