import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import HistoriesScoreItem from './components/HistoriesScoreItem'

const HistoriesScoreScreen = () => {
    const {t} = useTranslation();
    const [selected, setSelected] = useState('scores');
    const pointHistory = [
        {
            id: '1',
            type: 'increase',
            title: 'Tăng điểm',
            date: '03/07/2023',
            value: 14,
        },
        {
            id: '2',
            type: 'decrease',
            title: 'Giảm điểm',
            date: '02/07/2023',
            value: -12,
        },
        {
            id: '3',
            type: 'decrease',
            title: 'Giảm điểm',
            date: '02/07/2023',
            value: -12,
        },
        {
            id: '4',
            type: 'increase',
            title: 'Tăng điểm',
            date: '03/07/2023',
            value: 31,
        },
        {
            id: '5',
            type: 'increase',
            title: 'Tăng điểm',
            date: '03/07/2023',
            value: 22,
        },
        {
            id: '6',
            type: 'increase',
            title: 'Tăng điểm',
            date: '03/07/2023',
            value: 5,
        },
        {
            id: '7',
            type: 'no_change',
            title: 'Điểm không đổi',
            date: '03/07/2023',
            value: 0,
        },
    ];

  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}}>
            <HeaderBack title={t('point_history')}/>
            <AppBlock row justifyContent='space-between'>
                <TouchableOpacity style={{width:'33%'}} onPress={()=>setSelected('loan')}>
                    <AppBlock style={{width:'100%', borderBottomWidth: 4, borderBottomColor: selected == 'loan' ? light.Primary : 'transparent', paddingBottom:12}} alignItems='center'>
                        <AppText size={16} weight='500' color={selected =='loan' ? light.Primary : '#8C8C8C'}>{t('loan')}</AppText>
                    </AppBlock>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'33%'}} onPress={()=>setSelected('buy_sell')}>
                    <AppBlock style={{width:'100%', borderBottomWidth: 4, borderBottomColor: selected == 'buy_sell' ? light.Primary : 'transparent', paddingBottom:12}} alignItems='center'>
                        <AppText size={16} weight='500' color={selected =='buy_sell' ? light.Primary : '#8C8C8C'}>{t('buy_sell')}</AppText>
                    </AppBlock>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'33%'}} onPress={()=>setSelected('scores')}>
                    <AppBlock style={{width:'100%', borderBottomWidth: 4, borderBottomColor: selected == 'scores' ? light.Primary : 'transparent', paddingBottom:12}} alignItems='center'>
                        <AppText size={16} weight='500' color={selected =='scores' ? light.Primary : '#8C8C8C'}>{t('scores')}</AppText>
                    </AppBlock>
                </TouchableOpacity>
                <AppBlock style={{width:'100%', height:1, position:'absolute', bottom:1, backgroundColor:'#DCDCDC', zIndex:-1}}></AppBlock>
            </AppBlock>
            {selected == 'scores'
            ?
                <FlatList
                    data={pointHistory}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <HistoriesScoreItem item={item} />}
                    style={{ flex: 1}}
                />
            :
                null
            }
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default HistoriesScoreScreen