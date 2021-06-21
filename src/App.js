import React, { Component } from 'react';
import getArr from './utils/API';
import Header from './containers/Header';
import SearchForm from './containers/SearchForm';
import ImageGallery from './containers/ImageGallery';
import Button from "./containers/Button";
import Loader from "react-loader-spinner";
import Modal from './component/Modal';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//https://pixabay.com/api/?key=21268272-c5791a68db62a23d91af73a0c&q=yellow+flowers&page=1&image_type=photo&orientation=horizontal&per_page=12

import './assets/styles/App.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    showModal: false,
    isLoading: false,
    error: null,
    modalImg: '',
    modalAlt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.onSubmitHandler()
    }
  }
  onSubmit = (data) => {
    this.setState((prev) => ({
      query: data,
      page: 1,
      images: [],
      error: null
    }))
  }
  
  onSubmitHandler = () => {
    const { query, page } = this.state;

      const urlBase = {
        q: query,
        page: page
      };
    
    this.setState({ isLoading: true });
    
    getArr(urlBase)
      .then(res => {
            this.setState((prev) => ({
              images: [...prev.images, ...res],
              page: prev.page + 1,
            }))
      }).catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getModalImg = (img, alt) => {
    this.setState(() => ({
      modalImg: img,
      modalAlt: alt,
    }))
  }
  
  render() {
    const { showModal, images, isLoading } = this.state;

    return (
      <div className="App">

        <Header>
          <SearchForm onSubmit={this.onSubmit} />
        </Header>

        {images.length > 0
          ? <>
            <ImageGallery
              images={images}
              onClick={this.toggleModal}
              returnImg={this.getModalImg}
            />
              <Button onClick={this.onSubmitHandler} />
          </> : null}
        
        {isLoading && <Loader type="Bars" color="#00BFFF" height={80} width={80} />}

        {showModal && <Modal onClose={this.toggleModal}>
          <img src={this.state.modalImg} alt={this.state.alt}/>
          </Modal>}
      </div>
    );
  }
}

export default App;
