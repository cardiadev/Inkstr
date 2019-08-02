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
/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";

import pedroromo from "assets/img/faces/pedro.jpg";
import oluEletu from "assets/img/examples/tattoo_01.jpg";
import clemOnojeghuo from "assets/img/examples/tattoo_02.jpg";
import cynthiaDelRio from "assets/img/examples/tattoo_03.jpg";
import mariyaGeorgieva from "assets/img/examples/tattoo_04.jpg";
import clemOnojegaw from "assets/img/examples/tattoo_05.jpg";
import darrenColeshill from "assets/img/examples/tattoo_06.jpg";
import avatar from "assets/img/faces/aimee.jpg";
import marc from "assets/img/faces/hector.jpg";
import kendall from "assets/img/faces/juan.jpg";
import cardProfile2Square from "assets/img/faces/josue.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

class ProfilePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="INKSTR"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "primary"
          }}
          {...rest}
        />
        <Parallax
          image={require("assets/img/examples/tattoo_profile_bg_02.jpg")}
          filter="dark"
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={pedroromo} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Pedro Romo</h3>
                    <h5>Tatuador</h5>
                  </div>
                </div>
                <div className={classes.follow}>
                  <Tooltip
                    id="tooltip-top"
                    title="Sigue a este Tatuador"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      round
                      color="primary"
                      className={classes.followButton}
                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </Tooltip>
                </div>
              </GridItem>
            </GridContainer>
            <div
              className={classNames(classes.description, classes.textCenter)}
            >
              <p>
                Un artista de amplio rango, considerado uno de los mejores en
                todo Guadalajara, ha participado en diversas expos y ha
                destacado por tu tipo de arte "puntillismo" a lo largo de su
                carrera ha sido inspirado por tatuadores legendarios y así el
                mismo expresa que su arte es unico e incomparable.
              </p>
            </div>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Trabajos",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={7}
                          className={classes.gridItem}
                        >
                          <h3 className={classes.title}>
                            Ultimas Contribuciones
                          </h3>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + mariyaGeorgieva + ")"
                                }}
                              >
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="warning"
                                    className={classes.badge}
                                  >
                                    Mayo 2019
                                  </Badge>
                                  <a href="#pedro">
                                    <h2 className={classes.cardTitleWhite}>
                                      Stilleto Festival
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + clemOnojeghuo + ")"
                                }}
                              >
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color="info" className={classes.badge}>
                                    Octubre 2018
                                  </Badge>
                                  <a href="#pedro">
                                    <h2 className={classes.cardTitleWhite}>
                                      Expo Tattoo
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + oluEletu + ")"
                                }}
                              >
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    Agosto 2018
                                  </Badge>
                                  <a href="#pedro">
                                    <h2 className={classes.cardTitleWhite}>
                                      Ink Festival GDL
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + darrenColeshill + ")"
                                }}
                              >
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="success"
                                    className={classes.badge}
                                  >
                                    Enero 2019
                                  </Badge>
                                  <a href="#pedro">
                                    <h2 className={classes.cardTitleWhite}>
                                      Life Colors
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={3}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Estadísticas</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>216</b> Tatuajes
                            </li>
                            <li>
                              <b>188</b> Clientes
                            </li>
                            <li>
                              <b>52</b> Contribuciones
                            </li>
                            <li>
                              <b>5.2K</b> Likes
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>Sobre este trabajo</h4>
                          <p className={classes.description}>
                            Pedro Romo uno de las revelaciones de tatuajes en la
                            actualidad en la region de Guadalajara, incorpora
                            tendencias como el puntillismo entre otras tecnicas.
                          </p>
                          <hr />
                          <h4 className={classes.title}>Enfoques</h4>
                          <Badge color="primary">Puntillismo</Badge>
                          <Badge color="rose">Blanco y Negro</Badge>
                          <Badge color="rose">Chicano</Badge>
                          <Badge color="rose">Linea-Fina</Badge>
                          <Badge color="rose">Geometría</Badge>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Clientes",
                    tabIcon: People,
                    tabContent: (
                      <div>
                        <GridContainer justify="center">
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pedro">
                                      <img src={avatar} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + avatar + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Aimee Gonzalez
                                    </h4>
                                    <Muted>
                                      <h6>Empresaria</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Me encanto el trato que te da Pedro Romo,
                                      sus tatuajes son lo mejor que me me he
                                      podido poner en mi cuerpo. Simplemente el
                                      mejor.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pedro">
                                      <img src={marc} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + marc + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Hector Valle
                                    </h4>
                                    <Muted>
                                      <h6>Comerciante</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Pedro entendio perfectamente lo que queria
                                      hacerme de tatuaje, le plasmo su arte a mi
                                      idea. Ahora lo llevo conmigo toda la vida.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pedro">
                                      <img src={kendall} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + kendall + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Juan Ramirez
                                    </h4>
                                    <Muted>
                                      <h6>Skater Profesional</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Encontre al mejor tatuador en todo
                                      Guadalajara, su estilo de puntillismo es
                                      de lo mejor.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pedro">
                                      <img src={cardProfile2Square} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage:
                                          "url(" + cardProfile2Square + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Josue Ibarra
                                    </h4>
                                    <Muted>
                                      <h6>Modelo LGBT</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Ame sus diseños, practicamente llevo una
                                      parte de pedro en mi cuerpo. Lo
                                      recomiendo, es el mejor de todo
                                      Guadalajara.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </div>
                    )
                  },
                  {
                    tabButton: "Galería",
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src={mariyaGeorgieva}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={clemOnojegaw}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src={clemOnojeghuo}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={oluEletu}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={cynthiaDelRio}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
            </div>
            <Clearfix />
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a href="/" className={classes.block}>
                      INKSTR
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="/about-us" className={classes.block}>
                      Nosotros
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="/" className={classes.block}>
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="/" className={classes.block}>
                      Aviso de Privacidad
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , hecho con{" "}
                <Favorite className={classes.icon} /> por BEDU{" "}
                <a href="https://www.bedu.org/" target="_blank">
                  UX | Frontend
                </a>{" "}
                students.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ProfilePage);
