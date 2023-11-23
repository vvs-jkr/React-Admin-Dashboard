import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={color.grey[100]}
        fontWeight="bold"
        sx={{ mr: "5px" }}
      >
        {title}
      </Typography>

      <Typography
        variant="h5"
        color={color.greenAccent[400]}
        fontWeight="bold"
        sx={{ mr: "5px" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
