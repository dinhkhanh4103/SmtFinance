import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
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
import LinearGradient from 'react-native-linear-gradient';

const SearchCategoriesSupportScreen = ({ navigation }: any) => {
  const { t } = useTranslation();
  const TAB_OPTIONS = ['Du học', 'Đi làm', 'Mua xe', 'Tiêu dùng'];
  const [selectedTab, setSelectedTab] = useState('Du học');
  const data = [
    {
        image: require('../../../assets/images/support_category_1.png'),
        title: 'HỖ TRỢ ĐI DU HỌC NHẬT',
        avatar: require('../../../assets/images/avatar_smt.png'),
        companyName: 'Công ty cổ phần Smiletech',
        supportType: 'Nhận hỗ trợ uy tín',
        date: '24/05/2024',
        timeRange: '24 tháng 5, 2024 - 30 tháng 5, 2024',
        duration: '6 tháng',
        amount: '100.000.000 VNĐ',
        interestRate: '18.0 - 19.8%',
        description: [
        '✨ SỰ KIỆN "BLOOMING GRAND PARK - BỪNG SẮC XUÂN 2024" – NHÀ SANG ĐÓN TẾT, SÁNG BỪNG SỨC XUÂN CÙNG CÁC ĐẠI TIỆN ÍCH VÀ CHÍNH SÁCH ƯU ĐÃI HẤP DẪN 💯', // Từ hình 2
        'Cơ hội "Đặc Biệt" để sở hữu căn hộ tại Vinhomes Grand Park, với những chính sách và chương trình hỗ trợ lãi suất đột phá từ Chủ Đầu Tư, sở hữu căn hộ Vinhomes Grand Park chưa bao giờ dễ dàng đến thế. ✨ Chào đón các "ĐẠI TIỆN ÍCH" chỉ có tại Vinhomes Grand Park sẽ ra mắt năm 2024.', // Từ hình 2
        '✨ Cơ hội sở hữu những căn hộ đẹp nhất tất cả các phân khu của Vinhomes Grand Park với "Giỏ hàng đặc biệt - Tài lộc chào xuân 2024" ✨ Cùng chương trình Lucky Draw – với nhiều phần quà hấp dẫn. ✨ Check in & hái lộc xuân. ✨ Chương trình chào xuân 2024', // Từ hình 2
        ],
    },
    {
        image: require('../../../assets/images/support_category_2.png'),
        title: 'HỖ TRỢ ĐI DU HỌC NHẬT',
        avatar: require('../../../assets/images/avatar_smt.png'),
        companyName: 'Công ty cổ phần Smiletech',
        supportType: 'Nhận hỗ trợ uy tín',
        date: '24/05/2024',
        timeRange: '24 tháng 5, 2024 - 30 tháng 5, 2024',
        duration: '6 tháng',
        amount: '100.000.000 VNĐ',
        interestRate: '18.0 - 19.8%',
        description: [
        '✨ SỰ KIỆN "BLOOMING GRAND PARK - BỪNG SẮC XUÂN 2024" – NHÀ SANG ĐÓN TẾT, SÁNG BỪNG SỨC XUÂN CÙNG CÁC ĐẠI TIỆN ÍCH VÀ CHÍNH SÁCH ƯU ĐÃI HẤP DẪN 💯', // Từ hình 2
        'Cơ hội "Đặc Biệt" để sở hữu căn hộ tại Vinhomes Grand Park, với những chính sách và chương trình hỗ trợ lãi suất đột phá từ Chủ Đầu Tư, sở hữu căn hộ Vinhomes Grand Park chưa bao giờ dễ dàng đến thế. ✨ Chào đón các "ĐẠI TIỆN ÍCH" chỉ có tại Vinhomes Grand Park sẽ ra mắt năm 2024.', // Từ hình 2
        '✨ Cơ hội sở hữu những căn hộ đẹp nhất tất cả các phân khu của Vinhomes Grand Park với "Giỏ hàng đặc biệt - Tài lộc chào xuân 2024" ✨ Cùng chương trình Lucky Draw – với nhiều phần quà hấp dẫn. ✨ Check in & hái lộc xuân. ✨ Chương trình chào xuân 2024', // Từ hình 2
        ],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <AppBlock flex alignItems="center">
        <AppBlock style={{ width: '95%' }}>
          <HeaderBack title={t('support_category')} />
          <AppBlock>
            <SearchBar placeholder={'Tìm kiếm...'} />
          </AppBlock>
        
          <AppBlock style={{height: '85%'}} mt={12}>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              style={{width:'100%'}}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=> navigation.navigate('RequestDetailScreen', {itemDetail: item})}>
                    <AppBlock height={210} mb={12} radius={12}>
                        <Image source={item.image} style={{width:'100%', height:'100%', borderRadius:12}}/>
                        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']} style={{width:'100%', height:'40%', position:"absolute", bottom:0, left:0 , borderRadius: 12}}>
                            <AppBlock style={{position:"absolute", bottom:0, left:0}} pl={12} pb={12}>
                                <AppText color='white' style={{textTransform:"uppercase"}} size={14} weight='600' semiBold>{item.title}</AppText>
                                <AppText color='white' style={{textTransform:"uppercase"}} size={14} weight='600' semiBold>{t('value')}: {item.amount}</AppText>
                                <AppText color='white' size={12} weight='500' semiBold>{item.timeRange}</AppText>
                            </AppBlock>
                        </LinearGradient>
                    </AppBlock>
                </TouchableOpacity>
              )}
              contentContainerStyle={{ paddingVertical: 8 }}
            />
          </AppBlock>
        </AppBlock>
      </AppBlock>
    </SafeAreaView>
  );
};

export default SearchCategoriesSupportScreen;
