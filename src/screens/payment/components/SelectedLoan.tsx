import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppBlock from '../../../components/view/AppBlock'
import AppText from '../../../components/text/AppText'
import { useTranslation } from 'react-i18next'
import ArrowDownSmallIcon from '../../../../assets/icons/ArrowDownSmallIcon'
import light from '../../../theme/light'

const SelectedLoan = ({listLoan, onPress}:any) => {
    const {t}= useTranslation();
    const [showLoan, setShowLoan] = useState(true);
  return (
    <AppBlock mt={12}>
        <TouchableOpacity onPress={()=>setShowLoan(prev=>!prev)}>
            <AppBlock radius={12} border={1} borderColor='#DCDCDC'>
                <AppBlock alignItems='center' justifyContent='space-between' row ph={12} style={{height:50, width:'100%', borderBottomWidth: showLoan ? 1 : 0, borderBottomColor:'#DCDCDC'}}>
                    <AppText size={14} weight='400' color='#8C8C8C'>{t('select_loan')}</AppText>
                    <ArrowDownSmallIcon/>
                </AppBlock>
                {showLoan&&
                    <AppBlock alignItems='center'>
                        <FlatList
                            data={listLoan}
                            showsVerticalScrollIndicator={false}
                            style={{width:'95%', height:240}}
                            keyExtractor={(item)=>item.loanCode}
                            renderItem={({item})=>(
                                <TouchableOpacity onPress={()=>{onPress(item); setShowLoan(false)}}>
                                    <AppBlock pv={8} style={{borderBottomWidth: 1, borderBottomColor:'#DCDCDC'}}>
                                        <AppBlock row justifyContent='space-between' alignItems='flex-end'>
                                            <AppText size={16} weight='400'>{item.date}</AppText>
                                            <AppText size={14} weight='400' color='#8C8C8C'>{item.loanCode}</AppText>
                                        </AppBlock>
                                        <AppBlock row justifyContent='space-between' alignItems='flex-end'>
                                            <AppText size={14} weight='400' color='#8C8C8C'>{t('loan_term')}</AppText>
                                            <AppText size={14} weight='400' color='#8C8C8C'>{item.term}</AppText>
                                        </AppBlock>
                                        <AppBlock row justifyContent='space-between' alignItems='flex-end'>
                                            <AppText size={14} weight='400' color='#8C8C8C'>{t('loan_amount')}</AppText>
                                            <AppText size={16} weight='500' color={light.Primary}>{item.amount}</AppText>
                                        </AppBlock>
                                    </AppBlock>
                                </TouchableOpacity>
                            )}
                        />
                    </AppBlock>
                }
            </AppBlock>
        </TouchableOpacity>
    </AppBlock>
  )
}

export default SelectedLoan