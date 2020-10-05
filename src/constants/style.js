import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 3,
    height: 140,
  },
  formLabel: {
    fontFamily: 'regular',
    fontSize: 20,
    marginBottom: 5,
  },
  label: {
    fontFamily: 'light',
    fontSize: 18,
    marginLeft: 10,
    color: 'gray',
  },
  input: {
    height: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  button: {
    marginLeft: 7,
    width: '95%',
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
    borderRadius: 4,
  },
  buttonTitle: {
    fontSize: 18,
    fontFamily: 'regular',
    color: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})
