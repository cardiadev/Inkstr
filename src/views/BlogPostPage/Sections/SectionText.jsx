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
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Quote from "components/Typography/Quote.jsx";
// core components

import blog4 from "assets/img/examples/blog4.jpg";
import blog3 from "assets/img/examples/blog3.jpg";
import blog1 from "assets/img/examples/blog1.jpg";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.jsx";

function SectionText({ ...props }) {
  const { classes } = props;
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Cuidados Basico de un Tatuaje</h3>
          <p>
            En Resumen:
            <br />
            <ul>
              <li>
                Manténgalo limpio con jabón antibacteriano, no lo frote ni lo
                pique, cúbralo con una capa ligera de A&D.
              </li>
              <li>
                ¡Continúe limpiando, pero no se sumerja en una piscina o bañera!
                Continuar usando A&D No recoja, pique ni pele las costras y
                escamas que se están formando.
              </li>
              <li>
                Use una capa ligera de loción sin perfume. Voila! Nueva dermis!
                Continúa usando loción para ver cómo tu hermoso tatuaje nuevo se
                cura perfectamente en este momento.
              </li>
            </ul>
          </p>
          <Quote
            textClassName={classes.quoteText}
            text="“El secreto de una buena cicatrización de un Tatuaje es dejar la piel respirar y mantenerla limpia, para evitar que se infecte.”"
            author="Pedro Romo, Tatuador"
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog4} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog3} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog1} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>El resto de la historia:</h3>
          <p>
            Por lo general, un tatuaje tarda entre 1 y 2 semanas en verse
            completamente curado, pero tarda otras semanas en curarse realmente
            en todas las capas de la piel. La línea de tiempo de curación puede
            depender del tipo de tinta que obtenga, el estilo y el tamaño. Las
            diferentes partes de su cuerpo tienen sensibilidades y tipos de piel
            ligeramente diferentes, lo que afectará qué tan bien absorben la
            tinta y qué tan rápido sanan. La curación completa de todas las
            capas de piel rota puede demorar hasta 4 meses, a pesar de que su
            tatuaje aparecerá curado antes de ese punto. El proceso de curación
            varía según el sistema inmunitario de una persona, la capacidad de
            combatir infecciones y el tratamiento posterior, especialmente la
            limpieza y la protección solar.
          </p>
          <p>
            Te acabas de tatuar y te ves increíble. Tienes las instrucciones de
            tu artista sobre el cuidado posterior, y estás listo para seguirlas
            hasta una T. Durante las próximas semanas, tu piel pasará por un
            proceso de curación: esto es lo que puedes esperar durante ese
            proceso y cómo para cuidar cada etapa. Solo recuerde, cada persona
            es un poco diferente fisiológicamente, por lo que su proceso de
            curación no se verá exactamente así, pero estará bastante cerca. Por
            lo general, tomará de 2 a 3 semanas para que su tatuaje sane por
            completo. Investigar antes eligiendo un salón de tatuajes de buena
            reputación minimizará el riesgo de complicaciones e infecciones.
            Tenga en cuenta que no somos médicos y su artista no es médico, así
            que llame a su médico de inmediato si sospecha una infección.
          </p>
          <p>
            Su tatuaje, especialmente si se trata de algo más que un simple
            trabajo de línea, en este momento será una costra. Su epidermis se
            está curando y ya no es una herida abierta: sus glóbulos blancos,
            los protectores de su sistema inmunitario, han trabajado junto con
            las proteínas plasmáticas en su cuerpo para crear una cubierta
            costrosa donde estaba su herida abierta. La tinta todavía está allí,
            debajo, pero la primera capa que flotaba en la epidermis se
            desprenderá.{" "}
            <strong>
              No escoja, no pele, no presione, no se meta con eso.{" "}
            </strong>
            La forma en que tratas esta etapa realmente puede afectar el arte:
            confía en nosotros, hemos dejado nuestros tatuajes nuevos y
            escamosos en suficientes rincones de la mesa para saberlo. Puedes
            usar un poco de crema hidratante para mantener tu piel hidratada,
            ¡pero no exageres!
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionText.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionTextStyle)(SectionText);
