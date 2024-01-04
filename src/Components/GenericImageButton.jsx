import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function GenericImageButton({ link, clickFunc, imgSrc, title, text, hasImage }) {
    return (
        <Card component={Link} to={link} onClick={clickFunc} style={{ textDecoration: "none", width: '18rem', display: 'inline-block', margin: '20px', border: '1px solid', borderColor: 'primary.main' }} >
            {imgSrc &&
                <CardMedia
                    component="img"
                    height="140"
                    image={imgSrc}
                    alt="Placeholder Image"
                />
            }
            <CardContent>
                {title &&
                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
                        {title}
                    </Typography>
                }
                {text &&
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                }
            </CardContent>
        </Card>
    )
}
