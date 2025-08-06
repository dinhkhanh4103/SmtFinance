import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import light from '../../theme/light'

const SelectBankScreen = ({navigation, route}:any) => {
    const {t} = useTranslation();
    const bankData = [
        {
            id: 'abbank',
            name: 'ABBank',
            icon: require('../../../assets/icons/abbank.png'),
        },
        {
            id: 'acb',
            name: 'ACB',
            icon: require('../../../assets/icons/abcbank.png'),
        },
        {
            id: 'agribank',
            name: 'Agribank',
            icon: require('../../../assets/icons/agribank.png'),
        },
        {
            id: 'bac_a',
            name: 'Bắc Á',
            icon: require('../../../assets/icons/bacabank.png'),
        },
        {
            id: 'ban_viet',
            name: 'Bản Việt',
            icon: require('../../../assets/icons/banviet.png'),
        },
        {
            id: 'bao_viet',
            name: 'Bảo Việt',
            icon: require('../../../assets/icons/baoviet.png'),
        },
    ];
    const handleSelect = (name:any) => {
        if (route.params?.onSelect) {
            route.params.onSelect(name); // Truyền dữ liệu về
        }
        navigation.goBack(); // Quay lại
    };
  return (
    <AppSafeAreaView>
        <AppBlock style={{width:'95%'}} flex>
            <HeaderBack title={t('bank')}/>
            <FlatList
                data={bankData}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>handleSelect(item.name)}>
                        <AppBlock row justifyContent='space-between' pv={12} style={{borderBottomWidth:1, borderBottomColor:'#DCDCDC'}} alignItems='center'>
                            <AppBlock row justifyContent='center' alignItems='center'>
                                <AppBlock style={{width: 48, height:48, borderRadius:8, borderWidth:1, borderColor:'#F4F4F4'}} alignItems='center' justifyContent='center'>
                                    <Image source={item.icon} style={{width: 40, height:40}} resizeMode='contain'/>
                                </AppBlock>
                                <AppText size={16} weight='500' ml={8}>{item.name}</AppText>
                            </AppBlock>
                            <AppBlock>
                                <FontAwesomeIcon icon={faChevronRight} size={24} color={light.Primary}/>
                            </AppBlock>
                        </AppBlock>
                    </TouchableOpacity>
                )}      
            />  
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default SelectBankScreen