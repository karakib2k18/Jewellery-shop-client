import * as React from "react";
import Box from "@mui/material/Box";
import { CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BlogsCard from "./BlogsCard";

const Blogs = () => {
  const [blogslist, setBlogsslist] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("./shopblogs.json")
      .then((response) => response.json())
      .then((json) => {
        setBlogsslist(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <Container sx={{ border: 0 }} maxWidth="lg">
      <Typography variant="h4" gutterBottom component="div" sx={{ my: 4 }}>
        Blogs Page
      </Typography>
      {isLoading && <CircularProgress />}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {blogslist.map((blog, index) => (
            <BlogsCard blog={blog} key={blog?._id}></BlogsCard>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Blogs;
