
import { Stack } from '@mui/material';


const Pagewidth = ({ sx = {}, ...props })  => {
    const css ={
        maxWidth: "1000px",
    margin:"auto",  display:"flex",
    alignItems: "center",
    marginBottom: "80px",
    ...sx
    }

    return (
        <Stack sx={css} {...props} />
    )
}

export default Pagewidth;