import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import Pic from '../../../components/image/image';
import styles from './details.module.css';
import SecondMenu from '../../../components/menus/second-menu/second-menu';
import MyContext from '../../../context/context';
import getPetInfo from '../../../untils/get-pet-details';


const Details = ()=> {

    const [pet, setPet] = useState({})
    const [creator, setCreator] = useState('')
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    
    const context = useContext(MyContext)
    const {id}  = useParams();

    const getInfo = async ()=>{
        const res =  await getPetInfo(id);
        console.log(res)
        setPet(res);
        setCreator(res.creator)
        setComments(res.messages)
    }
    const renderComments = ()=>{
        return comments.map((e, i)=>{
            return (
                <div key={i} className={styles['comment-container']}>
                    <p className={styles.comment}>{e.comment}</p>
                    <p className={styles['comment-author']}><span>Author:</span>{e.author}</p>
                </div>
            )
        })
    }
    const commentSubmit = async ()=>{
        setComment('')
        const data = {
            comment,
            author: context.email
        }
        const promise = await fetch(`http://localhost:4000/message/${id}`, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data) ,
       })
       const res = await promise.json()
    //    console.log(res)
       getInfo()
    }
       
    useEffect( ()=>{
       getInfo()
    },[])
    useEffect(()=>{
        renderComments()
    })
        
        return (

            <div className={styles[`${context.color}`]}>
                <Header />
                <SecondMenu />
    
                <Title title="Details"  />
           
                <div className={styles['page-container']}>

                    <div >
                        <div className={styles['notice-container']}>
                            <Pic path={pet.imageUrl} type='details' class='no-click'/>
                            <div className={styles['details-box']}>
                                <p className={styles.text}>{pet.description}</p>
                                <p className={styles.text}>Price:<span className={styles.span}>{pet.price}</span>$</p>
                                <p className={styles.text}>Autor:<span span className={styles.span}>{creator }</span></p>
                            </div>
                        </div>
                        <div className={styles['comments-container']}>
                            <h3 className={styles['comments-title']}>Comments:</h3>
                            <div>
                                <div className={styles['comment-text-box']}>
                                    <textarea value={comment} onChange={(e)=>{setComment(e.target.value)}} className={styles['comment-text']}></textarea>
                                </div>
                                <div>
                                    <button onClick={commentSubmit} className={styles['comment-button']}>Send</button>
                                </div>
                            </div>
                            <div className={styles['comment-box']}>
                                {renderComments()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    
}
export default Details;