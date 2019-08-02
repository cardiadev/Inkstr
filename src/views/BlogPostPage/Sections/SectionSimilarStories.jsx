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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Danger from "components/Typography/Danger.jsx";

import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import blog7 from "assets/img/examples/blog7.jpg";

import sectionSimilarStoriesStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionSimilarStoriesStyle.jsx";

function SectionSimilarStories({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>
              Post Similares
            </h2>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog6} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog6 + ")",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Info>
                      <h6>POST SIMILARES</h6>
                    </Info>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                        ¿Puedes hacerte un tatuaje durante el embarazo?
                      </a>
                    </h4>
                    <p className={classes.description}>
                      Es posible que no valga la pena correr el riesgo de
                      hacerse un nuevo tatuaje durante el embarazo por varias
                      razones. En general, los expertos...
                      <a href="#pablo"> Leer más </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog8} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog8 + ")",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Success>
                      <h6>POST SIMILARES</h6>
                    </Success>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">¿Cómo puedo quitarme un tatuaje?</a>
                    </h4>
                    <p className={classes.description}>
                      La eliminación de un tatuaje lleva tiempo, brinda
                      paciencia y obviamente cuesta dinero. Esta vez, la guía
                      informativa de Inkster.
                      <a href="#pablo"> Leer más </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog7} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog7 + ")",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Danger>
                      <h6>POST SIMILARES</h6>
                    </Danger>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                        Nuevos tatuajes escolares: orígenes, estilos y artistas
                      </a>
                    </h4>
                    <p className={classes.description}>
                      Una de las pocas cosas que la gente no nota sobre los
                      tatuajes de New School es cómo se cimentan sus fundamentos
                      en American Traditional.
                      <a href="#pablo"> Leer más </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

SectionSimilarStories.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionSimilarStoriesStyle)(SectionSimilarStories);
