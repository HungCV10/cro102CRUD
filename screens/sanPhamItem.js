import React from 'react'
import {View, Text, Image, TouchableOpacity, Alert} from "react-native"
import { useDispatch } from 'react-redux'
import { delteteSanPhamAction } from '../redux/actions/sanPhamAction';
import { useNavigation } from '@react-navigation/native';

const SanPhamItem = ({sanPham}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDelete = async()=>{
    await dispatch(delteteSanPhamAction(sanPham.id));
    Alert.alert("xóa thành công");
  }


  //xử lý sửa
  const handleEdit = ()=>{
    navigation.navigate("EditSanPham", {sanPham});
  }


  return (
    <View>
        <Image source={{uri: sanPham.image}} style={{width: 100, height: 100}}></Image>
        <Text>Tên sản phẩm: {sanPham.name}</Text>
        <Text>Tên giá: {sanPham.price}</Text>
        <TouchableOpacity onPress={handleDelete}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEdit}>
          <Text>edit</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SanPhamItem