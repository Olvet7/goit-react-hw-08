import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <>
    <Typography variant="subtitle1" gutterBottom>
        Oops! Something went wrong!
      </Typography>
    <Link to="/">Home Page</Link>
    </>
  )
}
