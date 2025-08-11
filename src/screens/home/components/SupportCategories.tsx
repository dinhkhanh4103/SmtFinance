import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import AppBlock from '../../../components/view/AppBlock';
import AppText from '../../../components/text/AppText';
import light from '../../../theme/light';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const SupportCategories = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const data = [
    {
        image: require('../../../../assets/images/support_category_1.png'),
        title: 'HỖ TRỢ ĐI DU HỌC NHẬT',
        companyName: 'Công ty cổ phần Smiletech',
        avatar: require('../../../../assets/images/avatar_smt.png'),
        supportType: 'Nhận hỗ trợ uy tín',
        date: '24/05/2024',
        timeRange: '24 tháng 5, 2024 - 30 tháng 5, 2024',
        term: '6 tháng',
        value: '100.000.000 VNĐ',
        interestRate: '18.0 - 19.8%',
        description: [
        '✨ SỰ KIỆN "BLOOMING GRAND PARK - BỪNG SẮC XUÂN 2024" – NHÀ SANG ĐÓN TẾT, SÁNG BỪNG SỨC XUÂN CÙNG CÁC ĐẠI TIỆN ÍCH VÀ CHÍNH SÁCH ƯU ĐÃI HẤP DẪN 💯', // Từ hình 2
        'Cơ hội "Đặc Biệt" để sở hữu căn hộ tại Vinhomes Grand Park, với những chính sách và chương trình hỗ trợ lãi suất đột phá từ Chủ Đầu Tư, sở hữu căn hộ Vinhomes Grand Park chưa bao giờ dễ dàng đến thế. ✨ Chào đón các "ĐẠI TIỆN ÍCH" chỉ có tại Vinhomes Grand Park sẽ ra mắt năm 2024.', // Từ hình 2
        '✨ Cơ hội sở hữu những căn hộ đẹp nhất tất cả các phân khu của Vinhomes Grand Park với "Giỏ hàng đặc biệt - Tài lộc chào xuân 2024" ✨ Cùng chương trình Lucky Draw – với nhiều phần quà hấp dẫn. ✨ Check in & hái lộc xuân. ✨ Chương trình chào xuân 2024', // Từ hình 2
        ],
    },
    {
        image: require('../../../../assets/images/support_category_2.png'),
        title: 'HỖ TRỢ ĐI DU HỌC NHẬT',
        companyName: 'Công ty cổ phần Smiletech',
        avatar: require('../../../../assets/images/avatar_smt.png'),
        supportType: 'Nhận hỗ trợ uy tín',
        date: '24/05/2024',
        timeRange: '24 tháng 5, 2024 - 30 tháng 5, 2024',
        term: '6 tháng',
        value: '100.000.000 VNĐ',
        interestRate: '18.0 - 19.8%',
        description: [
        '✨ SỰ KIỆN "BLOOMING GRAND PARK - BỪNG SẮC XUÂN 2024" – NHÀ SANG ĐÓN TẾT, SÁNG BỪNG SỨC XUÂN CÙNG CÁC ĐẠI TIỆN ÍCH VÀ CHÍNH SÁCH ƯU ĐÃI HẤP DẪN 💯', // Từ hình 2
        'Cơ hội "Đặc Biệt" để sở hữu căn hộ tại Vinhomes Grand Park, với những chính sách và chương trình hỗ trợ lãi suất đột phá từ Chủ Đầu Tư, sở hữu căn hộ Vinhomes Grand Park chưa bao giờ dễ dàng đến thế. ✨ Chào đón các "ĐẠI TIỆN ÍCH" chỉ có tại Vinhomes Grand Park sẽ ra mắt năm 2024.', // Từ hình 2
        '✨ Cơ hội sở hữu những căn hộ đẹp nhất tất cả các phân khu của Vinhomes Grand Park với "Giỏ hàng đặc biệt - Tài lộc chào xuân 2024" ✨ Cùng chương trình Lucky Draw – với nhiều phần quà hấp dẫn. ✨ Check in & hái lộc xuân. ✨ Chương trình chào xuân 2024', // Từ hình 2
        ],
    },
  ];
  return (
    <AppBlock alignItems="center">
      <AppBlock style={{ width: '95%' }}>
        <AppBlock row justifyContent="space-between" alignItems="flex-end">
          <AppText size={18} weight="600" semiBold>
            {t('support_category')}
          </AppText>
          <TouchableOpacity onPress={()=>{navigation.navigate('SearchCategoriesSupportScreen')}}>
            <AppText size={14} weight="500" color={light.Primary}>
              {t('see_more')}
            </AppText>
          </TouchableOpacity>
        </AppBlock>
      </AppBlock>
      <AppBlock mt={12} style={{width:'100%'}}>
        <FlatList
            horizontal
            data={data}
            style={{height: 270}}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={()=> navigation.navigate('RequestDetailScreen', {itemDetail: item})}>
                    <AppBlock
                        // width={256}
                        // height={256}
                        mr={8}
                        style={{
                            width: 256,
                            height: 256,
                            backgroundColor: '#fff',
                            borderRadius: 12,
                            marginLeft: width*0.025,
                            // iOS: bóng đều
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.1,
                            shadowRadius: 8,

                            // Android: elevation để tạo bóng
                            elevation: 5,
                        }}
                    >
                        <Image
                        source={item.image}
                        style={{ width: '100%', height: 113 }}
                        resizeMode="cover"
                        />
                        <AppBlock ph={8} pv={8}>
                            <AppText size={16} weight='500'>{item.title}</AppText>
                            <AppText color='#FFB321' size={14}>★ ★ ★ ★ ★</AppText>
                            <AppBlock row mt={6}>
                                <AppText size={14} weight='500'>{t('post_date')}: </AppText>
                                <AppText size={14} weight='500'>{item.date}</AppText>
                            </AppBlock>
                            <AppBlock row alignItems='center' mt={6}>
                                <AppText size={14} weight='500'>{t('value')}:</AppText>
                                <AppText ml={4} size={16} weight='500' color={light.Primary}>{item.value}</AppText>
                            </AppBlock>
                            <AppBlock row mt={6}>
                                <AppText size={14} weight='500'>{t('limit')}: </AppText>
                                <AppText size={14} weight='500' color={light.Primary}>{item.term}</AppText>
                            </AppBlock>
                        </AppBlock>
                    </AppBlock>
                </TouchableOpacity>
            )}
            keyExtractor={(_, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
        />
      </AppBlock>
    </AppBlock>
  );
};

export default SupportCategories;
