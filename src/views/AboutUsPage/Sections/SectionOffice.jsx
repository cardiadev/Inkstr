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

import officeStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/officeStyle.jsx";

// office
import office1 from "assets/img/examples/office1.jpg";
import office2 from "assets/img/examples/office2.jpg";
import office3 from "assets/img/examples/office3.jpg";
import office4 from "assets/img/examples/office4.jpg";
import office5 from "assets/img/examples/office5.jpg";

function SectionOffice(props) {
  const { classes } = props;
  return (
    <div className={classes.office}>
      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>Nuestras Oficinas</h2>
          <h4 className={classes.description}>
            Contamos con oficinas con un ambiente laboral muy relajado y muy
            adecuado para explotar tu creatividad.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office1}
            alt="office1"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office2}
            alt="office2"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office3}
            alt="office3"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office4}
            alt="office4"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office5}
            alt="office5"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionOffice.propTypes = {
  classes: PropTypes.object
};

export default withStyles(officeStyle)(SectionOffice);
