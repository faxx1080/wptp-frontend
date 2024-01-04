import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs({ value, handleChange }) {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable tabs for test result detail"
      >
        <Tab label="Overview" />
        <Tab label="Reading & Writing" />
        <Tab label="Math" />
      </Tabs>
    </Box>
  );
}
