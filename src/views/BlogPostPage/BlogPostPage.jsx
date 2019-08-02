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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page
import SectionText from "./Sections/SectionText.jsx";
import SectionBlogInfo from "./Sections/SectionBlogInfo.jsx";
import SectionComments from "./Sections/SectionComments.jsx";
import SectionSimilarStories from "./Sections/SectionSimilarStories.jsx";

import blogPostPageStyle from "assets/jss/material-kit-pro-react/views/blogPostPageStyle.jsx";

class BlogPostPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Inkstr"
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "primary"
          }}
        />
        <Parallax image={require("assets/img/bg5.jpg")} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={8} className={classes.textCenter}>
                <h1 className={classes.title}>
                  ¿Cuánto tiempo tarda un tatuaje en sanar?
                </h1>
                <h4 className={classes.subtitle}>
                  Se necesitan 2-3 semanas para que un tatuaje sane por
                  completo. Durante ese tiempo, su piel hace muchas cosas para
                  curar su tatuaje: esto es lo que debe esperar y lo que no debe
                  esperar.
                </h4>
                <br />
                <Button color="rose" size="lg" round>
                  <FormatAlignLeft /> Leer articulo
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <SectionText />
            <SectionBlogInfo />
            <SectionComments />
          </div>
        </div>
        <SectionSimilarStories />
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

BlogPostPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(blogPostPageStyle)(BlogPostPage);
