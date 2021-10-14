import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import Constants from "expo-constants";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import Firebase from "../config/firebase";


WebBrowser.maybeCompleteAuthSession();

const useAuth = () => {

  const dispatch = useDispatch();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "66215512151-jqur608gf2p82knv9u9hcv8top1oncn8.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      // eslint-disable-next-line camelcase
      const { id_token } = response.params;
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      console.log(credential);
      Firebase.auth()
        .signInWithCredential(credential)
        .then((credentials) => {
          console.log(credentials, "this inside");
          dispatch({ type: "SIGNIN", payload: credentials.user });
        });
    }
  }, [response]);

  const signout = () => {
    Firebase.auth()
      .signOut()
      .then(() => dispatch({ type: "SIGNOUT" }));
  };

  return { promptAsync, request, signout };
};

export default useAuth;
