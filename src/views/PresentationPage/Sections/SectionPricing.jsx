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
import NavPills from "components/NavPills/NavPills.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import pricingStyle from "assets/jss/material-kit-pro-react/views/presentationSections/pricingStyle.jsx";

const style = {
  ...pricingStyle
  // ...navPillsContentStyle
};

class SectionPricing extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={10}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <h2 className={classes.title}>¿Te gusto Inkstr?</h2>
            </GridItem>
            <GridItem
              md={8}
              sm={10}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <p className={classes.description}>
                Comparte tu <b>experiencia</b> con los demas usuarios y tambien
                en tus <b> Redes Sociales</b> tenemos algo muy especial para ti.
              </p>
            </GridItem>
            <div className={classes.socialLine}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem md={12}>
                    <h4 className={classes.title}>¡Gracias por Compartir!</h4>
                    <Button color="twitter" href="#pablo" round>
                      <i className={"fab fa-twitter " + classes.marginRight} />
                      Twitter
                    </Button>
                    <Button color="facebook" href="#pablo" round>
                      <i className={"fab fa-facebook " + classes.marginRight} />
                      Facebook
                    </Button>
                    <Button color="google" href="#pablo" round>
                      <i className={"fab fa-google " + classes.marginRight} />
                      Google
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionPricing.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(SectionPricing);
