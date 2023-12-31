import React, { useState } from "react";
import {
  ButtonNextVaccine,
  ButtonRemember,
  ContainerBackFluxo,
  ContainerButtonsHeaderFluxo,
  ContainerDataPatient,
  ContainerHeaderFluxo,
  ContainerHeaderInformationPerson,
  ContainerHeaderVaccines,
  ContainerImagePerson,
  ContainerInputCalendarVaccines,
  ContainerSafeHeader,
  ContainerTitles,
  IconButtonNextVaccine,
  IconTime,
  IconWrapper,
  IconWrapperCalendar,
  ImageCalendar,
  ImagePerson,
  InputCalendarVaccines,
  SubTitleHeaderFluxo,
  TextButtonNextVaccine,
  TextButtonRemember,
  TextButtonVaccine,
  TextDataPatient,
  TitleHeaderFluxo,
  TitleHeaderVaccines,
} from "./header-fluxo-style";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";
import Person from "../../assets/imgUserItem.png";
import Calendar from "../../assets/calendar.png";
import Time from "../../assets/time.png";
import Doctor from "../../assets/imgDoctor.png";

//Style header doctor
import {
  ContainerHeaderInformationDoctor,
  ContainerImageDoctor,
  ContainerInfoDoctor,
  ContainerSubtitles,
  ImageDoctor,
  SubTitleHeaderName,
  SubTitleHeaderSpecialty,
  TitleHeaderDoctor,
} from "./header-fluxo-doctor-style";

const HeaderFluxo = (props: {
  title: string | undefined;
  backButton: boolean;
  buttonVaccine: boolean;
  typeHeader: "patient" | "doctor";
  photo?: any;
}) => {
  const navigation = useNavigation<propsStack>();
  const [date, setDate] = useState("");

  return (
    <ContainerSafeHeader>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ContainerHeaderFluxo>
        {props.backButton === true ? (
          <ContainerBackFluxo onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" color="#000" />
          </ContainerBackFluxo>
        ) : null}
        {props.typeHeader === "patient" && (
          <ContainerHeaderInformationPerson>
            <ContainerImagePerson>
              <ImagePerson source={props.photo ? props.photo : Person} />
            </ContainerImagePerson>
            <ContainerTitles>
              <TitleHeaderFluxo>{props.title}</TitleHeaderFluxo>
              {props.backButton === true && props.buttonVaccine === true ? (
                <>
                  <SubTitleHeaderFluxo>
                    Sua próxima consulta está agendada para:
                  </SubTitleHeaderFluxo>
                  <ContainerDataPatient>
                    <ImageCalendar source={Calendar} />
                    <TextDataPatient>12/10/2023</TextDataPatient>
                  </ContainerDataPatient>
                  <ContainerButtonsHeaderFluxo>
                    <ButtonNextVaccine>
                      <TextButtonNextVaccine>
                        Sua próxima vacina: 01/05{" "}
                      </TextButtonNextVaccine>
                      <IconButtonNextVaccine>
                        <Icon name="chevron-back-outline" color="#000" />
                      </IconButtonNextVaccine>
                    </ButtonNextVaccine>
                    <ButtonRemember activeOpacity={0.8}>
                      <TextButtonRemember>Lembrar</TextButtonRemember>
                      <IconTime source={Time} />
                    </ButtonRemember>
                  </ContainerButtonsHeaderFluxo>
                </>
              ) : (
                <ContainerHeaderVaccines>
                  <TitleHeaderVaccines>
                    Busque em seu histórico
                  </TitleHeaderVaccines>
                  <ContainerInputCalendarVaccines>
                    <IconWrapper>
                      <Icon
                        name="search"
                        size={25}
                        color="#36454F"
                        style={{ marginLeft: 5 }}
                      />
                    </IconWrapper>
                    <InputCalendarVaccines
                      onChangeText={(text: string) => {
                        setDate(text);
                      }}
                      value={date}
                      placeholder="Data"
                      placeholderTextColor="#A9A9A9"
                    />
                    <IconWrapperCalendar>
                      <Icon
                        name="calendar"
                        size={25}
                        color="#36454F"
                        style={{ marginRight: 10 }}
                      />
                    </IconWrapperCalendar>
                  </ContainerInputCalendarVaccines>
                </ContainerHeaderVaccines>
              )}
            </ContainerTitles>
          </ContainerHeaderInformationPerson>
        )}

        {props.typeHeader === "doctor" && (
          <ContainerHeaderInformationDoctor>
            <TitleHeaderDoctor>Profissional responsável</TitleHeaderDoctor>
            <ContainerInfoDoctor>
              <ContainerImageDoctor>
                <ImageDoctor
                  source={
                    props.photo
                      ? { uri: `data:image/jpeg;base64,${props.photo}` }
                      : Person
                  }
                />
              </ContainerImageDoctor>
              <ContainerSubtitles>
                <SubTitleHeaderName>{props.title}</SubTitleHeaderName>
                <SubTitleHeaderSpecialty>Clínico Geral</SubTitleHeaderSpecialty>
              </ContainerSubtitles>
            </ContainerInfoDoctor>
          </ContainerHeaderInformationDoctor>
        )}
      </ContainerHeaderFluxo>
    </ContainerSafeHeader>
  );
};

export default HeaderFluxo;
