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
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Reply from "@material-ui/icons/Reply";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Media from "components/Media/Media.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import profile4 from "assets/img/faces/card-profile4-square.jpg";
import profile1 from "assets/img/faces/card-profile1-square.jpg";
import profile6 from "assets/img/faces/card-profile6-square.jpg";

import sectionCommentsStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionCommentsStyle.jsx";

function SectionComments({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h3 className={classes.title}>3 Comentarios</h3>
            <Media
              avatar={profile4}
              title={
                <span>
                  Tina Lavalatina <small>· 5 dias antes</small>
                </span>
              }
              body={
                <p className={classes.color555}>
                  Yo trate de cuidarme mi tatuaje, pero por no tener los debidos
                  cuidados ahora parece deslavado, y tengo que ir a que me lo
                  retoquen, como dicen el holgazan trabaja doble, jajaja XD
                </p>
              }
              footer={
                <div>
                  <Tooltip
                    id="tooltip-tina"
                    title="Reply to comment"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="primary"
                      simple
                      className={classes.footerButtons}
                    >
                      <Reply className={classes.footerIcons} /> Responder
                    </Button>
                  </Tooltip>

                  <Button
                    color="danger"
                    simple
                    className={classes.footerButtons}
                  >
                    <Favorite className={classes.footerIcons} /> 243
                  </Button>
                </div>
              }
            />
            <Media
              avatar={profile1}
              title={
                <span>
                  Juan Ramirez <small>· 2 horas antes</small>
                </span>
              }
              body={
                <span className={classes.color555}>
                  <p>
                    Yo pase por algo similar, no me cuide, pero así pasa por no
                    tener la información adecuada.
                  </p>
                  <p>No lo olvides eres INCREIBLE !</p>
                </span>
              }
              footer={
                <div>
                  <Tooltip
                    id="tooltip-john"
                    title="Reply to comment"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      color="primary"
                      simple
                      className={classes.footerButtons}
                    >
                      <Reply className={classes.footerIcons} /> Responder
                    </Button>
                  </Tooltip>

                  <Button link className={classes.footerButtons}>
                    <Favorite className={classes.footerIcons} /> 25
                  </Button>
                </div>
              }
              innerMedias={[
                <Media
                  key={Date.now()}
                  avatar={profile4}
                  title={
                    <span>
                      Tina Lavalatina <small>· 7 minutos antes</small>
                    </span>
                  }
                  body={
                    <span className={classes.color555}>
                      <p>
                        Eso si Juan, pero de ahora en adelante tendre los
                        cuidados que requiere mi tatuaje.
                      </p>
                    </span>
                  }
                  footer={
                    <Tooltip
                      id="tooltip-tina2"
                      title="Reply to comment"
                      placement="top"
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        color="primary"
                        simple
                        className={classes.footerButtons}
                      >
                        <Reply className={classes.footerIcons} /> Responder
                      </Button>
                    </Tooltip>
                  }
                />
              ]}
            />
          </div>
          <h3 className={classes.title}>Postea tu comentario</h3>
          <Media
            avatar={profile6}
            body={
              <CustomInput
                labelText=" Escribe algo importante o talvez no..."
                id="nice"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
            }
            footer={
              <Button color="primary" round className={classes.footerButtons}>
                Postear comentario
              </Button>
            }
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionComments.propTypes = {
  classes: PropTypes.object
};

export default withStyles(sectionCommentsStyle)(SectionComments);
