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
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import examplesStyle from "assets/jss/material-kit-pro-react/views/presentationSections/examplesStyle.jsx";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

import img01 from "assets/img/assets-for-demo/example-pages/01.jpg";
import img02 from "assets/img/assets-for-demo/example-pages/02.jpg";
import img03 from "assets/img/assets-for-demo/example-pages/03.jpg";
import img04 from "assets/img/assets-for-demo/example-pages/04.jpg";

const styles = {
  ...examplesStyle,
  ...imagesStyles
};

class SectionExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.section, classes.sectionDark)}>
        <div className={classes.container}>
          <GridItem
            md={8}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <div className={classes.sectionDescription}>
              <h2 className={classes.title}>Perfil de Tatuador</h2>
              <h5 className={classes.description}>
                Encuentra la sección de cada tatuador, donde podras navegar y
                visualizar sus ultimos trabajos realizados, así mismo
                encontraras una seccion para contactarlo y hacerle aquellas
                preguntas que te inquietan.
              </h5>
            </div>
          </GridItem>
          <GridContainer>
            <GridItem md={4} sm={4} xs={12}>
              <h4 className={classes.title}>Rob Barbas</h4>
              <Card className={classes.imgCardExtended}>
                <Link to={"/profile-page"}>
                  <img
                    src={img01}
                    alt="Rob Barbas"
                    className={classes.imgCard}
                  />
                </Link>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4} xs={12}>
              <h4 className={classes.title}>Andy Marques</h4>
              <Card className={classes.imgCardExtended}>
                <Link to={"/profile-page"}>
                  <img
                    src={img04}
                    alt="Andy Marques"
                    className={classes.imgCard}
                  />
                </Link>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4} xs={12}>
              <h4 className={classes.title}>Wendy Pham</h4>
              <Card className={classes.imgCardExtended}>
                <Link to={"/profile-page"}>
                  <img
                    src={img02}
                    alt="Wendy Pham"
                    className={classes.imgCard}
                  />
                </Link>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionExamples.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SectionExamples);
