import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../../services/ApiService";

export function useRegistration() {
    const [name, setName] = useState(''),
        [description, setDescript] = useState(''),
        [picture, setPicture] = useState(''),
        [popUP, setPopUP] = useState('');
    function register() {
        if (validateForms()) {
            ApiService.post('/pets', {
                name,
                description,
                picture
            }).then(() => {
                clearForms()
                setPopUP('The pet was registered')
            }).catch((error: AxiosError) => {
                setPopUP(error.response?.data.message)
            })
        } else {
            setPopUP('Full fill all fields!')
        }
    }
    function validateForms() {
        return name.length > 2 && description.length > 20 && picture.length > 5;
    }
    function clearForms() {
        setName('')
        setDescript('')
        setPicture('')
    }

    return {
        name, setName,
        description, setDescript,
        picture, setPicture,
        popUP, setPopUP,
        register,
    }
}