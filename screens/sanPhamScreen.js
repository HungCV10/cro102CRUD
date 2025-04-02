import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListSanPham } from '../redux/actions/sanPhamAction';
import { FlatList, TouchableOpacity, View, Text } from 'react-native';
import SanPhamItem from './sanPhamItem';


const SanPhamScreen = ({navigation}) => {
    const lstSanPham = useSelector((state)=> state.sanPham.listSanPham)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getListSanPham());
    },[dispatch])

  return (
    <View style={{flex: 1}}>
        <TouchableOpacity onPress={()=> navigation.navigate("AddSanPham")}>
          <Text>Thêm sản phẩm</Text>
        </TouchableOpacity>
        <FlatList
            data={lstSanPham}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=><SanPhamItem sanPham={item}></SanPhamItem>}
        ></FlatList>
              
    </View>
  )
}
export default SanPhamScreen