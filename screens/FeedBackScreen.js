import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class FeedbackScreen extends React.Component {
  increaseLikes = () => {
    db.collection('Review')
      .doc(this.state.likes)
      .update({
        Likes: firebase.firestore.FieldValue.increment(1),
      });
    alert('Thank you for submitting your feedback.');
  };
  increaseDislikes = () => {
    db.collection('Review')
      .doc(this.state.dislikes)
      .update({
        Dislikes: firebase.firestore.FieldValue.increment(1),
      });
    alert('Thank you for submitting your feedback.');
  };
  constructor(props) {
    super(props);
    this.state = {
      feedbackBox: '',
      name: '',
      email: '',
      likes: 'No_Of_Likes',
      dislikes: 'No_Of_Dislikes',
    };
  }
  showReason1 = () => {
    alert(
      'In this screen, you can give me some feedback or opinion. In the first field, you can write your feedback or opinion and if I will love your opinion so I will definitely use your idea in the app. In the second field, you have to write your email so that if I will love your opinion, then I can inform you that I will use your idea in the app.If you want, you can skip it. In the third field, you have to write your name. None of your personal data used by the app will be misused or exported somewhere. Hope you will love the app.'
    );
  };
  submitFeedback = () => {
    db.collection('Feedback').add({
      feedbackBox: this.state.feedbackBox,
      name: this.state.name,
      email: this.state.email,
      date: firebase.firestore.Timestamp.now().toDate(),
    });
    this.setState({
      feedbackBox: '',
      name: '',
      email: '',
    });
    alert('Thank you for submitting your feedback.');
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showReason1}>
          <Image
            style={styles.imageIcon}
            source={{
              uri:
                'http://www.netanimations.net/Animated-gif-spinning-question-mark-picture-moving.gif',
            }}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.feedbackBox}
          placeholder="Write your feedback or opinion here."
          placeholderTextColor="black"
          value={this.state.feedbackBox}
          onChangeText={(text) => this.setState({ feedbackBox: text })}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write your e-mail id here."
          placeholderTextColor="black"
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write your name here."
          placeholderTextColor="black"
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitFeedback}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.increaseLikes}>
          <Image
            style={styles.likeButton}
            source={require('../assets/like.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.increaseDislikes}>
          <Image
            style={styles.dislikeButton}
            source={require('../assets/dislike.png')}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    flex: 1,
    backgroundColor: '#feb7b5',
  },
  header: {
    backgroundColor: '#ff615e',
    border: 'dashed',
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },

  feedbackBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 25,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'kristen itc',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: '#ff615e',
    width: '50%',
    height: 40,
    border: 'dashed',
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
  imageIcon: {
    width: 25,
    height: 45,
    marginLeft: 280,
    marginTop: -47,
  },
  likeButton: {
    width: 50,
    height: 50,
    marginTop: -40,
    marginLeft: 20,
  },
  dislikeButton: {
    width: 50,
    height: 50,
    marginTop: -40,
    marginLeft: 270,
  },
});
