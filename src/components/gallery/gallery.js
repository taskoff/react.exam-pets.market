import React from 'react';
import Pic from '../image/image';
import styles from './gallery.module.css';
import BacgroundContext from '../../context/details-background';

class ImgGallery extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            images: [
            ],

        }
    }
    static contextType = BacgroundContext;

    componentDidMount(){
        this.getImages()
    }
    getImages = async () => {
        const {pet} = this.props
        const promise = await fetch(`http://localhost:4000/${pet}`)
        const images = await promise.json()
        console.log(images)
        this.setState({
          images
        })
        
      }
    renderImages(){

        const {type, pet} = this.props
        const {images} = this.state;
        return images.map(i =>{
            return <Pic key={i._id} path={i.imageUrl} type={type} pet={pet} id={i._id} />
        })
    }
    render() {
        return (
            
                <div className={styles.gallery}>
                    {this.renderImages()}
                </div>
           
        )
    }
}

export default ImgGallery;