import React,{useState,useContext} from "react";
import {TouchableOpacity,Text,StyleSheet,View,TextInput,Button} from "react-native";
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = (props) => {
	const {addBlogPost} = useContext(Context);
	
	return <View>
		<BlogPostForm onSubmit = { () => {
		addBlogPost(title,content,() => {props.navigation.navigate("Index")} )
	   }}/>
	</View>

}

const styles = StyleSheet.create({});

export default CreateScreen;