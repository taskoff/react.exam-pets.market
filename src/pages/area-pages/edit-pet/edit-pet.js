import React from 'react';
import Title from '../../../components/title/title';
import Header from '../../../components/header/header';
import AreaMenu from '../../../components/menus/area-menu/area-menu';
import PetForm from '../../../components/forms/add-form/add-form';


const EditPet = ()=> {

        return (
            <div>
                <Header/>
                <AreaMenu />
                <Title title="Edit Pet" />
                <PetForm isEdit={true}/>

            </div>
        )
    
}

export default EditPet;