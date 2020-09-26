import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";



const useStyles = makeStyles(styles);

export default function CardDashboard(props) {
  const {statType, value, statColor, statIcon, updated} =props
  console.log(props)


  const classes = useStyles();
  return (
    <div> 
  
      <Card>
        <CardHeader color={statColor} stats icon>
          <CardIcon color={statColor}>
            <Icon>{statIcon}</Icon>
          </CardIcon>
          <p className={classes.cardCategory}>{statType}</p>
          <h3 className={classes.cardTitle}>
            {value} <small>per one Million</small>
          </h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>

            <a href="#pablo" onClick={e => e.preventDefault()}>
            updated {updated} {}
            </a>
          </div>
        </CardFooter>
      </Card>
   
    </div>
  );
}
