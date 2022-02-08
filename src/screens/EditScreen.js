import React,{useContext,useState} from "react";
import {View,Text,StyleSheet,TextInput} from "react-native";
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = (props) => {

	const blogID = props.navigation.getParam("id");
	const {state,editBlogPost} = useContext(Context);
	const blogPost = state.find ( (currentPost) => {
		return currentPost.id === blogID
	});

	return <View>
		<BlogPostForm onSubmit = { (title,content) => {
			console.log(editBlogPost(blogID,title,content))} } 
			initialValues = { {title:blogPost.title, content: blogPost.content} }/>
	</View>
}

const styles = StyleSheet.create({});



export default EditScreen;