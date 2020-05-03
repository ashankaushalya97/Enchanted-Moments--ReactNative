import React,{Component} from 'react';
import { View ,Text,StyleSheet,Image,Animated} from 'react-native';
import LottieView from 'lottie-react-native';

import logo from "../images/Logo.png";
import { block } from 'react-native-reanimated';
import { Actions } from 'react-native-router-flux';

const switchToAuth = () => {
    Actions.replace("auth");
}

class LoadingScene extends Component{

    state = {
        LogoAnime: new Animated.Value(0),
        LogoText: new Animated.Value(0),
        loadingSpinner:false,
    }

    componentDidMount(){
        const {LogoAnime,LogoText} = this.state;
        Animated.parallel([
            Animated.spring(LogoAnime,{
                toValue:1,
                tension:10,
                friction:2,
                duration: 1000,
                useNativeDriver:false,
            }).start(),

            Animated.timing(LogoText,{
                toValue:1,
                duration:2000,
                useNativeDriver:false,
            }),
        ]).start(() => {
            this.setState({
                loadingSpinner:true,
            });
            setTimeout(switchToAuth,1000);
        });
    }

    render(){
        return (
            <View style={styles.container}>
                {/* <Animated.View style={{
                    opacity:this.state.LogoAnime,
                    top: this.state.LogoAnime.interpolate({
                        inputRange: [0,1],
                        outputRange: [80,0],
                    }),
                }}>
                    <Image source={logo}/>
                </Animated.View> */}
                    <LottieView style={styles.logoLottie} source={require('../images/5459-camera.json')} autoPlay loop />
                <View>
                    <Animated.View style={{opacity: this.state.LogoText}}>
                        <Text style={styles.logoText}>Enchanted Moments</Text>
                    </Animated.View>
                </View>
                
            </View>
        );
    }
}

export default LoadingScene;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#4FC3F7',
        justifyContent:'center',
        alignItems:'center',
    },

    logoText: {
        fontFamily:"DancingScript-Bold",
        color: '#FFFFFF',
        fontSize: 35,
        marginTop: 29.1,
        fontWeight:'500',
        paddingBottom:10,
        textShadowColor:"#000000",
        textShadowOffset: {width:6, height:6},
        textShadowRadius:10,
    },  
    logoLottie: {
        // width:200,
        // height:200,
        
    },
});