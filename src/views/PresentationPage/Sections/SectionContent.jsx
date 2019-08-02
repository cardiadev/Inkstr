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
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import contentStyle from "assets/jss/material-kit-pro-react/views/presentationSections/contentStyle.jsx";
// images
import presentationiPad from "assets/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.png";
import presentationiPadComments from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.png";
import presentationiPadTable from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-table.png";

class SectionContent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={4}>
              <div className={classes.sectionDescription}>
                <h3 className={classes.title}>Áreas de Contenido</h3>
                <h6 className={classes.description}>
                  Diversas herramientas a tu alcance
                </h6>
                <h5 className={classes.description}>
                  Descubre las increibles herramientas que ponemos a tu
                  disposición, pero no lo es todo, ya que se forma muy cotidiana
                  actualizamos nuestra app con nuevos <strong>Features</strong>{" "}
                  y así poder crecer tu experiencia. Inkstr tu mejor opcion para
                  tu proximo tatuaje.
                </h5>
              </div>
            </GridItem>
            <GridItem md={7} className={classes.mlAuto}>
              <div className={classes.imageContainer}>
                <div className={classes.animeAreaImg}>
                  <ScrollAnimation animateIn="fadeInUp">
                    <img
                      src={presentationiPadComments}
                      alt="iPad comments"
                      className={classes.areaImg}
                    />
                  </ScrollAnimation>
                </div>
                <div className={classes.animeInfoImg}>
                  <ScrollAnimation animateIn="fadeInUp">
                    <img
                      src={presentationiPadTable}
                      alt="iPad table"
                      className={classes.infoImg}
                    />
                  </ScrollAnimation>
                </div>
                <img
                  className={classes.ipadImg}
                  src={presentationiPad}
                  alt="iPad"
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionContent.propTypes = {
  classes: PropTypes.object
};

export default withStyles(contentStyle)(SectionContent);
