import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default function GenericImageButton({ clickFunc, imgSrc, title, text, hasImage }) {
    return (
        <Card onClick={clickFunc} border="primary" style={{ width: '18rem', display: 'inline-block', margin: '20px' }}>
            <Card.Body>
                {hasImage && (imgSrc ? (
                    <Image src={imgSrc} rounded />
                ) : (
                    <Image className="img-fluid" alt="Image" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" rounded />
                    // <Card.Text>[Invalid Image Source]</Card.Text>
                ))}
                {title && <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>}
                {text && <Card.Text>{text}</Card.Text>}
            </Card.Body>
        </Card>
    )
}