import React from 'react';
import styles from './form.moduke.css';
import Input from '../Input/input';

class Form extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <form>
                    <Input />
                </form>
            </div>
        )
    }
}