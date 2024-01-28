import { Component } from "react";

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";

import { searchGallery } from "Api/api";

import css from "./app.module.css";


export class App extends Component {
  state = { 
    search:"",
    gallery:[],
    loading:false,
    error:null,
    page:1,
    modalOpen:false,
    selectedPhoto:{},

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
        gallery:data.hits?.length ? [...data.hits] : gallery,
      
      }))
      console.log(data.hits);
      
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

  loadMore = () =>{
    this.setState(({page}) => ({page:page+1}));
  }

  showModal = ({id,largeImageURL}) => {

    this.setState({
      modalOpen: true,
      selectedPhoto:
      {
        id,
        largeImageURL,
      }
    })
    console.log(this.state.selectedPhoto);
  }
  
  closeModal=()=>{
    this.setState({
      modalOpen:false,
      selectedPhoto:{}
    })
  }


  render() { 
    const {handleSearch, loadMore, showModal, closeModal}=this;
    const {gallery,loading, error,modalOpen, selectedPhoto}=this.state;
    const isGallery=Boolean(gallery.length)
  
    return (
    <div className={css.app}>
    
        <Searchbar onSubmit={handleSearch}/>
        {loading && <Loader/>}
        {error && <p>{error}</p>}
        {isGallery && <ImageGallery showModal={showModal} items={gallery} />}
        {isGallery && <Button onClick={loadMore} type="button">Load more</Button> }

        {modalOpen && <Modal close={closeModal} selectedPhoto={selectedPhoto} />
          
          
          }
    </div>
    
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
