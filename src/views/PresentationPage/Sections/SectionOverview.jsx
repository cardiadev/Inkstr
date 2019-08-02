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
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
// @material-ui icons
import Grid from "@material-ui/icons/GridOn";
import PhoneLink from "@material-ui/icons/Phonelink";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// images
import Vodafone from "assets/img/assets-for-demo/ourClients/vodafone.jpg";
import Microsoft from "assets/img/assets-for-demo/ourClients/microsoft.jpg";
import Harvard from "assets/img/assets-for-demo/ourClients/harvard.jpg";
import Standford from "assets/img/assets-for-demo/ourClients/stanford.jpg";
import profilePic1 from "assets/img/assets-for-demo/test1.jpg";
import profilePic2 from "assets/img/assets-for-demo/test2.jpg";
import profilePic3 from "assets/img/assets-for-demo/test3.jpg";

import overviewStyle from "assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle.jsx";

class SectionOverview extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div
          className={classes.features5}
          style={{
            backgroundImage: `url(${require("assets/img/assets-for-demo/features-5.jpg")})`
          }}
        >
          <GridItem
            md={8}
            className={classNames(classes.mlAuto, classes.mrAuto)}
          >
            <h2 className={classes.title}>
              La forma más facil para tu proximo tatuaje
            </h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title="Inspiración"
                  description={
                    <p>
                      Inspirate con nuestras galerias de tatuaje, encuentra
                      algun estilo nuevo, y recibe sugerencias de esas imagenes
                      que tanto te gustaron.
                    </p>
                  }
                  icon={Grid}
                  iconColor="gray"
                  vertical={true}
                />
              </GridItem>
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title="Multi-Dispositivo"
                  description={
                    <p>
                      Inkstr lo podras encontrar en diversas plataformas como
                      App Store, Play Store y su versión Web, para que nunca
                      dejes tu busqueda de tu proximo tatuaje.
                    </p>
                  }
                  icon={PhoneLink}
                  iconColor="gray"
                  vertical={true}
                />
              </GridItem>
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title="Super Rápido"
                  description={
                    <p>
                      De una forma rapida y sencilla ahorraras tiempo ya que lo
                      encontraras todo en esta misma App.
                    </p>
                  }
                  icon={AccessTime}
                  iconColor="gray"
                  vertical={true}
                />
              </GridItem>
              <GridItem sm={3} className={classes.featuresShow}>
                <InfoArea
                  title="Gratis"
                  description={
                    <p>
                      Inkstr es totalmente gratuito y libre de publicidad, tu
                      solo dedicate a buscar inspiración para tu proximo
                      tatuaje.
                    </p>
                  }
                  icon={AttachMoney}
                  iconColor="gray"
                  vertical={true}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div className={classes.sectionTestimonials}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                md={8}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <h2 className={classes.title}>
                  Más de 3000+ usuarios nos respaldan
                </h2>
                <h5 className={classes.description}>
                  Usuarios alrededor del mundo y sobre todo en la ciudad de
                  <b> Guadalajara</b> han confiado en Inkstr{" "}
                  <b> 2546 Tatuadores</b> tambien. Esto es lo que piensan
                  algunos usuarios:
                </h5>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <Card plain profile>
                  <GridContainer>
                    <GridItem md={3} sm={3}>
                      <CardHeader image plain>
                        <a href="#pablo">
                          <img src={profilePic1} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic1 + ")",
                            opacity: "1"
                          }}
                        />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic1 + ")",
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem md={9} sm={9}>
                      <CardBody plain className={classes.alignLeft}>
                        <h4 className={classes.cardTitle}>Aimee Gonzalez</h4>
                        <p className={classes.cardDescription}>
                          {'"'}Gracias a Inkstr pude hacerme mi 4to tatuaje de
                          una forma facil y muy amigable. Y lo mejor de todo es
                          que el servicio es GRATUITO!{'"'}
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain profile>
                  <GridContainer>
                    <GridItem md={3} sm={3}>
                      <CardHeader image plain>
                        <a href="#pablo">
                          <img src={profilePic2} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic2 + ")",
                            opacity: "1"
                          }}
                        />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic2 + ")",
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem md={9} sm={9}>
                      <CardBody plain className={classes.alignLeft}>
                        <h4 className={classes.cardTitle}>Jaime Alvarado</h4>
                        <p className={classes.cardDescription}>
                          {'"'}Aquí encontre la inspiración de mi tatuaje, tenia
                          tiempo buscando en internet pero aquí con unos cuantos
                          click lo logré.
                          {'"'}
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
              <GridItem md={4} sm={4}>
                <Card plain profile>
                  <GridContainer>
                    <GridItem md={3} sm={3}>
                      <CardHeader image plain>
                        <a href="#pablo">
                          <img src={profilePic3} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic3 + ")",
                            opacity: "1"
                          }}
                        />
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: "url(" + profilePic3 + ")",
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem md={9} sm={9}>
                      <CardBody plain className={classes.alignLeft}>
                        <h4 className={classes.cardTitle}>Sofia Cartámo</h4>
                        <p className={classes.cardDescription}>
                          {'"'}Rayos... simplemente la mejor app, tiene de todo,
                          puesdes buscar y guardar esas fotos para que te puedas
                          inspirar. Super !{'"'}
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

SectionOverview.propTypes = {
  classes: PropTypes.object
};

export default withStyles(overviewStyle)(SectionOverview);
