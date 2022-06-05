import { Button } from "@mui/material";
import {
    ListStyled,
    ItemListStyled,
    PictureStyled,
    AllTextStyled,
    NameStyled,
    DescriptionStyled
} from "./List.style";
import { Pet } from '../../../data/@types/Pet';
interface ListProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}
import { TextService } from "../../../data/services/TextService";

export default function ListContent(props: ListProps) {
    const maxLength = 200;
    return (
        <ListStyled>
            {props.pets.map((pet) => (
                <ItemListStyled key={pet.id}>
                    <PictureStyled src={pet.picture} alt={pet.name} />
                    <AllTextStyled>
                        <NameStyled >{pet.name}</NameStyled>
                        <DescriptionStyled>
                            {TextService.limitText(pet.description, maxLength)}
                        </DescriptionStyled>
                        <Button
                            onClick={() => props.onSelect(pet)}
                            variant={'contained'}
                            fullWidth>Adotar {pet.name}
                        </Button>
                    </AllTextStyled>
                </ItemListStyled>
            ))}
        </ListStyled>
    );
}