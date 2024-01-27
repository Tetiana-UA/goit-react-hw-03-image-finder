import { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";

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
    const{search, page}=this.state;
    if(search && (search !== prevState.search || page !== prevState.page)){
      this.fetchGallery();
      
    }
  }

  async fetchGallery(){
    const{search,page}=this.state;
    try{
      
      this.setState({
        loading:true,
      });
      const{data}=await searchGallery(search, page);
      
      this.setState(({gallery}) => ({
        gallery:data.hits?.length ? [...gallery,...data.hits] : gallery,
      
      }))
      console.log(this.state.page);
      
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

  loadMore = () =>{
    this.setState(({page}) => ({page:page+1}));
  }


  handleSearch = ({search}) =>{
    this.setState({
  search,
})

  }


  render() { 
    const {handleSearch, loadMore}=this;
    const {gallery,loading, error}=this.state;
    const isGallery=Boolean(gallery.length)
  


    return (
    <>
    
    <Searchbar onSubmit={handleSearch}/>
    {loading && <Loader/>}
    {error && <p>{error}</p>}
    {isGallery && <ImageGallery items={gallery} />}
    {isGallery && <Button onClick={loadMore} type="button">Load more</Button> }
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
