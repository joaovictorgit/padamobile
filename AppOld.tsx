import React from "react";
import "react-native-gesture-handler";
import Route from "./src/routes/Stack/index";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
}

/**
 *APP_IDENTIFIER = "com.padamobile.teste"
PROJECT_NAME = "padamobile"
GIT_ACCESS = ENV["GIT_ACCESS"]

update_fastlane if is_ci

before_all do
    ENV["CI_KEYCHAIN_NAME"] ||= "keychain_nome_aleatorio"
    ENV["CI_KEYCHAIN_PASSWORD"] ||= "keychain_senha_aleatoria"
end

platform :android do
    desc "Deliver QA version to QA team"
    lane :deploy_qa do
        gradle(task: 'clean', project_dir: 'android/')

        gradle(
            project_dir: "android/"
            task: "assemble",
            flavor: "Staging",
            build_type: "Release"
        )
    end

    desc "Deliver production version to Google Play Console"
    lane :deploy_production do
        gradle(
            project_dir: "android/",
            task: "assemble",
            flavor: "Production",
            build_type: "Release"
        )
        upload_to_play_store(track: 'production')
    end
end
 */
