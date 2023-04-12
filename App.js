import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';



import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import SignUpMed from './components/SignUpMed';
import SignUpPat from './components/SignUpPat';
import LoginMed from './components/LoginMed';
import LoginPatient from './components/LoginPatient';
import IdRF from './components/IdRF'
import DocORpat from './components/DocORpat';
//import DoctorProfile from './components/DoctorProfile';
import Liste from './components/Liste';

//import Submit from './components/Submit';
//import Input from './components/Input';



import Diseases from './components/Liste/Diseases';
import Allergies from './components/Liste/Allergies';
import Specialties from './components/Liste/Specialties';
import ChatboxMed from './components/Liste/ChatboxMed';
import ChatboxPat from './components/Liste/ChatboxPat';
import Vaccination from './components/Liste/Vaccination';
import Medications from './components/Liste/Medications';
import Doctors from './components/Liste/Doctors';
//import BasicInformation from './components/Liste/BasicInformaton';



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Welcome} />
      <Drawer.Screen name="Doctor Login" component={LoginMed} />
      <Drawer.Screen name="Patient Login" component={LoginPatient} />
      <Drawer.Screen name="Doctor SignUp" component={SignUpMed} />
      <Drawer.Screen name="Patient SignUp" component={SignUpPat} />
    </Drawer.Navigator>
  );
}



export default function App() {
  return (
    <>
    <NavigationContainer>
    <View style={styles.container}>
      <Header/>
      <MyDrawer />
    </View>
    <View style={styles.footerContainer}>
        <Footer/>
      </View>
    </NavigationContainer>
   </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#14082b',
  },
  footerContainer: { backgroundColor: '#14082b' },
});
