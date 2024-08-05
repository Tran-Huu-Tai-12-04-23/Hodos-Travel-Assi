import ButtonCustom from "@components/ButtonCustom";
import Row from "@components/Row";
import React, { useEffect } from "react";

// import login with google
import { useAuth } from "@context/authContext";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import {
  ALERT_TYPE,
  AlertNotificationDialog,
} from "react-native-alert-notification";
import { IUser } from "src/Models/user.model";
import { authFirebase } from "src/config/firebaseWeb";

WebBrowser.maybeCompleteAuthSession();
function BtnLoginWithGoogle() {
  const { login } = useAuth();
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "160269674777-v6tbcapbjm94b38geel3oqjv93nobkgu.apps.googleusercontent.com",
    androidClientId:
      "160269674777-vgip01g5m7rpiho6k96scv8se2uuf43t.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  const handleAuthStateChange = async (user: any) => {
    if (user) {
      const userLogin: IUser = {
        uid: user.uid,
        username: user.email ?? "",
        email: user.email ?? "",
        displayName: user.displayName ?? "",
        photoURL: user.photoURL ?? "",
        createAt: user.createdAt ? new Date(parseInt(user.createdAt)) : null,
        lastLoginAt: user.lastLoginAt
          ? new Date(parseInt(user.lastLoginAt))
          : undefined,
      };

      login(userLogin, true);
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(authFirebase, credential);
    }
  }, [response]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirebase, handleAuthStateChange);

    return () => {
      unsubscribe(); // Unsubscribe from the auth state listener on component unmount
    };
  }, []);

  return (
    <Row between colGap={30} full>
      <ButtonCustom
        minWidth={"45%"}
        shadow
        primary={false}
        title={"Google"}
        style={{ padding: 10 }}
        mode="contained"
        bold
        onPress={() => {
          AlertNotificationDialog.show({
            type: ALERT_TYPE.INFO,
            title: "Sign in with Google",
            textBody:
              "They will be update the feature, this has not been implemented yet.",
          });
          // promptAsync()
        }}
      />
    </Row>
  );
}

export default BtnLoginWithGoogle;
