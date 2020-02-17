import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  TextInput,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';
import Listmovie from './listMovie';
import Loading from '../../container/loading/index';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieName: "",
      releaseYear: "",
      movieId: undefined,
      saveEdit: false
    };
    this.handleEdit=this.handleEdit.bind(this);
    this.checkInput=this.checkInput.bind(this);
    this.aftertoggle=this.aftertoggle.bind(this);
  }

  handleEdit(id, moviename, releaseYear){
    this.setState({movieId: id})
    this.setState({movieName: moviename}),
    this.setState({releaseYear: releaseYear})
    this.setState({saveEdit: true})
  }

  checkInput(){
    if(this.state.movieName.trim()==="" && this.state.releaseYear.trim()===""){
      alert('you should enter movie name or release year')
      return;
    }
    else if(this.state.saveEdit){
      this.props.onEditMovie({id: this.state.movieId ,name: this.state.movieName, releaseYear: this.state.releaseYear})
    }
    else{
      this.props.onAddMovie({
        name: this.state.movieName,
        releaseYear: this.state.releaseYear
      })
    }
  }

  aftertoggle(){
    this.checkInput(),
    this.setState({movieName: ''}),
    this.setState({releaseYear: ''})
    this.setState({saveEdit: false})
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
        <Text style={{ margin: 10, color: "black", fontSize: 20 }}>
          New movie information
        </Text>
        <View style={{ height: 100, margin: 10 }}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ movieName: text })}
            value={this.state.movieName}
            placeholder="Enter new movie name"
          />
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={text => this.setState({ releaseYear: text })}
            value={this.state.releaseYear}
            placeholder="Release year"
          />
        </View>
        <View style={{ height: 70, flexDirection: 'row' }}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              this.props.onFetchMovies();
            }}
          >
            <Text style={{ fontSize: 18, color: 'black' }}>Fetch movies</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {this.aftertoggle()}}
          >
            {this.state.saveEdit ? 
            <Text style={{ fontSize: 18, color: 'black' }}>Save Movie</Text>:
            <Text style={{ fontSize: 18, color: 'black' }}>Add Movie</Text>
            }
          </TouchableHighlight>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Loading/>
        </View>
        <FlatList
          data={this.props.movies.data}
          removeClippedSubviews
         //keyExtractor={(item, key) => item.id}
          renderItem={({ item, index }) =>
       { return(
         <View key={item.id}>
          <Listmovie {...item} 
          index={index} handleEd={this.handleEdit}
          onEditMovie={this.props.onEditMovie}
          onDeleteMovie={this.props.onDeleteMovie}
          />
          </View>
        )}
        }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    padding: 10,
    margin: 10,
    width: 150,
    height: 45,
    borderWidth: 1,
    borderColor: 'orange',
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: 'darkviolet',
  },
  listmovie: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  }
});

