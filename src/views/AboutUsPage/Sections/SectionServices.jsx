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
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.jsx";

function SectionServices(props) {
  const { classes } = props;
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Creamos algo increible para ti</h2>
          <h5 className={classes.description}>
            Simplemente genial, al utilizar Inkster, tambien estas apoyando
            otras causas beneficas, y tambien estaras dando un paso más adelante
            para tu proximo tatuaje.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Perfil Avanzado"
            description={
              <span>
                <p>
                  Podras crear un perfil avanzado donde podrás llevar un
                  seguimiento mas de cerca de los tatuadores e imagenes que te
                  hayan inspirado para tu proximo tatuaje.
                </p>
                <a href="#pablo">Leer más...</a>
              </span>
            }
            icon={Gesture}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Personaliza tu Experiencia"
            description={
              <span>
                <p>
                  Podrás personalizar tu experiencia de una forma distinta y
                  poder guardar todos esos ajustes con tu cuenta personal.
                </p>
                <a href="#pablo">Leer más...</a>
              </span>
            }
            icon={Build}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Interactua con los Artistas"
            description={
              <span>
                <p>
                  Manda mensajes y haz coneccion directamente con los artistas
                  de la plataforma.
                </p>
                <a href="#pablo">Leer más...</a>
              </span>
            }
            icon="mode_edit"
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionServices.propTypes = {
  classes: PropTypes.object
};

export default withStyles(servicesStyle)(SectionServices);
