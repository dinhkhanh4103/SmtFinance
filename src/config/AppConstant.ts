import {Dimensions, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const UI_WIDTH = 375;

export function appSize(size: number) {
  return (windowWidth * size) / UI_WIDTH;
}

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const APP_ALIGNMENT_DEFAULT = 12;

const AppConstant = {
  UI_WIDTH,
  WIDTH: windowWidth,
  HEIGHT: windowHeight,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  WIDTH_MARGIN_HORIZONTAL: UI_WIDTH - APP_ALIGNMENT_DEFAULT * 2,
  APP_ALIGNMENT_DEFAULT,
  IS_ANDROID: Platform.OS === 'android',
  IS_IOS: Platform.OS === 'ios',
  SMALL_DEVICE: windowWidth <= 375,
  LIST_SIZE: 10,
  TOP: Platform.OS === 'ios' ? 45 : 50,
  BOTTOM: Platform.OS === 'ios' ? 0 : 24,
  CameraPermissionStatus: {
    authorized: 'authorized',
    not_determined: 'not-determined',
    denied: 'denied',
    restricted: 'restricted',
  },

  LINK_TYPE: {
    LINK: 1,
    LINKEDIN: 2,
    FACEBOOK: 3,
    INSTAGRAM: 4,
    TWITTER: 5,
    YOUTUBE: 6,
    TIKTOK: 7,
    PINTEREST: 8,
    BEHANCE: 9,
  },
  ROLE_IN_ENTERPRISE: {
    owner: 1,
    director: 2,
    manager: 3,
    employee: 4,
    intern: 5,
  },
  TYPE_LIBRARY: {
    IMAGE: 1,
    VIDEO: 2,
    FILE: 3,
  },
  TYPE_FILE: {
    NOTICE_DOCUMENT: 1,
    RESEARCH_DOCUMENT: 2,
  },
  TYPE_OF_LIST_ENTERPRISE: {
    JOINED: 1,
    FORYOU: 2,
    OUSTANDING: 3,
    NEW: 4,
  },
  POST_TYPE: {
    PERSONAL: 2,
    GROUP: 1,
  },
  ROLE_USER: {
    ADMIN: 2,
    USER: 1,
    GROUP_WAITING: 0,
    GROUP_OWNER: 3,
    GROUP_MEMBERS: 4,
    CHAT_ROOM_OUTSIDE: 5,
    CHAT_ROOM_OWNER: 6,
    CHAT_ROOM_MEMBERS: 7,
  },
};

export default AppConstant;
