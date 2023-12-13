// import React, { useState } from 'react';
// import { Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   radio: {
//     '& .MuiSvgIcon-root': {
//       borderRadius: '50%', // Create a circular outline
//       border: `2px solid ${theme.palette.primary.main}`, // Customize the border color
//     },
//   },
// }));

// const CharacterRadioButton = () => {
//   const classes = useStyles();
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <RadioGroup value={selectedOption} onChange={handleOptionChange} row>
//       <FormControlLabel
//         value="A"
//         control={<Radio className={classes.radio} />}
//         label={<Typography variant="h6">A</Typography>}
//       />
//       <FormControlLabel
//         value="B"
//         control={<Radio className={classes.radio} />}
//         label={<Typography variant="h6">B</Typography>}
//       />
//       <FormControlLabel
//         value="C"
//         control={<Radio className={classes.radio} />}
//         label={<Typography variant="h6">C</Typography>}
//       />
//     </RadioGroup>
//   );
// };

// export default CharacterRadioButton;