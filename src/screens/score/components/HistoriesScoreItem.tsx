import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBlock from '../../../components/view/AppBlock'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowDown, faArrowUp, faExclamation } from '@fortawesome/free-solid-svg-icons'
import light from '../../../theme/light'
import AppText from '../../../components/text/AppText'
import { useTranslation } from 'react-i18next'

const HistoriesScoreItem = ({item}:any) => {
  const {t} = useTranslation();
  let color = light.green500;
  let icon = faArrowUp;
  let bgIcon = light.Success;
  if(item.type == 'decrease'){
    color = light.red500;
    icon = faArrowDown;
    bgIcon = light.Error;
  }else if(item.type == 'increase'){
    color = light.green500;
    icon = faArrowUp;
    bgIcon = light.Success;
  }else{
    color = light.yellow500;
    icon = faExclamation;
    bgIcon = light.Warning;
  }
  return (
    <TouchableOpacity>
      <AppBlock row style={{borderBottomWidth: 1, borderBottomColor:'#DCDCDC', paddingVertical: 12}}>
          <AppBlock width={42} height={42} style={{borderRadius:99}} alignItems='center' justifyContent='center' background={bgIcon}>
            <FontAwesomeIcon icon={icon} color={color}></FontAwesomeIcon>
          </AppBlock>
          <AppBlock flex ml={12} justifyContent='space-between'>
            <AppText size={16} weight='500'>{item.title}</AppText>
            <AppBlock row alignItems='flex-end' justifyContent='space-between'>
              <AppText size={12} weight='400' color='#8C8C8C'>{item.date}</AppText>
              <AppText size={18} weight='600' color={light.Primary}>{item.value}</AppText>
            </AppBlock>
          </AppBlock>
      </AppBlock>
    </TouchableOpacity>
  )
}

export default HistoriesScoreItem