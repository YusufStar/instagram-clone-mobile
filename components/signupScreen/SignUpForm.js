import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email().required("An email is required"),
  username: Yup.string().required().min(2, "A username is required"),
  password: Yup.string()
    .required()
    .min(8, "Your password has to have at least 8 characters"),
});

const SignUpForm = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={SignUpSchema}
        validateOnMount={true}
      >
        {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Email"
                keyboardType="email-adress"
                textContentType="emailAdress"
                autoFocus={true}
                autoCapitalize="none"
                placeholderTextColor="#444"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor: 2 > values.username.length || values.username.length < 30 ? "#ccc" : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Username"
                textContentType="username"
                autoCapitalize="none"
                placeholderTextColor="#444"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.password.length >= 6 ||
                    Validator.validate(values.password)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Password"
                autoCapitalize="none"
                textContentType="password"
                autoCorrect={false}
                secureTextEntry={true}
                placeholderTextColor="#444"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>

            <Pressable
              disabled={!isValid}
              onPress={handleSubmit}
              style={styles.button(isValid)}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#6BB0F5" }}>Log In</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,    
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});
