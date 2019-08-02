/*!

=========================================================
* Material Kit PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.jsx";

function SectionDescription(props) {
  const { classes } = props;
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
            Mucho mas que una simple App, a diferencia de otras plataformas te
            damos algunos beneficios extras como el tener tu perfil altamente
            personalizado, y puedas llevar un seguimiento mayor de aquellos
            artistas que ya el hayas echado el ojo para que te hagan tu proximo
            tatuaje.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionDescription.propTypes = {
  classes: PropTypes.object
};

export default withStyles(descriptionStyle)(SectionDescription);
