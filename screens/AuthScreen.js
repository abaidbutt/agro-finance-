import React, { useState } from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";
import { Block, Text } from "../components";
import { auth, db } from "../config/firebase";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
const Login = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    const { email, password } = credential;
    try {
      const credentials = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const { uid } = credentials.user;
      console.log(credentials);
      if (uid) {
        await db
          .collection("Users")
          .doc(uid)
          .set({
            uid,
            email,
          })
          .then(() => {
            dispatch({ type: "SIGNIN", payload: credentials.user });
          });
      }
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        const credentials = await auth.signInWithEmailAndPassword(
          email,
          password
        );
        const { uid } = credentials.user;
        dispatch({ type: "SIGNIN", payload: credentials.user });
      }
      console.log(err);
    }
  };
  return (
    <View
      style={{ display: "flex", justifyContent: "center", marginVertical: 50 }}
    >
      <View style={{ marginHorizontal: 15 }}>
        <Text h1 center>
          SignIn{" "}
        </Text>
        <View style={{ marginVertical: 15 }}>
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setCredential({ ...credential, email: text })
            }
            value={credential.email}
            placeholder="email"
          />
          <Text p> Must be in Email character</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setCredential({ ...credential, password: text })
            }
            value={credential.password}
            placeholder="password"
            keyboardType="visible-password"
          />
          <Text> must be 6 character</Text>
        </View>
        <Button
          title="Signin First"
          onPress={handleSubmit}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default Login;
