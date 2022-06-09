import { NextPage } from "next"
import TitleStructre from "../../ui/components/Title/Title";
import { TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { useResume } from "../../data/hooks/pages/pets/useResume";


const Resume: NextPage = () => {
    const { listResume } = useResume();
    return (
        <>
            <TitleStructre
                title={'Resume of adoptions'}
                subtitle={'See a list of all adoptions'}
            />
            <TableContainer
                component={Paper}
                sx={{ p: { xs: 3, md: 5 } }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell align={'right'}>Price per month</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            listResume.map((resume) => (
                                <TableRow key={resume.id}>
                                    <TableCell>{resume.pet.name}</TableCell>
                                    <TableCell>{resume.email}</TableCell>
                                    <TableCell align={'right'}>{resume.price}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>

            </TableContainer>
        </>
    )
}

export default Resume;