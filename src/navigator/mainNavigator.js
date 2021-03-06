import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile61764Navigator from '../features/UserProfile61764/navigator';
import Tutorial61763Navigator from '../features/Tutorial61763/navigator';
import NotificationList61735Navigator from '../features/NotificationList61735/navigator';
import Settings61734Navigator from '../features/Settings61734/navigator';
import Settings61726Navigator from '../features/Settings61726/navigator';
import UserProfile61724Navigator from '../features/UserProfile61724/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile61764: { screen: UserProfile61764Navigator },
Tutorial61763: { screen: Tutorial61763Navigator },
NotificationList61735: { screen: NotificationList61735Navigator },
Settings61734: { screen: Settings61734Navigator },
Settings61726: { screen: Settings61726Navigator },
UserProfile61724: { screen: UserProfile61724Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
