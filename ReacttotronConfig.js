import Reactotron, {
  networking,
  trackGlobalErrors,
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appConfig = {
  name: 'React Native',
  host: '127.0.0.1',
  // host: '192.168.177.107',
  port: 9090,
};

const configureReactotron = () =>
  Reactotron.configure(appConfig)
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative({
      asyncStorage: { ignore: ['secret'] },
    })
    .use(
      networking({
        ignoreContentTypes: /^(image)\/.*$/i,
        ignoreUrls: /\/(logs|symbolicate)$/,
      }),
    )
    .use(reactotronRedux())
    .use(trackGlobalErrors())
    .connect();

// Thay thế hàm console.log
const configureConsoleLog = () => {
  const tempLog = console.log;
  console.log = (...args) => {
    tempLog(...args);
    Reactotron.log(...args);
  };
};

// Khởi tạo Reactotron và cấu hình console.log
const reactotron = configureReactotron();
configureConsoleLog();

export default reactotron;
