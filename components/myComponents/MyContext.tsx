import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CartContext } from '@/app/(drawer)/(tabs)/index'
import AsyncStorage from '@react-native-async-storage/async-storage';


const MyContext = ({ children }: any) => {
  const [signup, setSignup] = useState({
    name: '',
    email: '',
    password: '',
    re_password: '',
    gender: ''
  });

  const [allsignup, setAllsignup] = useState([]);
  const [wish, setWish] = useState<any>([]);
  const [cart, setCart] = useState<any>([]);





  useEffect(() => {
    const loadData = async () => {
      try {
        const cartData: any = await AsyncStorage.getItem("cart");
        const wishData: any = await AsyncStorage.getItem("wish");
        const dataData: any = await AsyncStorage.getItem('signup');

        if (cartData.length > 0 && cart.length === 0)
          setCart(JSON.parse(cartData));

        if (dataData.length > 0 && allsignup.length === 0)
          setAllsignup(JSON.parse(dataData))

        if (wishData.length > 0 && wish.length === 0)
          setWish(JSON.parse(wishData));

      } catch (e) {
        console.log("Error loading data:", e);
      }
    };

    loadData();
  }, []);


  
  useEffect(() => {
    const cartBaba = async () => {
      
      await AsyncStorage.setItem("signup", JSON.stringify(allsignup));
      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      await AsyncStorage.setItem("wish", JSON.stringify(wish));
    
    };
    cartBaba();
  }, [cart, wish, allsignup]);





  const addANEWMember = (newMember) => {
    const { name, email, password, re_password, gender } = newMember;

    if (!name || !email || !password || !re_password || !gender) {
      Alert.alert("Error", "Please fill all fields");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Enter a valid email");
      return false;
    }

    if (password.length < 6) {
      Alert.alert("Weak Password", "Minimum 6 characters");
      return false;
    }

    if (password !== re_password) {
      Alert.alert("Mismatch", "Passwords do not match");
      return false;
    }

    setAllsignup([...allsignup, newMember]);
    setSignup({ name: '', email: '', password: '', re_password: '', gender: '' });

    return true;
  };


  const addToCart = (newItem: any) => {
    const existing = cart.find((ele: any) => ele.id === newItem.id);
    if (existing) {
      const updatedCart: any = cart.map((ele: any) =>
        ele.id === newItem.id ? newItem : ele
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const deleteFromCart = (id1: any) => {
    const filteredArray = cart.filter((ele: any) => ele.id !== id1);
    setCart(filteredArray);
  };

  const addToWish = (newItem: any) => {
    setWish([...wish, newItem]);
  };

  const deleteFromWish = (id1: any) => {
    const filteredArray = wish.filter((ele: any) => ele.id !== id1);
    setWish(filteredArray);
  };

  return (
    <CartContext.Provider value={{ addToCart, deleteFromCart, addToWish, deleteFromWish, signup, setSignup, addANEWMember, allsignup, setAllsignup, wish, setWish, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default MyContext;

const styles = StyleSheet.create({});
