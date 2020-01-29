import {NextPage} from "next";
import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Container from '@material-ui/core/Container'
import PageHeader from "../../components/PageHeader";
import {useRouter} from "next/router";


const Post: NextPage = () => {

  const router = useRouter();

  const post = {
    title: `Post Title - Post ID: ${router.query.postId}`,
    date: new Date().toDateString(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    id: router.query.postId
  };

  return (
    <>
      <Container maxWidth="lg">
        <PageHeader/>
        <main>
          {/* Post info */}
          <Grid container spacing={4}>
            <Grid item key={post.title} xs={12} md={12}>
              <CardActionArea component="a" href="#">
                <Card>
                  <div>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </CardActionArea>
            </Grid>
          </Grid>
          {/* End Post info */}
        </main>
      </Container>
    </>
  )
};

export default Post
