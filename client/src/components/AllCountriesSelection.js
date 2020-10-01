import React, { useState, useContext } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { makeStyles } from "@material-ui/core/styles";


import StateContext from '../StateContext';
import {getAllCountriesForDropDown} from '../helpers/helpers'

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CasesChart from "components/CasesChart.js";
import CardNews from "components/CardNews.js";
import { getMapDataLayer } from "../helpers/helpers";
import CardCountry from "components/CardCountry.js";


const MAX_COUNTRIES_SELECTION = 3;

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

const AllCountriesSelection = () => {
    const [allCountries, setAllCountries] = useState([]);
const state = useContext(StateContext);

const countryOptions = (!state.loading) && getAllCountriesForDropDown(state.mapData)
console.log(countryOptions)

const classes = useStyles();


  // const countryOptions = [
  //   { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  //   { key: 'ca', value: 'ca', flag: 'ca', text: 'Canada' },
  //   { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
  
  // ]

  const handleAllCountriesChange= (e: any, data?: any) => {
    if (data.value.length <= MAX_COUNTRIES_SELECTION) {
      setAllCountries(data.value);
    }
  };
  console.log(allCountries)

  return (
    <div>

    <GridContainer>

    <GridItem xs={12} sm={12} md={4}>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>List of Countries</h4>

        </CardHeader>
        <CardBody>
          <GridContainer>  
          <GridItem xs={12} sm={12} md={12}>
            <h4>Add up to 3 countries to your favourite list</h4>  
 
            </GridItem>            
        
            <GridItem xs={12} sm={12} md={12}>


            <Dropdown
              placeholder="Select Up to 3 Countries"
              onChange={handleAllCountriesChange}
              value={allCountries}
              fluid
              multiple
              selectOnNavigation={false}
              search
              selection
              options={countryOptions}
            />


            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <Button variant="contained" color="primary" onClick={()=> console.log(allCountries)}>
            SELECT
          </Button>
        </CardFooter>

      </Card>
    </GridItem>


    

</GridContainer>

<GridContainer>

</GridContainer>
</div>
  );
};
export default AllCountriesSelection;