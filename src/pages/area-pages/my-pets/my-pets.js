import React, {useState, useContext, useEffect} from 'react';
import MyContext from '../../../context/context';
import styles from './my-pets.module.css';
import Header from '../../../components/header/header';
import AreaMenu from '../../../components/menus/area-menu/area-menu';
import Title from '../../../components/title/title';
import Pic from '../../../components/image/image';
import Loader from '../../../components/loader/loader';


const MyPets = ()=>{

    const context = useContext(MyContext);
    const [myPets, setMyPets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isMyPets, setIsMyPets] = useState(false);


    

    const getMyPets = async ()=> {
        const promise = await fetch(`http://localhost:4000/my-pets/${context.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Username': `${context.email}`
            },
           
          });
        const res = await promise.json(); 
        setMyPets(res);
        setIsLoading(false);
        if(res.length>0){
            setIsMyPets(true);
        }
    }
    
    const myPetsRender = ()=>{
        return myPets.map(e=>{
            return (
                <div key={e._id} >
                    <Pic path={e.imageUrl} type='gallery' id={e._id}/>

                </div>
            )
        })
    }

    useEffect(()=>{
        getMyPets()
    }, [])

    return (
        <div>
            <Header/>
            <AreaMenu />
            <Title title="My Pets" />
            <div>
                <h3 className={styles['profile-title']}>Profile:<span>{context.email}</span> </h3>
            </div>
            {isLoading ? <div>
                <Loader/>
                </div>  : null}

            {!isLoading ? <div>
                {isMyPets ? <div className={styles['img-container']}>
                    {myPetsRender()}
                </div> : null}
                {!isMyPets ? <div>
                    <h2 className={styles['no-pet-title']}>There are no Pets yet!</h2>
                    </div>: null}
            </div> : null}
        </div>
    )
}

export default MyPets;

