import { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

import { searchGallery } from "Api/api";


export class App extends Component {
  state = { 
    search:"",
    gallery:[],
    loading:false,
    error:null,
    page:1,
    modalOpen:false,
    galleryDetails:{},

  } 

  async componentDidUpdate(_,prevState){
    const{search}=this.state;
    if(search && (search !== prevState.search)){
      this.fetchGallery();
      
    }
  }

  async fetchGallery(){
    const{search}=this.state;
    try{
      
      this.setState({
        loading:true,
      });
      const{data}=await searchGallery(search);
      
      this.setState(({gallery}) => ({
        gallery:data.hits?.length ? [...gallery,...data.hits] : gallery,
      }))
      console.log(this.state.gallery);
      
    }
    catch (error){
      this.setState({
        error:error.message
      })
    }
    finally{
      this.setState({
        loading:false,
      })
    }
  }









  handleSearch = ({search}) =>{
    this.setState({
  search,
})

  }


  render() { 
    const {handleSearch}=this;
    const {gallery}=this.state;
  


    return (
    <>
    <Searchbar onSubmit={handleSearch}/>
    <ImageGallery items={gallery} />
    </>
    
    );
  }
}
 


























/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};*/
