import * as React from "react";
import Layout from "./layout";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import profile from '../images/profile.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    textAlign : 'center',
    display : 'inline-flex',
  },
  media: {
    height: 140,
  },
});

const MaterialPage = () => {
  const classes = useStyles();
  
  return (
    <Layout pageTitle="Material UI Sample">
      <Card className={classes.root}>
      <CardActionArea>
        <img
          className={classes.media}
          src={profile}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Someone who want to go with me!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            But there is no replyed.
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
    </Layout>
  );
};

export default MaterialPage;
