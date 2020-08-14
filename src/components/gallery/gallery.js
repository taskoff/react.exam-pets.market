import React from 'react';
import Pic from '../image/image';
import styles from './gallery.module.css';
import Loader from '../loader/loader';

class ImgGallery extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            images: [],
            isLoading: false
        }
    }

    componentDidMount(){
        this.getImages()
    }
    getImages = async () => {
        const {pet} = this.props
        const promise = await fetch(`http://localhost:4000/${pet}`)
        const images = await promise.json()
        this.setState({images})
        this.setState({isLoading: true})
      }
    renderImages(){

        const {type, pet} = this.props
        const {images} = this.state;
        return images.map(i =>{
            return <Pic key={i._id} path={i.imageUrl} type={type} pet={pet} id={i._id} price={i.price} isGallery={true} />
        })
    }
    render() {
        return (
                <div>
                    {!this.state.isLoading ? <div>
                        <Loader />
                    </div> : null}

                    {this.state.isLoading ? <div className={styles.gallery}>
                        {this.renderImages()}
                    </div> : null}
                </div>
            
           
        )
    }
}

export default ImgGallery;