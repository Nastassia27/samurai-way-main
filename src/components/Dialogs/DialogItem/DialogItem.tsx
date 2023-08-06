import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/dialogs-reducer";


type PropsType={
    dialog: DialogType
}

const DialogItem: React.FC<PropsType>  = (props) => {
    let path = '/dialogs/1' + props.dialog.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://img.championat.com/s/735x490/news/big/y/g/avatar-2-sobral-v-rossii-bolshe-2-4-mlrd-rublej_16758793371084217002.jpg'/>
            <NavLink to={path}> {props.dialog.name}</NavLink>
        </div>

    )
}



export default DialogItem
