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
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.jsx";
import SectionComponents from "views/PresentationPage/Sections/SectionComponents.jsx";
import SectionCards from "views/PresentationPage/Sections/SectionCards.jsx";
import SectionContent from "views/PresentationPage/Sections/SectionContent.jsx";
import SectionSections from "views/PresentationPage/Sections/SectionSections.jsx";
import SectionExamples from "views/PresentationPage/Sections/SectionExamples.jsx";
import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.jsx";
import SectionOverview from "views/PresentationPage/Sections/SectionOverview.jsx";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.jsx";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";

class PresentationPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Header
          absolute
          brand="Creative Tim"
          color="transparent"
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "primary"
          }}
          links={<HeaderLinks dropdownHoverColor="info" />}
        /> */}
        <Header
          brand="INKSTR"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "primary"
          }}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Inkstr</h1>
                  <h3 className={classes.subtitle}>Más que solo Tatuajes</h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionDescription />
          <SectionComponents />
          <SectionCards />
          <SectionContent />
          <SectionSections />
          <SectionExamples />
          <SectionFreeDemo />
          <SectionOverview />
        </div>
        <SectionPricing />
        <Footer
          theme="white"
          content={
            <div>
              <div className={classes.left}>
                <a
                  href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-presentation"
                  target="_blank"
                  className={classes.footerBrand}
                >
                  Inkstr | Tattoo App
                </a>
              </div>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a href="#" target="_blank" className={classes.block}>
                      Inicio
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="#" target="_blank" className={classes.block}>
                      Nosotros
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="#" className={classes.block}>
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a href="#" target="_blank" className={classes.block}>
                      Aviso de Privacidad
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <Button
                      href="https://twitter.com/Inkstr"
                      target="_blank"
                      color="twitter"
                      justIcon
                      simple
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://facebook.com/Inkstr"
                      target="_blank"
                      color="facebook"
                      justIcon
                      simple
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://dribbble.com/Inkster"
                      target="_blank"
                      color="dribbble"
                      justIcon
                      simple
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://instagram.com/Inkstr"
                      target="_blank"
                      color="instagram"
                      justIcon
                      simple
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

PresentationPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(presentationStyle)(PresentationPage);
