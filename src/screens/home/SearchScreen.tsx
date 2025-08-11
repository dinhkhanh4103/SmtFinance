import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import SearchBar from '../../components/input/SearchBar'
import AppText from '../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import light from '../../theme/light'
import { FlatList } from 'react-native-gesture-handler'

const SearchScreen = ({navigation}: any) => {
    const {t} = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const quick_access = [
        {
            title: t('call_capital'),
            image: require('../../../assets/icons/call_capital.png')
        },
        {
            title: t('invest'),
            image: require('../../../assets/icons/invest.png')
        },
        {
            title: t('pay'),
            image: require('../../../assets/icons/pay.png')
        },
        {
            title: t('community'),
            image: require('../../../assets/icons/introduce.png')
        },
    ];
    const faq =[
        {
            title: "Điều kiên vay tại SMT Finance?"
        },
        {
            title: "Điều kiên Ngoài số tiền lãi/gốc trả hàng tháng, tôi mất thêm khoản phí nào khác không? tại SMT Finance?"
        },
        {
            title: "Tiền lãi được tính như nào?"
        },
        {
            title: "Tại sao đã đóng tiền nhưng vẫn bị báo nhắc nợ?"
        },
    ]
    const [filteredFqa, setFilteredFqa] = useState(faq);

    const [filteredQuickAccess, setFilteredQuickAccess] = useState(quick_access);
    const handleSearch = (text:any) => {
        setSearchQuery(text);

        if (text.trim() === '') {
        setFilteredQuickAccess(quick_access);
        setFilteredFqa(faq)
        } else {
        const filteredData = quick_access.filter(item => {
            return item.title.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredQuickAccess(filteredData);
        
        const filteredDataFqa = faq.filter(item => {
            return item.title.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredFqa(filteredDataFqa);
        
        }
    };
  return (
    <AppSafeAreaView>
        <AppBlock style={{width: '95%'}}>
            <AppBlock row alignItems='center' justifyContent='space-between'>
                <AppBlock style={{width:'85%'}}>
                    <SearchBar placeholder={"Tìm kiếm..."} value={searchQuery} onSearch={handleSearch}/>
                </AppBlock>
                <AppBlock>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <AppText size={16} weight='500' color={light.Primary}>{t('close')}</AppText>
                    </TouchableOpacity>
                </AppBlock>
            </AppBlock>
            <AppBlock>
                <AppText size={12} weight='600' semiBold color={light.Primary}>{t('quick_access')}</AppText>
                <FlatList
                data={filteredQuickAccess}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                    <TouchableOpacity>
                        <AppBlock row mt={8} alignItems='center'>
                            <AppBlock width={48} height={48} alignItems='center'justifyContent='center' radius={8} border={1} borderColor={light.Primary}>
                                <Image source={item.image}/>
                            </AppBlock>
                            <AppText ml={8}>{item.title}</AppText>
                        </AppBlock>
                    </TouchableOpacity>
                )}
                numColumns={1} // Tùy chỉnh số cột hiển thị
                ListEmptyComponent={() => (
                    <AppText >Không tìm thấy kết quả nào.</AppText>
                )}
            />
            </AppBlock>

            <AppBlock mt={12}>
                <AppText size={12} weight='600' semiBold color={light.Primary}>{t('faq')}</AppText>
                <FlatList
                data={filteredFqa}
                keyExtractor={(_, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                    <TouchableOpacity>
                        <AppText mt={8} size={12} weight='600' semiBold>{item.title}</AppText>
                    </TouchableOpacity>
                )}
                numColumns={1} // Tùy chỉnh số cột hiển thị
                ListEmptyComponent={() => (
                    <AppText >Không tìm thấy kết quả nào.</AppText>
                )}
            />
            </AppBlock>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default SearchScreen