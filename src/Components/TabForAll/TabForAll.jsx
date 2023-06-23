import * as React from "react";
import "./TabForAll.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListTaprizeTaball from "../List_of_taprize_card/List_taprize_Taball";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          className="tbUper"
          indicatorColor={false}
        >
          <Tab className="tabcor" label="全て" {...a11yProps(0)} />
          <Tab className="tabcor tabNowSale" label="発売中" {...a11yProps(1)} />
          <Tab className="tabcor tabSoon" label="近日発売" {...a11yProps(2)} />
          <Tab className="tabcor tabEndsale" label="販売終了" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ListTaprizeTaball  tags_text={0}  />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListTaprizeTaball tags_text={1} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ListTaprizeTaball tags_text={2} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ListTaprizeTaball tags_text={3} />
      </TabPanel>
    </Box>
  );
}
