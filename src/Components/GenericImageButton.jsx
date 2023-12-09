import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function GenericImageButton({ clickFunc, imgSrc, title, text, hasImage }) {
    return (
        <Card onClick={clickFunc} style={{ width: '18rem', display: 'inline-block', margin: '20px', border: '1px solid', borderColor: 'primary.main' }} >
            <CardActionArea>
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
            </CardActionArea>
        </Card>
    )
}

//  this is MUI with paddings around the card
{/* <CardContent>
    <Box
        component="img"
        sx={{
            // height: 233,
            // width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
        }}
        alt="Placeholder Image."
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
    />
</CardContent> */}

//  this is the logic to not have any images
/* <Card.Body>
        {hasImage && (imgSrc ? (
            <Image src={imgSrc} rounded />
        ) : (
            <Image className="img-fluid" alt="Image" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" rounded />
            // <Card.Text>[Invalid Image Source]</Card.Text>
        ))}
    </Card.Body> */