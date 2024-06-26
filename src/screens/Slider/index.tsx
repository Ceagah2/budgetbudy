import Icon from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AppIntroSlider from "react-native-app-intro-slider";
import Clock from '../../../assets/img/clock.png';
import Graphs from '../../../assets/img/graph.png';
import Notification from '../../../assets/img/notification.png';
import Profile from '../../../assets/img/profile.png';
import { saveData } from '../../hooks/useStorage';
import { RootStackParamList } from "../../shared/navigationTypes";
import * as S from './styles';
 type HomeScreenNavigationProp = NativeStackNavigationProp<
   RootStackParamList,
   "Home"
 >;
export default function Slider(){
  const navigate = useNavigation<HomeScreenNavigationProp>();

  const slides = [
    {
      key: 1,
      title: "Ganhe tempo com orçamentos rápidos",
      description:
        "Crie orçamentos detalhados em minutos e foque no que realmente importa: desenvolver.",
      image: Clock,
    },
    {
      key: 2,
      title: "Maximize seus ganhos",
      description:
        "Entendemos que cada investimento é importante. Acompanhe seus gastos e descubra como calcular o valor justo para sua hora de trabalho.",
      image: Graphs,
    },
    {
      key: 3,
      title: "Construa seu perfil profissional",
      description:
        "Apresente suas habilidades e experiências em um perfil detalhado e atraente. Seus investimentos não serão públicos e são usados apenas para ajudar a calcular sua hora de trabalho.",
      image: Profile,
    },
    {
      key: 4,
      title: "Fique atualizado",
      description:
        "Aproveite as novas funcionalidades com atualizações contínuas. Estamos sempre melhorando!",
      image: Notification,
    },
  ];

  const RenderItem = ({ item }: any) => {
    return (
      <S.SlideContainer>
        <S.Title>{item.title}</S.Title>
        <S.Image source={item.image} />
        <S.Description>{item.description}</S.Description>
      </S.SlideContainer>
    );
  };
    const OnDone = () => {
      saveData("@onboarding", 'true')
      navigate.navigate('Home')
    };

  const RenderDoneButton = () => {
    return(
      <S.DoneButton onPress={() => OnDone()}>
        <S.DoneText>
          <Icon name='done-outline' size={20}  />
        </S.DoneText>
      </S.DoneButton>
    )
  }


  
return(
    <AppIntroSlider 
      data={slides}
      renderItem={RenderItem}
      renderDoneButton={RenderDoneButton}
      onDone={OnDone}
      showDoneButton
      showSkipButton={false}
    />
  )
}