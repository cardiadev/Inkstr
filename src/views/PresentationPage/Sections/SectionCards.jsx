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

import cardsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/cardsStyle.jsx";

import cardsTest from "assets/img/assets-for-demo/cards-test.png";

class SectionCards extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.section, classes.sectionDark)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={7} sm={7}>
              <div className={classes.imageContainer}>
                <img src={cardsTest} alt="views" />
              </div>
            </GridItem>
            <GridItem md={4} sm={5} className={classes.mlAuto}>
              <div className={classes.sectionDescription}>
                <h3 className={classes.title}>
                  Buscando un artista del tatuaje de calidad?
                </h3>
                <h6 className={classes.description}>
                  Encuentralo facil y rapido
                </h6>
                <h5 className={classes.description}>
                  Con nuestro servicio Open Bookings, crea un informe de
                  tatuajes y lo conectaremos con artistas locales para reservar
                  su próxima cita de tatuajes.
                </h5>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionCards.propTypes = {
  classes: PropTypes.object
};

export default withStyles(cardsStyle)(SectionCards);
