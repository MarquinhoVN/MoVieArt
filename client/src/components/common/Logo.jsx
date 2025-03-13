import { Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Logo = () => {
  const theme = useTheme();
   const navigate = useNavigate();
  return (
    <Typography fontWeight="700" fontSize="1.7rem" sx={{ cursor: "pointer" }} onClick ={() => navigate("/")}>
      MoVie<span style={{ color: theme.palette.primary.main }}>Art</span>
    </Typography>
  );
};

export default Logo;