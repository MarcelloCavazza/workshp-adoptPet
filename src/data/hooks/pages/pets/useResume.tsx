import { useState, useEffect } from "react";
import { Resume } from "../../../@types/resumePets";
import { ApiService } from "../../../services/ApiService";
import { AxiosError } from "axios";


export function useResume() {
    const [listResume, setLIstResume] = useState<Resume[]>([]);




    useEffect(() => {
        ApiService.get('/adoption').then((response) => {
            setLIstResume(response.data)
        })
    }, [])

    return {
        listResume
    }
}