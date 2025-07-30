import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBlock from '../../components/view/AppBlock';
import HeaderBack from '../../components/header/HeaderBack';
import { useTranslation } from 'react-i18next';
import SearchBar from '../../components/input/SearchBar';
import AppText from '../../components/text/AppText';
import { FlatList } from 'react-native-gesture-handler';
import AppButton from '../../components/button/AppButton';
import light from '../../theme/light';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import AppConstant from '../../config/AppConstant';

const LoanListScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const TAB_OPTIONS = ['Du học', 'Đi làm', 'Mua xe', 'Tiêu dùng'];
  const [selectedTab, setSelectedTab] = useState('Du học');
  const data = [
    {
        id: '1',
        image: require('../../../assets/images/duhoc_yoko.png'), // Sử dụng ảnh du học như trong ảnh bạn cung cấp
        title: 'HỖ TRỢ ĐI DU HỌC NHẬT',
        date: '24/05/2024',
        amount: '100.000.000 VNĐ',
        duration: '6 tháng', // Hạn mức
        timeRange: '24 tháng 5, 2024 - 30 tháng 5, 2024',
        interestRate: '18.0 - 19.8%',
        location: 'Hồ Chí Minh',
        description: [
          '✨ SỰ KIỆN "BLOOMING GRAND PARK - BỪNG SẮC XUÂN 2024" – NHÀ SANG ĐÓN TẾT, SÁNG BỪNG SỨC XUÂN CÙNG CÁC ĐẠI TIỆN ÍCH VÀ CHÍNH SÁCH ƯU ĐÃI HẤP DẪN 💯',
          'Cơ hội "Đặc Biệt" để sở hữu căn hộ tại Vinhomes Grand Park, với những chính sách và chương trình hỗ trợ lãi suất đột phá từ Chủ Đầu Tư, sở hữu căn hộ Vinhomes Grand Park chưa bao giờ dễ dàng đến thế. ✨ Chào đón các "ĐẠI TIỆN ÍCH" chỉ có tại Vinhomes Grand Park sẽ ra mắt năm 2024.',
          '✨ Cơ hội sở hữu những căn hộ đẹp nhất tất cả các phân khu của Vinhomes Grand Park với "Giỏ hàng đặc biệt - Tài lộc chào xuân 2024" ✨ Cùng chương trình Lucky Draw – với nhiều phần quà hấp dẫn. ✨ Check in & hái lộc xuân. ✨ Chương trình chào xuân 2024'
        ]
    },
    {
        id: '2',
        image: require('../../../assets/images/duhoc_yoko.png'), // Sử dụng ảnh du học như trong ảnh bạn cung cấp
        title: 'HỖ TRỢ ĐI DU HỌC NHẬT',
        date: '24/05/2024',
        amount: '100.000.000 VNĐ',
        duration: '6 tháng', // Hạn mức
        timeRange: '24 tháng 5, 2024 - 30 tháng 5, 2024',
        interestRate: '18.0 - 19.8%',
        location: 'Hồ Chí Minh',
        description: [
          '✨ SỰ KIỆN "BLOOMING GRAND PARK - BỪNG SẮC XUÂN 2024" – NHÀ SANG ĐÓN TẾT, SÁNG BỪNG SỨC XUÂN CÙNG CÁC ĐẠI TIỆN ÍCH VÀ CHÍNH SÁCH ƯU ĐÃI HẤP DẪN 💯',
          'Cơ hội "Đặc Biệt" để sở hữu căn hộ tại Vinhomes Grand Park, với những chính sách và chương trình hỗ trợ lãi suất đột phá từ Chủ Đầu Tư, sở hữu căn hộ Vinhomes Grand Park chưa bao giờ dễ dàng đến thế. ✨ Chào đón các "ĐẠI TIỆN ÍCH" chỉ có tại Vinhomes Grand Park sẽ ra mắt năm 2024.',
          '✨ Cơ hội sở hữu những căn hộ đẹp nhất tất cả các phân khu của Vinhomes Grand Park với "Giỏ hàng đặc biệt - Tài lộc chào xuân 2024" ✨ Cùng chương trình Lucky Draw – với nhiều phần quà hấp dẫn. ✨ Check in & hái lộc xuân. ✨ Chương trình chào xuân 2024'
        ]
    },
    {
        id: '3',
        image: require('../../../assets/images/duhoc_yoko.png'), // Sử dụng ảnh du học như trong ảnh bạn cung cấp
        title: 'HỖ TRỢ ĐI DU HỌC NHẬT',
        date: '24/05/2024',
        amount: '100.000.000 VNĐ',
        duration: '6 tháng', // Hạn mức
        timeRange: '24 tháng 5, 2024 - 30 tháng 5, 2024',
        interestRate: '18.0 - 19.8%',
        location: 'Hồ Chí Minh',
        description: [
          '✨ SỰ KIỆN "BLOOMING GRAND PARK - BỪNG SẮC XUÂN 2024" – NHÀ SANG ĐÓN TẾT, SÁNG BỪNG SỨC XUÂN CÙNG CÁC ĐẠI TIỆN ÍCH VÀ CHÍNH SÁCH ƯU ĐÃI HẤP DẪN 💯',
          'Cơ hội "Đặc Biệt" để sở hữu căn hộ tại Vinhomes Grand Park, với những chính sách và chương trình hỗ trợ lãi suất đột phá từ Chủ Đầu Tư, sở hữu căn hộ Vinhomes Grand Park chưa bao giờ dễ dàng đến thế. ✨ Chào đón các "ĐẠI TIỆN ÍCH" chỉ có tại Vinhomes Grand Park sẽ ra mắt năm 2024.',
          '✨ Cơ hội sở hữu những căn hộ đẹp nhất tất cả các phân khu của Vinhomes Grand Park với "Giỏ hàng đặc biệt - Tài lộc chào xuân 2024" ✨ Cùng chương trình Lucky Draw – với nhiều phần quà hấp dẫn. ✨ Check in & hái lộc xuân. ✨ Chương trình chào xuân 2024'
        ]
    },
  
];
  return (
    <AppBlock style={{ flex: 1, backgroundColor: 'white' }} pt={AppConstant.TOP} pb={AppConstant.BOTTOM}>
      <AppBlock flex alignItems="center">
        <AppBlock style={{ width: '95%' }}>
          <HeaderBack title={t('loan_list')} iconRight={faCirclePlus} onPressIconRight={()=>{navigation.navigate('HistoriesLoanScreen')}}/>
          <AppBlock>
            <SearchBar placeholder={'Tìm kiếm...'} />
          </AppBlock>
          <AppBlock row justifyContent="space-between">
            {TAB_OPTIONS.map((tab, index) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedTab(tab);
                }}
              >
                <AppBlock
                  justifyContent="center"
                  alignItems="center"
                  ph={20}
                  pv={6}
                  radius={50}
                  border={1}
                  borderColor={selectedTab == tab ? light.Primary : '#8C8C8C'}
                  background={selectedTab == tab ? light.Primary : 'white'}
                >
                  <AppText
                    size={12}
                    weight="500"
                    color={selectedTab == tab ? 'white' : '#8C8C8C'}
                  >
                    {tab}
                  </AppText>
                </AppBlock>
              </TouchableOpacity>
            ))}
          </AppBlock>
          <AppBlock style={{height: '85%'}} mt={12}>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              style={{width:'100%'}}
              renderItem={({ item }) => (
                <AppBlock
                  row
                  height={140}
                  mb={12}
                  alignItems="center"
                  radius={8}
                  border={1}
                  borderColor={light.Primary}
                  ph={12}
                  justifyContent="space-between"
                >
                  <AppBlock width={138} height={113}>
                    <Image
                      style={{ width: '100%', height: '100%', borderRadius: 8 }}
                      resizeMode="cover"
                      source={item.image}
                    />
                  </AppBlock>
                  <AppBlock justifyContent="space-between" height={113}>
                    <AppText size={14} weight="500">
                      {item.title}
                    </AppText>
                    <AppBlock row alignItems="center">
                      <AppText size={12} weight="500">
                        {t('support_amount')}:
                      </AppText>
                      <AppText
                        ml={4}
                        size={14}
                        weight="500"
                        color={light.Primary}
                      >
                        {item.amount}
                      </AppText>
                    </AppBlock>
                    <AppText size={12} weight="500">
                      {t('support_duration')}: {item.duration}
                    </AppText>
                    <AppText size={12} weight="500">
                      {t('support_location')}: {item.location}
                    </AppText>
                    <AppBlock
                      row
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <AppText size={12} weight="500">
                        {item.date}
                      </AppText>
                      <AppButton width={68} heigth={28} name={t('details')} onPress={()=> navigation.navigate('LoanDetailScreen', {itemDetail: item})}/>
                    </AppBlock>
                  </AppBlock>
                </AppBlock>
              )}
              contentContainerStyle={{ paddingVertical: 8 }}
            />
          </AppBlock>
        </AppBlock>
      </AppBlock>
    </AppBlock>
  );
};

export default LoanListScreen;
