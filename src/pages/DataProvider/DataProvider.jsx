import { React } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DataProvider = () => {
    
    /*
        fetch available models from some backend
        but for now we will use foodata
    */
    const data = {
        requests: [
            {
                id: 0,
                title: "MNIST handwritten digits",
                description: "28x28 images of handwritten digits",
                format: "array of images, where images are stored as 2D arrays of integers, each integer representing a pixel at that location",
                incentiveAmount: 10000,
                rounds: 100,
                modelType: "neural network"

            },
            {
                
                id: 1294801,
                title: "cancer detection data",
                description: "patient data with labels being categories of risk for cancer",
                format: "csv",
                incentiveAmount: 33,
                rounds: 4,
                modelType: "linear regression",
            },
            {
                id: 190329,
                title: "smartkeyboard usage",
                description: "smartphone keyboard users typing patterns to develop trie tree for better suggestions",
                format: "csv",
                incentiveAmount: 12,
                rounds: 2,
                modelType: "neural network",
            },
            {
                id: 23,
                title: "fraud occurrences in financial records",
                description: "idk enough about this",
                format: "csv",
                incentiveAmount: 16,
                rounds: 1,
                modelType: "support vector machine",
            },
            {
                id: 9830324, 
                title: "recommendations for ecommerce platform",
                description: "recommender systems, i also don't know enough about this",
                format: "csv",
                incentiveAmount: 3,
                rounds: 15,
                modelType: "logistic regression",
            }
        ]
    }

    return (
        <div style={{
            margin: '1em'
        }}>
            <Typography variant="h4">Select a model to train:</Typography>
            {data.requests.map((r) => {
                return (
                    <div style={{ border: "1px solid", marginTop: '0.5em', padding: "0.5rem" }} key={r.id} variant="outlined">
                        <Typography variant="h6" component="div">{r.title}</Typography>
                        <Typography variant="body1">Description: {r.description}</Typography>
                        <Typography variant="body1">Format: {r.format}</Typography>
                        <Typography variant="body1">Incentive: {r.incentiveAmount}</Typography>
                        <Typography variant="body1">Rounds: {r.rounds}</Typography>
                        <Typography variant="body1">Model Type: {r.modelType}</Typography>
                        <Link to="/agreement" state={{ id: r.id, title: r.title, description: r.description, format: r.format, incentive: r.incentiveAmount, rounds: r.rounds, model: r.modelType }} style={{ textDecoration: 'none'}}> Join</Link>
                    </div>
                )
            })}

        </div>
    )
}
export default DataProvider;