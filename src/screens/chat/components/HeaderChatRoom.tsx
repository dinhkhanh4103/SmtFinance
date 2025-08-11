import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppBlock from '../../../components/view/AppBlock'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import AppText from '../../../components/text/AppText'
import { faArrowLeft, faEllipsisVertical, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import light from '../../../theme/light'

const HeaderChatRoom = ({}) => {
    const navigation = useNavigation();
  return (
   <AppBlock
         row
         alignItems="center"
         justifyContent='space-between'
         style={{ width: '100%' }}
         mb={12}
       >
        <AppBlock row alignItems='center'>
            <AppBlock>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesomeIcon icon={faArrowLeft} size={20} />
            </TouchableOpacity>
            </AppBlock>
            <AppBlock alignItems="center" ml={16}>
            <AppBlock row>
                    <Image source={require('../../../../assets/images/avt_employee.png')} style={{ width: 48, height:48, borderRadius:24, borderWidth:1, borderColor:light.Primary}}/>
                    <AppBlock ml={8} justifyContent='center'>
                        <AppText size={16} weight='600' semiBold>Nhân viên</AppText>
                        <AppText color='#8C8C8C' size={12} weight='400'>Sẵn sàng trả lời</AppText>
                    </AppBlock>
            </AppBlock>
            </AppBlock>
        </AppBlock>
        <AppBlock row>
            <AppBlock mr={12}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faPhoneVolume} size={24} color='#3FC58D'/>
                </TouchableOpacity>
            </AppBlock>
            <AppBlock>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faEllipsisVertical} size={24} />
                </TouchableOpacity>
            </AppBlock> 
        </AppBlock>
    </AppBlock>
  )
}

export default HeaderChatRoom