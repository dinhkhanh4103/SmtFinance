import { Alert, ViewStyle } from 'react-native';
import { showMessage, hideMessage, Position } from 'react-native-flash-message';
import AppConstant from '../config/AppConstant';
import light from '../theme/light';

export function hideAllMessage() {
  hideMessage();
}

export function showMessageError(message?: string) {
  Alert.alert('errorTitle', message || 'error');
}
export function showMessageSuccess(
  message: string,
  autoHide = true,
  position: Position = 'top',
) {
  showMessage({ message, type: 'success', position, autoHide });
}

export function showFlashMessageError(
  message?: any,
  autoHide = true,
  position: Position = 'top',
) {
  const getString = () => {
    if (message?.message || message?.error) {
      // Nếu đối tượng lỗi là một instance của Error và có thuộc tính message
      return message.message || message?.error;
    } else if (message && typeof message === 'string') {
      // Nếu đối tượng lỗi là một chuỗi
      return message;
    } else {
      // Nếu không có thông tin lỗi cụ thể, hiển thị thông báo mặc định
      return 'An error occurred';
    }
  };
  showMessage({
    message: getString() || 'error',
    type: 'danger',
    position,
    autoHide,
    icon: 'danger',
  });
}
export function showFlashMessageSuccess(message?: any, autoHide = true) {
  const getString = () => {
    if (message?.message) {
      // Nếu đối tượng lỗi là một instance của Error và có thuộc tính message
      return message.message;
    } else if (message && typeof message === 'string') {
      // Nếu đối tượng lỗi là một chuỗi
      return message;
    } else {
      // Nếu không có thông tin lỗi cụ thể, hiển thị thông báo mặc định
      return 'Success';
    }
  };
  showMessage({
    message: getString() || 'Success',
    type: 'success',
    position: 'top',
    autoHide,
    icon: 'success',
  });
}

type AlertMessageTypes = {
  title?: string;
  message: string;
  onPress?: () => void;
  positiveTitle?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  positiveOnPress?: (...params: any) => void;
  negativeTitle?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  negativeOnPress?: (...params: any) => void;
  cancelable?: boolean;
};

// let alertMessageOnShowing = false;

export function showAlertMessage(props: AlertMessageTypes) {
  const {
    title,
    message,
    onPress,
    positiveTitle: pPositiveTitle,
    positiveOnPress,
    negativeTitle: pNegativeTitle,
    negativeOnPress,
    cancelable = false,
  } = props;
  const positiveTitle = pPositiveTitle || 'error';
  let buttonOptions = [{ text: positiveTitle, onPress: positiveOnPress }];
  if (onPress) {
    buttonOptions = [{ text: positiveTitle, onPress }];
  } else if (positiveOnPress || negativeOnPress) {
    const negativeTitle = pNegativeTitle || 'cancel';
    buttonOptions = [
      {
        text: negativeTitle,
        onPress: negativeOnPress,
      },
      {
        text: positiveTitle,
        onPress: positiveOnPress,
      },
    ];
  } else {
    buttonOptions = [{ text: positiveTitle, onPress: positiveOnPress }];
  }
  Alert.alert(title || 'errorTitle', message, buttonOptions, {
    cancelable,
  });
  // alertMessageOnShowing = true;
}

type ShowNotificationType = {
  title?: string;
  message?: string;
  onPress: () => void;
  style?: ViewStyle;
};
export function showNotification(props: ShowNotificationType) {
  const { title, message } = props;
  showMessage({
    message: title || 'alert',
    description: message || '',
    duration: 5000,
    titleStyle: { fontFamily: 'Roboto-Regular' },
    textStyle: { fontFamily: 'Roboto-Light' },
    backgroundColor: light.Primary100,
    style: {
      top: 10,
      left: 10,
      marginTop: 0,
      borderRadius: 12,
      width: AppConstant.SCREEN_WIDTH - 20,
      paddingTop: 0,
      paddingBottom: 12,
      ...props.style,
    },
    onPress: props.onPress,
  });
  // alertMessageOnShowing = true;
}
