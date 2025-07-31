import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppBlock from '../../components/view/AppBlock'
import AppConstant from '../../config/AppConstant'
import AppText from '../../components/text/AppText'
import AccountHeader from './components/AccountHeader'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRightFromBracket, faArrowsLeftRight, faBuildingColumns, faDollar, faLocation, faLocationDot, faLock, faShareNodes, faWallet } from '@fortawesome/free-solid-svg-icons'
import { faClock, faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { useAuthStore } from '../../store/authStore'

const AccountScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {logout} = useAuthStore();
  function handleLogout(){  
    logout();
  }
  return (
    <AppBlock flex background='white'>
      <AccountHeader/>
      <ScrollView>
        <AppBlock flex alignItems='center'>
          <AppBlock style={{width:'95%'}} mt={12}>
            <AppBlock>
              <AppText size={16} weight='600' semiBold>{t('personal')}</AppText>
              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_bank.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('bank_link')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_heart.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('favorites')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('RatingsScreen')}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_star.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('ratings_feedback')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_location.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('transaction_point')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_pay.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('pay')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_history.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('history')}</AppText>
                </AppBlock>
              </TouchableOpacity>
            </AppBlock>

            <AppBlock mt={8} >
              <AppText size={16} weight='600' semiBold>{t('settings')}</AppText>
              <TouchableOpacity onPress={()=>navigation.navigate('AboutScreen')}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_share.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('about_app')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('SecurityScreen')}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_security.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('security')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_wallet.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('wallet_setup')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('LanguageScreen')}>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_language.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('language')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_support.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('support_consultation')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>
            </AppBlock>

            <AppBlock mt={8} >
              <AppText size={16} weight='600' semiBold>{t('terms_and_conditions')}</AppText>
              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_sheld_user.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('terms_conditions')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <AppBlock row pv={12} alignItems='center'>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <Image source={require('../../../assets/icons/icon_security_shield.png')}/> 
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8}>{t('loan_terms')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
              </TouchableOpacity>
            </AppBlock>
          </AppBlock>
          <TouchableOpacity style={{width:'100%', backgroundColor:'#FFCBCB', alignItems:'center'}} onPress={handleLogout}>
                <AppBlock row pv={12} alignItems='center' style={{width:'95%'}}>
                  <AppBlock width={20} height={20} alignItems='center' justifyContent='center'>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} color='#DE4B4B' size={20}/>
                  </AppBlock>
                  <AppText size={14} weight='400' ml={8} color='#DE4B4B'>{t('logout')}</AppText>
                </AppBlock>
                <AppBlock style={{height:1, backgroundColor:'#DCDCDC'}}/>
          </TouchableOpacity>
        </AppBlock>
      </ScrollView>
    </AppBlock>
  )
}

export default AccountScreen