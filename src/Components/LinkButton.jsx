import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function LinkButton({ path, text, clickFunc }) {
    return (
        <Link to={path}>
            <Button onClick={clickFunc}>{text}</Button>
        </Link>
    )
}