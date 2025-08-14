import {Image, Text,View, Pressable} from "react-native";
import{style}from "./styles";
import{Ionicos}from "@expo/ector-icons";

const imageSource= require ("@/assentes/images/header.jpg");

export default function Header({title, back = false}) {
    const router = useRouter();
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image}/>
            </View>
            <View style={styles.titleContainer}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    {
                        back &&
                        <Pressable onPress={() => router.back()} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={28} color="black"/>
                            </Pressable>   
                    }
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={{fontSize: 16}}>
                    {!back? "encontre seu pokemon favorito aqui": "Aqui esta seu pokemon"}

                </Text>
            </View>
        </View>
    );
