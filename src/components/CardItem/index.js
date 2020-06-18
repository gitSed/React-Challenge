import React, { useState, useContext, useEffect } from 'react';

/* Third party components */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

/* Context */
import { NotificationContext } from '../../Context/NotificationContext';
import { PostContext } from '../../Context/PostsContext';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minWidth:330
    },
    media: {
      height: 140,
    },
    cardInfo: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textOver: {
        maxWidth: '290px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    cardActions: {
        display: 'flex'
    },
    cardAction: {
        margin: '0 5px'
    },
    deleteAction: {
        '&:hover': {
            color: "#e43131",
        },
    }
});

function ReadStatus(props) {
    return (
      <VisibilityIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </VisibilityIcon>
    );
}

const CardItem = ({id, title, author, thumbnailSrc, createdHours, num_comments, actionClick}) => {
    const classes = useStyles();
    const [read, setRead] = useState(!1);
    const [value, setValue] = useState('');

    const { showNotification } = useContext(NotificationContext);
    const { removePostItem } = useContext(PostContext);

    useEffect(() => {
        setValue(id);
    }, []);

    const handleClick = () => {
        setRead(!0);

        if(typeof actionClick === 'function'){
            actionClick();
        }
    }

    const handleDeleteCard = () => {
        removePostItem(value);
        showNotification({ message: 'Post eliminado satisfactoriamente', type: 'success' });
    }
    
    return(
        <Card className={classes.root} onClick={handleClick}>
            <CardActionArea>
                <CardHeader
                    className={classes.textOver}
                    title={title || ''}
                    subheader={`${author || ''} | ${createdHours || 0} hours ago`}
                />
                {
                    thumbnailSrc ? (
                        <CardMedia
                            className={classes.media}
                            image={thumbnailSrc}
                        />
                    ) : (
                        <CardMedia
                            className={classes.media}
                            image={"https://www.freeiconspng.com/uploads/no-image-icon-23.jpg"}
                            title="Image from freeiconspng.com"
                        />
                    )
                }
                <CardContent>
                    <Typography variant="body2" component="p" className={classes.cardInfo}>
                        {`${num_comments || 0} comments`}
                        <span className={classes.cardActions}>
                            <ReadStatus className={classes.cardAction} color={read ? 'primary' : 'secondary'}/>
                            <DeleteTwoToneIcon className={classes.cardAction, classes.deleteAction} onClick={handleDeleteCard} />
                        </span>
                    </Typography>                
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardItem;