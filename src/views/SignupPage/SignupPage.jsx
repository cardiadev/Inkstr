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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";

import image from "assets/img/bg7.jpg";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1]
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Inkstr"
          links={<HeaderLinks dropdownHoverColor="rose" />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>Registro</h2>
                  <CardBody>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={5} md={5}>
                        <InfoArea
                          className={classes.infoArea}
                          title="Perfil Personalizado"
                          description="Podras crear tu perfil y hacer el seguimiento de todos los artistas que eligas y sus trabajos"
                          icon={Check}
                          iconColor="rose"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Estudios de Tatuaje"
                          description="Obten información actualizada de todos los estudios de tatuaje que esten cerca de ti y las promociones que ofrecen."
                          icon={Check}
                          iconColor="rose"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Tatuadores Premium"
                          description="Encuentra a los mejores tatuadores de Guadalajara, nosotros nos encargamos de verificar la autenticidad de los tatuadores."
                          icon={Check}
                          iconColor="rose"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                        <div className={classes.textCenter}>
                          <Button justIcon round color="twitter">
                            <i
                              className={classes.socials + " fab fa-twitter"}
                            />
                          </Button>
                          {` `}
                          <Button justIcon round color="google">
                            <i className={classes.socials + " fab fa-google"} />
                          </Button>
                          {` `}
                          <Button justIcon round color="facebook">
                            <i
                              className={classes.socials + " fab fa-facebook-f"}
                            />
                          </Button>
                          {` `}
                          <h4 className={classes.socialTitle}>
                            o registrate a la antigua
                          </h4>
                        </div>
                        <form className={classes.form}>
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Nombre Completo..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Email
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Email..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Icon className={classes.inputAdornmentIcon}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                              ),
                              placeholder: "Password..."
                            }}
                          />
                          <br />
                          <FormControlLabel
                            classes={{
                              label: classes.label
                            }}
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => this.handleToggle(1)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={
                                  <Check className={classes.uncheckedIcon} />
                                }
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                                checked={
                                  this.state.checked.indexOf(1) !== -1
                                    ? true
                                    : false
                                }
                              />
                            }
                            label={
                              <span>
                                Estoy de acuerdo con los{" "}
                                <a href="#pablo">terminos y condiciones</a>.
                              </span>
                            }
                          />
                          <div className={classes.textCenter}>
                            <br />
                            <Button round color="primary">
                              Registrarse
                            </Button>
                          </div>
                        </form>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
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
      </div>
    );
  }
}

SignUpPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(signupPageStyle)(SignUpPage);
