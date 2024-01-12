import { React } from "react"
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Client = () => {
    
    /*
        fetch available models from some backend
        but for now we will use foodata
    */
    const data = {
        requests: [
            {
            id: 1294801,
            title: "cancer detection data",
            description: "patient data with labels being categories of risk for cancer"
            },
            {
            id: 190329,
            title: "smartkeyboard usage",
            description: "smartphone keyboard users typing patterns to develop trie tree for better suggestions"
            },
            {
            id: 23,
            title: "fraud occurrences in financial records",
            description: "idk enough about this"
            },
            {
            id: 9830324, 
            title: "recommendations for ecommerce platform",
            description: "recommender systems, i also don't know enough about this"
            }
        ]
    }

    return (
        <div style={{
            margin: '1em'
        }}>
            <Typography variant="h6">Select a model to train:</Typography>
            {data.requests.map((r) => {
                return (
                    <div style={{ margin: '0.5em'}}>
                        <Button variant="outlined" sx={{ display: 'inline', mr: 1}}><Link to="/form" style={{ textDecoration: 'none'}}>Select</Link></Button>
                        <Typography sx={{display: 'inline'}}>{r.id}, {r.title}, {r.description}</Typography>
                    </div>
                )
            })}

        </div>
    )
}
export default Client;