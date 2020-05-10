import React from 'react';
import { StyleSheet, Dimensions, ScrollView,ImageBackground ,Image} from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import {Icon ,Header,Container,Body, View} from 'native-base';
// import { Icon,Product } from '../components';
// import Icon from ' ../components/Icon';
import Product from '../components/Product';
import bg from '../images/b1.jpg';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class Home extends React.Component {

  // renderSearch = () => {
    
  //   const { navigation } = this.props;
  //   const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

  //   return (
  //     <Input
  //       right
  //       color="black"
  //       style={styles.search}
  //       iconContent={iconCamera}
  //       placeholder="What are you looking for?"
        
  //     />
  //   )
  // }
  
  // renderTabs = () => {
    
  //   const { navigation } = this.props;

  //   return (
  //     // <Block row style={styles.tabs}>
  //     //   <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
  //     //     <Block row middle>
  //     //       {/* <Icon name="grid" family="feather" style={{ paddingRight: 8 }} /> */}
  //     //       <Text size={16} style={styles.tabTitle}>Categories</Text>
  //     //     </Block>
  //     //   </Button>
  //     //   <Button shadowless style={styles.tab} >
  //     //     <Block row middle>
  //     //       {/* <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} /> */}
  //     //       <Text size={16} style={styles.tabTitle}>Best Deals</Text>
  //     //     </Block>
  //     //   </Button>
  //     // </Block>
  //   )
  // }

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          {/* <Text>Dashboard</Text> */}
          <Product product={products[0]} horizontal onPress={() => {alert("Clicked!")}} />
          {/* <Block flex row>
            <Product product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[2]} />
          </Block> */}
          <Product product={products[3]} horizontal />
          <Product product={products[4]} full />
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {/* <Text>Home</Text> */}
        {/* {this.renderTabs} */}
        {/* {this.renderProducts()} */}
        {/* {this.renderSearch} */}


        
        <ImageBackground source={require('../images/b1.jpg')} style={{flex:1, resizeMode: 'stretch',width:width,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
          
            {/* <Header style={{backgroundColor:"#ffffff", width:width}}> */}
              <Text size={26} style={styles.tabTitle, {fontFamily: 'GoogleSans-Bold',paddingTop:10,color: '#ffffff', textShadowColor:"#000000",textShadowOffset: {width:2, height:2},textShadowRadius:10, }} > 
              <Icon name="home" style={{color:'#ffffff'}} /> Home
              </Text>
            {/* </Header> */}

            
        {/* </ImageBackground> */}

{/* 
        <Block row style={styles.tabs}>


        </Block> */}
        
        <Input
        right
        color="black"
        style={styles.search}
        // iconContent={iconCamera}
        placeholder="What are you looking for?"
        
        />

      {/* <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} >
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block> */}
      

      {this.renderProducts()}
      </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 5,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    paddingTop:10
  },
});
