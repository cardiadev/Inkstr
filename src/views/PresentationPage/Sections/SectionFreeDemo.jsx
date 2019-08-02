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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui icons
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import freeDemoStyle from "assets/jss/material-kit-pro-react/views/presentationSections/freeDemoStyle.jsx";

class SectionFreeDemo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={5}
              sm={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <div className={classes.iconGithub}>
                <div className="far fa-thumbs-up" />
              </div>
              <div>
                <h2 className={classes.title}>¿Porque usar Inkstr?</h2>
                <h5 className={classes.description}>
                  A diferencia de otras Apps del mercado, nosotros verificamos
                  cada perfil del tatuador, para que no te encuentres con
                  sorpresas desagradables, así mismo contamos con un panel
                  personalizado donde podras personalizar más tu experiencia. Y
                  así mismo tambien encontraras algunas herramientas utiles ya
                  seas todo un principiante o un experto.
                </h5>
              </div>
              <Button href="/" color="rose" target="_blank" round>
                Descargar la App
              </Button>
            </GridItem>
            <GridItem md={6} sm={12} className={classes.mlAuto}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <Card
                    className={classNames(classes.card, classes.cardPricing)}
                  >
                    <CardBody>
                      <h3 className={classes.cardTitle}>Otros</h3>
                      <ul>
                        <li>
                          <b>200</b> Tatuadores
                        </li>
                        <li>
                          <b>45</b> Estudios de Tatuaje
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          Perfiles
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          Verificación de Cuentas
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          Viaja Tatuando
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          Promociones
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem md={6} sm={6}>
                  <Card
                    className={classNames(classes.card, classes.cardPricing)}
                  >
                    <CardBody>
                      <h3 className={classes.cardTitle}>INKSTR</h3>
                      <ul>
                        <li>
                          <b>1000+</b> Tatuadores
                        </li>
                        <li>
                          <b>500+</b> Estudios de Tatuaje
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          Perfiles
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          Verificación de Cuentas
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          Viaja Tatuando
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          Promociones
                        </li>
                      </ul>
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
}

SectionFreeDemo.propTypes = {
  classes: PropTypes.object
};

export default withStyles(freeDemoStyle)(SectionFreeDemo);
