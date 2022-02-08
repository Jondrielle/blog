import React,{useState} from "react";
import {Text,View,StyleSheet,TextInput,Button} from "react-native";

const BlogPostForm = (props) => {
	const [title, setTitle] = useState(props.initialValues.title);
	const [content, setContent] = useState(props.initialValues.content);

	return <View>
		<Text style = {styles.font}>Enter Title:</Text>
		<TextInput style = {styles.textBox} value = {title} 
			onChangeText = { (newText) => {setTitle(newText)} } />
		<Text style = {styles.font}>Enter Content:</Text>
		<TextInput style = {styles.textBox} value = {content} 
			onChangeText = { (newText) => {setContent(newText)} } />

		<Button title = "Save Blog Post" onPress = { () => {props.onSubmit(title,content)} } /> 
	</View>
}

const styles = StyleSheet.create({
	font: {
		fontSize:25
	},
	textBox:{
		borderWidth:2,
		padding:5,
		margin:5,
		marginBottom:10,
		fontSize:20
	}
});

BlogPostForm.defaultProps = {
	initialValues: {
		title: "",
		content: ""
	}
}

export default BlogPostForm;