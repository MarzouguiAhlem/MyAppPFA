import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import Id from './components/Id';
import Liste from './components/Liste';
import Submit from './components/Submit';
import Input from './components/Input';
import ChatBox1 from './components/ChatBox1';


import Diseases from './components/Liste/Diseases';
import Allergies from './components/Liste/Allergies';
import Specialties from './components/Liste/Specialties';
import FilesImportation from './components/Liste/FilesImportation';
import Chatbox from './components/Liste/Chatbox';
//import Diseases from './components/Liste/Diseases';
//import Allergies from './components/Liste/Allergies';
//import Specialties from './components/Liste/Specialties';
//import Vaccination from './components/Liste/Vaccination';
import Medicines from './components/Liste/Medicines';
import Instructions from './components/Liste/Instructions';
//import FilesImportation from './components/Liste/FilesImportation';
//import Doctors from './components/Liste/Doctors';
//import BasicInformation from './components/Liste/BasicInformaton';





export default function App() {
  return (
    <><View style={styles.container}>
      <Header/>
      <Input/>
    </View>
    <View style={styles.footerContainer}>
        <Footer/>
      </View>
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
