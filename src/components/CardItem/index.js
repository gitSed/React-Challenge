import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import VisibilityIcon from '@material-ui/icons/Visibility';


const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 140,
    },
    cardInfo: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

function ReadStatus(props) {
    return (
      <VisibilityIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </VisibilityIcon>
    );
}

const CardItem = props => {
    const classes = useStyles();
    const [read, setRead] = useState(!1);
    
    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader
                    title={props.title || 'Reddit Media'}
                    subheader={`${props.author || 'Edgar Sandoval'}  ${props.created || '1'} hours ago`}
                />                
              <CardMedia
                className={classes.media}
                image={"https://b.thumbs.redditmedia.com/ZF37c_fUuPPTootrtYGvCy5vpbcIPT3Feo3uGNNchfE.jpg"}
              />
              <CardContent>
                <Typography variant="body2" component="p" className={classes.cardInfo}>
                    {`${props.num_comments || 10} comments`}
                    <ReadStatus color={read ? 'primary' : 'secondary'}/>
                </Typography>                
              </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardItem;