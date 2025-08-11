import { View, Text, TouchableOpacity, FlatList, Image, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import AppText from '../../components/text/AppText'
import light from '../../theme/light'
import ItemInvestment from './components/ItemInvestment'
import AppConstant from '../../config/AppConstant'
import CurrencyInput from '../../components/input/CurrencyInput'
import Slider from '@react-native-community/slider'
import { account } from '../../i18n/locales/en'
import MoneySlider from './components/RangeSlider'
import RangeSlider from './components/RangeSlider'
import AppTextInput from '../../components/input/AppTextInput'
import { launchImageLibrary } from 'react-native-image-picker'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle, faCircleDot } from '@fortawesome/free-regular-svg-icons'
import AppButton from '../../components/button/AppButton'
import { useNavigation } from '@react-navigation/native'

const TradeScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [selected, setSelected] = useState('p2p_investment');
  const [amount, setAmount] = useState(1000000);
  const [amountString, setAmountString] = useState('1.000.000');

  const [term, setTerm] = useState(6);
  const [termString, setTermString] = useState('6');

  const [agree, setAgree] = useState(false);
  const [disable, setDisable] = useState(true);

  const interestRate = 19;
  const [paymentMonth, setPaymentMonth] = useState<number>(1);
  useEffect(()=>{
    setPaymentMonth(Math.floor(amount*(interestRate/100)/12))
  }, [amount])
  const [selectedImageUri, setSelectedImageUri] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const handleChoosePhoto = () => {
        const options = {
        mediaType: 'photo',
        quality: 0.8,
        maxWidth: 500,
        maxHeight: 500,
        };

        launchImageLibrary(options, (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorCode) {
            console.log('ImagePicker Error: ', response.errorCode);
            Alert.alert('Lỗi chọn ảnh', 'Không thể chọn ảnh, vui lòng thử lại.');
        } else if (response.assets && response.assets.length > 0) {
            const asset = response.assets[0];
            const source = { uri: asset.uri };
            setSelectedImageUri(source.uri);
            setSelectedImageFile(asset); // Lưu toàn bộ thông tin asset
        }
        });
    }
  const listInvestment = [
    {
      id: '1',
      title: 'Gọi vốn Đầu tư',
      amount: '20.000.000 VNĐ',
      date: '12:56  02/07/2025',
      interest: '19.2%',
      term: '6 tháng',
    },
    {
      id: '2',
      title: 'Gọi vốn Tiêu dùng',
      amount: '20.000.000 VNĐ',
      date: '12:56  02/07/2025',
      interest: '19.2%',
      term: '6 tháng',
    },
    {
      id: '3',
      title: 'Gọi vốn Siêu tốc',
      amount: '20.000.000 VNĐ',
      date: '12:56  02/07/2025',
      interest: '19.2%',
      term: '6 tháng',
    },
    {
      id: '4',
      title: 'Gọi vốn Siêu tốc',
      amount: '20.000.000 VNĐ',
      date: '12:56  02/07/2025',
      interest: '19.2%',
      term: '6 tháng',
    },
    {
      id: '5',
      title: 'Gọi vốn Siêu tốc',
      amount: '20.000.000 VNĐ',
      date: '12:56  02/07/2025',
      interest: '19.2%',
      term: '6 tháng',
    },
    {
      id: '6',
      title: 'Gọi vốn Siêu tốc',
      amount: '20.000.000 VNĐ',
      date: '12:56  02/07/2025',
      interest: '19.2%',
      term: '6 tháng',
    },
    {
      id: '7',
      title: 'Gọi vốn Siêu tốc',
      amount: '20.000.000 VNĐ',
      date: '12:56  02/07/2025',
      interest: '19.2%',
      term: '6 tháng',
    },
    {
      id: '8',
      title: 'Gọi vốn Siêu tốc',
      amount: '20.000.000 VNĐ',
      date: '12:56  02/07/2025',
      interest: '19.2%',
      term: '6 tháng',
    },
  ];
  return (
    <AppBlock style={{width:'100%'}} flex background='white' alignItems='center' pt={AppConstant.TOP}>
      <AppBlock style={{width:'95%'}} flex>
        <HeaderBack title ={t('trade')} iconRight={faCirclePlus} onPressIconRight={()=>{navigation.navigate('HistoriesTradeScreen')}}/>
        <AppBlock row style={{width:'100%', zIndex:10}} justifyContent='space-around'>
          <TouchableOpacity style={{width:'35%'}} onPress={()=>{setSelected('p2p_investment')}}>
            <AppBlock style={{width: '100%', borderBottomWidth: selected=='p2p_investment' ? 4 : 0, borderBottomColor:light.Primary}} pv={8} alignItems='center'>
              <AppText size={16} weight='500' color={selected=='p2p_investment' ? light.Primary: '#8C8C8C'}>{t('p2p_investment')}</AppText>
            </AppBlock>
          </TouchableOpacity>
          <TouchableOpacity style={{width:'35%'}} onPress={()=>{setSelected('create_investment_package')}}>
            <AppBlock style={{ width: '100%',borderBottomWidth: selected=='create_investment_package' ? 4 : 0, borderBottomColor:light.Primary}} pv={8} alignItems='center'>
              <AppText size={16} weight='500' color={selected=='create_investment_package' ? light.Primary: '#8C8C8C'}>{t('create_investment_package')}</AppText>
            </AppBlock>
          </TouchableOpacity>
        </AppBlock>
        <AppBlock style={{height:1, marginTop:-2 }} background='#8C8C8C'/>
        { selected == 'p2p_investment'
          ?
            <FlatList
                data={listInvestment}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item})=> <ItemInvestment item={item} onPress={()=>{navigation.navigate('InvestFundraisingScreen', {selectedItem: item})}}/>}
                style={{flex:1, width:'100%', marginTop:12}}
            />
          
          :
          <ScrollView showsVerticalScrollIndicator={false}>
            <AppBlock style={{width:'100%'}} mt={12}>
              <AppBlock>
                <AppText size={16} weight='400'>{t('investment_amount')}</AppText>
                <CurrencyInput value={amountString}
                  onChangeText={(text:any) => {
                    setAmountString(text);
                    const parsed = Number(text.replace(/\./g, '')); // loại dấu chấm
                    if (!isNaN(parsed)) {
                      setAmount(parsed);
                    } else {1
                      setAmount(0); // fallback
                    }
                  }}
                  placeholder="Số tiền vay"
                  unit="VNĐ"
                />
                <AppBlock style={{width:'100%'}}>
                  <RangeSlider value={amount} onValueChange={(value:any) => {setAmount(value) ; setAmountString(value.toLocaleString('vi-VN'));}}/>
                </AppBlock>
              </AppBlock>

              <AppBlock mt={12}>
                <AppText size={16} weight='400'>{t('term')}</AppText>
                <CurrencyInput value={termString}
                  onChangeText={(text:any) => {
                    setTermString(text);
                    setTerm(Number(text))
                  }}
                  placeholder="Kỳ hạn"
                  unit="Tháng"
                />
                <AppBlock style={{width:'100%'}}>
                  <RangeSlider value={term} onValueChange={(value:any) => {setTerm(value) ; setTermString(value.toLocaleString('vi-VN'));}} minimumValue={6} maximumValue={32} unit={t('month')} step={1}/>
                </AppBlock>
              </AppBlock>

              <AppBlock mt={12}>
                <AppText size={16} weight='400'>{t('interest_rate')} ({interestRate}%/{t('year')})</AppText>
                <AppText mt={8} size={20} weight='600' semiBold>{paymentMonth.toLocaleString('vi-VN')} VNĐ/tháng</AppText>
              </AppBlock>
              <AppBlock mt={12}>
                <AppText size={16} weight='400'>{t('periodic_contribution_amount')}</AppText>
                <AppText mt={8} size={20} weight='600' semiBold>{(Math.floor(amount/term + paymentMonth)).toLocaleString('vi-VN')} VNĐ/tháng</AppText>
              </AppBlock>
              <AppBlock mt={12}>
                <AppText size={16} weight='400'>{t('total_payable')}</AppText>
                <AppText mt={8} size={20} weight='600' semiBold>{(Math.floor((amount/term + paymentMonth)*term)).toLocaleString('vi-VN')} VNĐ</AppText>
              </AppBlock>
              <AppBlock mt={12}>
                <AppText size={16} weight='400' color='#122457'>{t('investment_purpose')}</AppText>
                <AppTextInput placeholder={t('specify_investment_purpose')}/>
              </AppBlock>
              <AppBlock pv={12}>
                <AppText size={16} weight='400' color='#122457'>{t('select_cover_photo')}</AppText>
                {selectedImageUri
                  ?
                    <AppBlock></AppBlock>
                  :
                    <AppBlock alignItems='center' justifyContent='center' width={80} mt={8}>
                      <TouchableOpacity style={{alignItems:"center"}} onPress={handleChoosePhoto}>            
                        <Image source={require('../../../assets/images/upload_image.png')}/>
                        <AppText mt={4} color='#8C8C8C' size={12} weight='400'>{t('max_10_photos')}</AppText>
                      </TouchableOpacity>
                    </AppBlock>
                  }
              </AppBlock>
              <AppBlock mb={12} row alignItems='center' style={{width:'100%'}}>
                <TouchableOpacity onPress={()=>{setAgree(!agree)}} style={{flexDirection:'row', alignItems:'center', width:'95%'}}>
                  <FontAwesomeIcon icon={agree ? faCircleDot : faCircle} color={light.Primary} size={20}/>
                  <AppText ml={8} size={14} weight='400'>{t('agree_to_terms')} <AppText color={light.Primary}>{t('terms_and_conditions')}</AppText></AppText>
                </TouchableOpacity>
              </AppBlock>
              <AppBlock mb={12}>
                <AppButton name={t('confirm')} disable={agree? false : true} onPress={()=>navigation.navigate('CheckCallCapitalScreen_1')}/>
              </AppBlock>
            </AppBlock>
          </ScrollView>
        }
      </AppBlock>
    </AppBlock>
  )
}

export default TradeScreen