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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.jsx";
import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.jsx";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.jsx";
import SectionOffice from "views/AboutUsPage/Sections/SectionOffice.jsx";
import SectionContact from "views/AboutUsPage/Sections/SectionContact";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";

class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Inkter"
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "primary"
          }}
        />
        <Parallax image={require("assets/img/bg9.jpg")} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h1 className={classes.title}>Inkstr</h1>
                <h4>
                  Es un App que genera valor a todo mundo y ofrecerte un todo en
                  uno, para que puedas realizar tu proximo tatuaje, mucho más
                  facil.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionDescription />
            {/* <SectionTeam /> */}
            <SectionServices />
            <SectionOffice />
            <SectionContact />
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
                    <a href="/blog-post" className={classes.block}>
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

AboutUsPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(aboutUsStyle)(AboutUsPage);
