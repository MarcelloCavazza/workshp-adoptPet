import { Button } from "@mui/material";
import {
    ListStyled,
    ItemListStyled,
    PictureStyled,
    AllTextStyled,
    NameStyled,
    DescriptionStyled
} from "./List.style";

export default function ListContent() {
    return (
        <ListStyled>
            <ItemListStyled>
                <PictureStyled />
                <AllTextStyled>
                    <NameStyled>Bidu</NameStyled>
                    <DescriptionStyled>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius rerum perferendis, nihil quos modi excepturi? Facere, expedita quod, explicabo quis omnis dolorum fuga repudiandae dolores incidunt ea sequi quos.
                    </DescriptionStyled>
                    <Button variant={'contained'}>Adotar</Button>
                </AllTextStyled>
            </ItemListStyled>
        </ListStyled>
    );
}