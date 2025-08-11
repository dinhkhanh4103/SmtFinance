import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppBlock from '../../components/view/AppBlock'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import SearchBar from '../../components/input/SearchBar'
import SearchIconRight from '../../components/input/SearchIconRight'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
import AppSwitch from '../../components/button/AppSwitch'
import { useAuthStore } from '../../store/authStore'
import AppButton from '../../components/button/AppButton'
import DropDown from '../../components/input/DropDown'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const MAX_LENGTH = 100;

const TransferBankScreen = ({navigation, route}:any) => {
    const {t} = useTranslation();
    const {user} = useAuthStore();
    const [amount, setAmount] = useState(0);
    const [amountString, setAmountString] = useState('');
    const [account, setAccount] = useState('');
    const [text, setText] = useState(user.name + " chuyen tien");
    const formatCurrency = (value:String) => {
        const cleaned = value.replace(/\D/g, '');
        return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };
    const [save, setSave] = useState(false);
    const [selectedBank, setSelectedBank] = useState('');
    const [selecteName, setSelectedName] = useState('');


    const [contacts, setContacts] = useState({});
    useEffect(() => {
    if (route.params?.selectedBank) {
      setSelectedBank(route.params.selectedBank);
    }
  }, [route.params?.selectedBank]);
  return (
    <AppSafeAreaView>
      <AppBlock flex style={{width:'95%'}}>
        <HeaderBack title={t('transfer_within_bankcs')}/>
        <ScrollView style={{flex:1}}>
          <SearchIconRight placeholder={t('search')}/>
          <AppBlock>
            <AppText size={16} mb={12} weight='600'>{t('bank')}</AppText>
            <TouchableOpacity onPress={()=>navigation.navigate('SelectBankScreen', {
                onSelect: (name:any) => {
                    setSelectedBank(name); // Cập nhật ngay khi chọn
                },
            })}>
                <AppBlock pv={4} ph={8} radius={12} border={1} borderColor='#C6C6C6' row justifyContent='space-between' alignItems='center'>
                    <TextInput value={selectedBank} placeholder={t('select_bank')} editable={false} style={{color:light.Primary, fontSize:16}}/>
                    <FontAwesomeIcon icon={faChevronRight} color='#8C8C8C'/>
                </AppBlock> 
            </TouchableOpacity>
          </AppBlock>
          <AppBlock>
            <AppBlock mt={12}>
              <AppText size={16} weight='400'>{t('receiving_account')}</AppText>
               <AppBlock row radius={12} border={1} borderColor='#C6C6C6' ph={8} pv={4} mt={8} justifyContent='space-between'>
                  <TextInput style={{flex:1, fontSize:14, color:light.Primary}} value={account} keyboardType="numeric" inputMode="numeric" placeholder={t('enter_account')} onChangeText={(text)=>{ setAccount(text)}} />
                  <AppBlock alignItems='center' justifyContent='center'>
                    <TouchableOpacity style={{padding:8}} onPress={()=>navigation.navigate('ContactsScreen', {
                        onSelect: (contacts:any) => {
                            setSelectedBank(contacts.bankName);
                            setAccount(contacts.accountNumber);
                            setSelectedName(contacts.owner) // Cập nhật ngay khi chọn
                        },
                    })}>
                      <FontAwesomeIcon icon={faAddressBook} size={20} color='#8C8C8C' style={{padding:8}}/>
                    </TouchableOpacity>
                  </AppBlock>
                </AppBlock>
                  <AppText mt={4} size={20} weight='500' color={light.Primary}>{selecteName}</AppText>
            </AppBlock>
            <AppBlock mt={12}>
                <AppText size={16} weight='400'>{t('amount_to_transfer')}</AppText>
                <AppBlock row radius={12} border={1} borderColor='#C6C6C6' ph={8} pv={4} mt={8} justifyContent='space-between'>
                  <TextInput style={{flex:1, fontSize:14, color:light.Primary}} value={amountString} keyboardType="numeric" inputMode="numeric" placeholder={t('enter_number')} onChangeText={(text)=>{setAmount(Number(text.replace(/\./g, ''))); setAmountString(formatCurrency(text))}}/>
                  <AppBlock alignItems='center' justifyContent='center' ph={12} style={{borderLeftWidth:1, borderLeftColor:'#C6C6C6'}}>
                      <AppText color='#8C8C8C'>VNĐ</AppText>
                  </AppBlock>
                </AppBlock>
            </AppBlock>
            <AppBlock row mt={12} justifyContent='space-between'> 
                <AppText>{t('save_to_contacts')}</AppText>
                <AppSwitch isEnabled={save} toggleSwitch={()=>setSave(prev => !prev)}/>
            </AppBlock>
            <AppBlock mt={16}>
                                    <AppBlock row justifyContent='space-between' mb={8}>
                                        <AppText size={16} weight='400'>{t('message')}</AppText>
                                        <AppText>{text.length}/100</AppText>
                                    </AppBlock>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={t('enter_content')}
                                        value={text}
                                        onChangeText={(value) => {
                                        if (value.length <= MAX_LENGTH) setText(value);
                                        }}
                                        multiline
                                        textAlignVertical="top" // để chữ canh trên
                                    />
                                </AppBlock>
          </AppBlock>
        </ScrollView>
        <AppBlock>
          <AppButton name={t('transfer')} onPress={()=>navigation.navigate('PaymentTransferScreen')}/>
        </AppBlock>
      </AppBlock>
    </AppSafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  count: {
    fontSize: 13,
    color: '#999',
  },
  input: {
    height: 120,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
    fontSize: 14,
  },
});
export default TransferBankScreen