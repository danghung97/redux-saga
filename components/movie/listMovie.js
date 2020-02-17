import React, {Component} from 'react';
import LinearGradient  from 'react-native-linear-gradient';
import Shimmer from './shimmer';
import{
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class listMovie extends Component{
    constructor(props){
        super(props);
        this.state={
            isVisible: false,
        }
    }

    componentWillMount(){
        setTimeout(()=>{
            this.setState({
                isVisible: true
            })
        }, 2000)
    }

    render(){
        const swipeSetting = {
            autoClose: true,
            right:[{          
                text: 'Edit', type: 'primary',
                onPress: ()=>{
                    this.setState({openEdit: true}),
                    this.props.handleEd(this.props.id, this.props.name, this.props.releaseYear)
                }
            },
            {
                text: 'Delete', type: 'delete',
                onPress:()=>{
                    this.props.onDeleteMovie({id: this.props.id, name: this.props.name, releaseYear: this.props.releaseYear})
                }
            }
            ],
            
            rowid: this.props.id
        }
        return(
            <Swipeout {...swipeSetting}>
                <Shimmer autoRun={true} visible={this.state.isVisible} style={{height: 27}}>
                    <Text
                    style={[
                        styles.listmovie,
                        {
                        backgroundColor:
                            this.props.index % 2 === 0 ? 'blue' : 'green',
                        },
                    ]}
                    >
                    {`${this.props.name},releaseYear=${this.props.releaseYear}`}
                    </Text>
                </Shimmer>
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    listmovie: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
      }
});


