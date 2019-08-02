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
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import componentsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/componentsStyle.jsx";

import macbookImage from "assets/img/assets-for-demo/presentationViewSectionComponent/laptop-basics.png";
import shoppingCartImage from "assets/img/assets-for-demo/presentationViewSectionComponent/table.jpg";
import shareButtonImage from "assets/img/assets-for-demo/presentationViewSectionComponent/share-btn.jpg";
import cardImage from "assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card-with-btn.jpg";
import twitterImage from "assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card.jpg";
import iconsImage from "assets/img/assets-for-demo/presentationViewSectionComponent/social-row.jpg";
import repostImage from "assets/img/assets-for-demo/presentationViewSectionComponent/pin-btn.jpg";

class SectionComponents extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={5} lg={5} sm={12} xs={12}>
              <h3 className={classes.title}>Encuentra todo más Facil</h3>
              <h6 className={classes.description}>
                Inkstr te ayuda en todo momento
              </h6>
              <h5 className={classes.description}>
                Esta app te ayudara a encontrar de una forma facil y diferente
                todo lo que necesitas para hacerte un tatuaje, ya sea tu primera
                vez o seas todo un fanatico experimentado, aquí lo encontraras
                todo. Encuentra a tu proximo tatuador, experimenta nuestro motor
                de busqueda y revisa los trabajos del tatuador que más
                prefieras.
              </h5>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
              <div className={classes.imageContainer}>
                <img
                  src={macbookImage}
                  alt="macbook"
                  className={classes.componentsMacbook}
                />
                <img
                  src={shoppingCartImage}
                  alt="macbook"
                  className={classes.shoppingCart}
                />
                <img
                  src={shareButtonImage}
                  alt="macbook"
                  className={classes.shareButton}
                />
                <img
                  src={cardImage}
                  alt="macbook"
                  className={classes.cardImage}
                />
                <img
                  src={twitterImage}
                  alt="macbook"
                  className={classes.twitterImage}
                />
                <img
                  src={iconsImage}
                  alt="macbook"
                  className={classes.iconsImage}
                />
                <img
                  src={repostImage}
                  alt="macbook"
                  className={classes.repostImage}
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionComponents.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(SectionComponents);
