import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
//import Welcome from './components/Welcome';
import Login from './components/Login';
import Welcome from './components/Welcome';
import SignUp from './components/SignUp';
import IdMedecin from './components/IdMedecin';
import IdStaffMedical from './components/IdStaffMedical';


export default function App() {
  return (
    <><View style={styles.container}>
      <Header/>
      <IdMedecin/>
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
