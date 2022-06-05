import { valueToPercent } from "@mui/base";
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [petList, setListPet] = useState<Pet[]>([]),
    [selectedPet, setSelectedPet] = useState<Pet | null>(null),
    [email, setEmail] = useState(""),
    [price, setPrice] = useState(""),
    [mensagem, setMenssage] = useState("");

  useEffect(() => {
    ApiService.get("/pets")
      .then((response) => {
        setListPet(response.data);
      })
      .catch((error: AxiosError) => {
        setMenssage(error.response?.data.message);
      });
  }, []);
  function adopt() {
    if (selectedPet !== null) {
      if (validateDataFromAdoption()) {
        ApiService.post("/adoption", {
          pet_id: selectedPet.id,
          email,
          price,
        })
          .then(() => {
            setSelectedPet(null);
            setMenssage("Adption was a sucess");
            clearForms();
          })
          .catch((error: AxiosError) => {
            setMenssage(error.response?.data.message);
          });
      } else {
        setMenssage("Fill the form fields!");
      }
    }
  }

  function validateDataFromAdoption() {
    return email.length > 0 && price.length > 0;
  }

  function clearForms() {
    setEmail("");
    setPrice("");
  }

  return {
    petList,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    price,
    setPrice,
    mensagem,
    setMenssage,
    adopt,
  };
}
