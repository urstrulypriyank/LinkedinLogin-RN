import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.bgWhite}>
        {/* Headder */}
        <View
          style={[
            styles.flexRow,
            {
              justifyContent: 'space-between',
              margin: 5,
              padding: 5,
            },
          ]}>
          {/* Top LEFT */}
          <TouchableOpacity>
            <View style={[styles.flexRow, {alignItems: 'center'}]}>
              <Text style={[styles.headderText]}>Linkedin</Text>
              <Image
                source={require('./linkedin.jpg')}
                style={styles.headderLogo}
              />
            </View>
          </TouchableOpacity>
          {/* Top Rigth */}
          <TouchableOpacity>
            <Text style={styles.headderText}>Join Now</Text>
          </TouchableOpacity>
        </View>

        {/* Form Body */}
        <View style={styles.formBody}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 35}}>
            Sign in
          </Text>
          <TextInput style={styles.formEmail} placeholder="Email or Phone" />
          <TextInput
            style={styles.formPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View style={[styles.flexRow, {marginTop: 10}]}>
            <CheckBox title="My Checkbox" checked={isChecked} />
            <Text>Remember To </Text>
            <Text style={{color: LinkedinColor, fontWeight: 'bold'}}>
              Learn More
            </Text>
          </View>
          <Text
            style={{marginTop: 20, fontWeight: 'bold', color: LinkedinColor}}>
            Forgot Passowrd
          </Text>
          {/* Continue Submit Button */}
          <TouchableOpacity>
            <View
              style={{
                margin: 5,
                padding: 10,
                backgroundColor: LinkedinColor,
                alignItems: 'center',
                borderRadius: 50,
                marginTop: 30,
              }}>
              <Text style={styles.fontBold}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Or sepetration */}
        <View
          style={[
            styles.flexRow,
            {alignItems: 'center', justifyContent: 'center', margin: 10},
          ]}>
          <View style={[{width: '45%', height: 1}, styles.bgBlack]}></View>
          <Text>Or</Text>
          <View style={[{width: '45%', height: 1}, styles.bgBlack]}></View>
        </View>

        {/* Footer other login options */}
        <View>
          <TouchableOpacity>
            <View
              style={{
                borderColor: 'wihite',
                marginHorizontal: 10,
                padding: 10,

                alignItems: 'center',
                borderRadius: 50,
                marginTop: 30,
                borderWidth: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./google.jpg')}
                style={{width: 20, height: 20}}
              />
              <Text style={[styles.fontBold, {paddingLeft: 10}]}>
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                {
                  borderColor: 'black',
                  marginHorizontal: 10,
                  padding: 10,

                  alignItems: 'center',
                  borderRadius: 50,
                  marginTop: 30,
                  borderWidth: 1,
                  justifyContent: 'center',
                },
                styles.flexRow,
              ]}>
              <Image
                source={require('./apple.jpg')}
                style={{width: 20, height: 20}}
              />
              <Text style={[styles.fontBold, {paddingLeft: 10}]}>
                Sign in with Apple
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const LinkedinColor = '#0077B5';
const styles = StyleSheet.create({
  headderLogo: {
    width: 22,
    height: 22,
  },
  headderText: {
    fontSize: 22,
    color: LinkedinColor,
    fontWeight: 'bold',
  },
  flexRow: {flexDirection: 'row'},
  bgWhite: {
    height: '100%',
    // backgroundColor: 'white',
  },
  bgBlack: {
    color: 'white',
    backgroundColor: 'black',
  },
  formBody: {
    margin: 10,
    marginTop: 40,
    padding: 5,
  },
  formEmail: {
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  formPassword: {
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  fontBold: {
    fontWeight: 'bold',
  },
});
