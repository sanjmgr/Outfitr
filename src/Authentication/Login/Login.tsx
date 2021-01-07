import React, { useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Container,
  Button,
  TextInput,
  Checkbox,
  Text,
  Box,
  Footer,
  AuthNavigationProps,
} from '../../components';
import { CommonActions } from '@react-navigation/native';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Login = ({ navigation }: AuthNavigationProps<'Login'>) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: { email: '', password: '', remember: true },
    onSubmit: () =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        })
      ),
    validationSchema: LoginSchema,
  });
  const password = useRef<RNTextInput>(null);
  const footer = (
    <Footer
      label="Don't have an account?"
      action='Sign up here'
      onPress={() => navigation.navigate('SignUp')}
    />
  );
  return (
    <Container {...{ footer }} pattern={0}>
      <Text variant='title1' textAlign='center' marginBottom='l'>
        Welcome back
      </Text>
      <Text variant='body' textAlign='center' marginBottom='l'>
        Use your credentials below and login to your account
      </Text>

      <Box marginBottom='m'>
        <TextInput
          icon='mail'
          placeholder='Enter your email'
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          touched={touched.email}
          error={errors.email}
          autoCapitalize='none'
          autoCompleteType='email'
          returnKeyType='next'
          returnKeyLabel='next'
          onSubmitEditing={() => password.current?.focus()}
        />
      </Box>
      <TextInput
        ref={password}
        icon='lock'
        placeholder='Enter your password'
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        touched={touched.password}
        error={errors.password}
        autoCapitalize='none'
        autoCompleteType='password'
        returnKeyType='go'
        returnKeyLabel='go'
        onSubmitEditing={() => handleSubmit()}
        secureTextEntry
      />
      <Box
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        marginVertical='m'>
        <Checkbox
          label='Remember me'
          checked={values.remember}
          onChange={() => setFieldValue('remember', !values.remember)}
        />
        <BorderlessButton onPress={() => navigation.navigate('ForgotPassword')}>
          <Text variant='button' color='primary'>
            Forgot password
          </Text>
        </BorderlessButton>
      </Box>
      <Box alignItems='center' marginTop='m'>
        <Button
          variant='primary'
          label='Login into my account'
          onPress={handleSubmit}
        />
      </Box>
    </Container>
  );
};

export default Login;
