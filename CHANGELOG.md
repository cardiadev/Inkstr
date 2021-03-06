# Change Log

## [1.7.0] 2019-06-19
### Warning
- **We've skipped versions 1.4.0, 1.5.0, 1.6.0 so that all React Material products would be on the same version.**
- **All linting errors are solved now, but due to google analytics stuff, we've needed to add target="_blank" to our links, so this lint error still exists.**
### Bug fixing
- Bugs from updated dependencies
- Removed `.env` file, and replaced it with the `jsconfig.json` file
- Changes caused by running [the prettier command](https://prettier.io/docs/en/install.html) for *.jsx*, *.js*, *.html* and *.css* files
- Changed all string refs to `React.createRef()`
- Added types validation in each component
- Solved linting issues
- Solved https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/34
### Major style changes
### Deleted components
- `src/routes/index.jsx`
### Added components
### Deleted dependencies
### Added dependencies
- typescript@3.5.1 (To stop console warnings)
### Updated dependencies
```
@material-ui/core          3.9.2   →    4.1.0
@material-ui/icons         3.0.2   →    4.1.0
@types/googlemaps        3.30.16   →   3.36.4
ajv                        6.9.1   →   6.10.0
animate.css                3.7.0   →    3.7.2
history                    4.7.2   →    4.9.0
node-sass                 4.11.0   →   4.12.0
nouislider                13.1.0   →   13.1.5
prop-types                15.7.1   →   15.7.2
react                     16.8.1   →   16.8.6
react-dom                 16.8.1   →   16.8.6
react-image-gallery       0.8.12   →   0.8.17
react-router-dom           4.3.1   →    5.0.1
react-scripts              2.1.5   →    3.0.1
react-slick               0.23.2   →   0.24.0
react-swipeable-views     0.13.1   →   0.13.3
eslint-config-prettier     4.0.0   →    4.3.0
eslint-plugin-prettier     3.0.1   →    3.1.0
eslint-plugin-react       7.12.4   →   7.13.0
prettier                  1.16.4   →   1.18.2
```



## [1.3.0] 2019-02-15
### Bug fixing
- Dropped dynamic routing
- Deleted two of the Card inside `src/views/LoginPage/LoginPage.jsx`
- Changes caused by running [the prettier command](https://prettier.io/docs/en/install.html) for *.jsx*, *.js*, *.html* and *.css* files
### Major styling changes
- Changes caused by the fact that all colors are now variables and the prettier command
### Deleted dependencies
- `node-sass-chokidar`
- `npm-run-all`
- `babel-eslint`
- `eslint`
### Added dependencies
- `node-sass` version: **4.11.0**
### Updated dependencies
- `@material-ui/core`          *3.1.1*   →     **3.9.2**
- `@material-ui/icons`         *3.0.1*   →     **3.0.2**
- `@types/googlemaps`        *3.30.13*   →   **3.30.16**
- `ajv`                        *5.0.0*   →     **6.8.1**
- `moment`                    *2.22.2*   →    **2.24.0**
- `nouislider`                *12.0.0*   →    **13.1.0**
- `prop-types`                *15.6.2*   →    **15.7.1**
- `react`                     *16.5.2*   →    **16.8.1**
- `react-datetime`            *2.15.0*   →    **2.16.3**
- `react-dom`                 *16.5.2*   →    **16.8.1**
- `react-image-gallery`       *0.8.11*   →    **0.8.12**
- `react-scripts`              *1.1.5*   →     **2.1.5**
- `react-slick`               *0.23.1*   →    **0.23.2**
- `react-swipeable-views`     *0.13.0*   →    **0.13.1**
- `eslint-config-prettier`     *3.0.1*   →     **4.0.0**
- `eslint-plugin-prettier`     *2.6.2*   →     **3.0.1**
- `eslint-plugin-react`       *7.11.1*   →    **7.12.4**
- `prettier`                  *1.14.3*   →    **1.16.4**



## [1.2.0] 2018-08-29
### Bug fixing
- Github own repo
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/5](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/5)
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/12](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/12)
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/13](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/13)
- Github other repos
  - [https://github.com/creativetimofficial/material-kit-react/issues/36](https://github.com/creativetimofficial/material-kit-react/issues/36)
  - [https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/68](https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/68)
  - [https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70](https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70)
  - [https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/79](https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/79)
### Major styling changes
- `src/assets/jss/material-kit-pro-react/components/snackbarContentStyle.jsx`
- `src/assets/jss/material-kit-pro-react/components/headerStyle.jsx`
- `src/assets/jss/material-kit-pro-react/views/loginPageStyle.jsx`
- `src/assets/jss/material-kit-pro-react/views/signupPageStyle.jsx`
- `src/assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.jsx`
- `src/assets/scss/plugins/_plugin-nouislider.scss`
### Deleted dependencies
- `react-nouislider` (since it was not well maintained)
### Added dependencies
- `nouislider`                `12.0.0` (instead of `react-nouislider`)
### Updated dependencies
- `@material-ui/core`          `1.5.0`   →     `3.1.1`
- `@material-ui/icons`         `2.0.2`   →     `3.0.1`
- `@types/googlemaps`        `3.30.11`   →   `3.30.13`
- `ajv`                        `6.5.2`   →     `5.0.0`
- `react`                     `16.4.2`   →    `16.5.2`
- `react-dom`                 `16.4.2`   →    `16.5.2`
- `react-image-gallery`       `0.8.10`   →    `0.8.11`
- `react-scripts`              `1.1.4`   →     `1.1.5`
- `react-swipeable-views`    `0.12.16`   →    `0.13.0`
- `eslint-config-prettier`    `^2.9.0`   →     `3.1.0`
- `eslint-plugin-react`      `^7.10.0`   →    `7.11.1`
- `prettier`                 `^1.13.7`   →   ` 1.14.3`


## [1.1.0] 2018-08-14
### Bug fixing
- No more use of `react-popper`, no it's beeing used `@material-ui/core/Popper` instead (see `CustomDropdown`)
- Github issues
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/1](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/1)
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/2](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/2)
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/3](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/3)
### Major styling changes
- Added styles for `svg`'s, **font-awesome** classes and `.material-icons` class inside
  - `src/assets/jss/material-kit-pro-react/components/buttonStyle.jsx`
	- `src/assets/jss/material-kit-pro-react/components/cardStyle.jsx`
	- `src/assets/jss/material-kit-pro-react/components/customInputStyle.jsx`
	- `src/assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx`
	- `src/assets/jss/material-kit-pro-react/components/infoStyle.jsx`
	- `src/assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx`
	- `src/assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx`
	- `src/assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle.jsx`
	- `src/assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx`
	- `src/assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx`
	- `src/assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx`
	- `src/assets/jss/material-kit-pro-react/views/sectionsSections/pricingStyle.jsx`
	- `src/assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.jsx`
	- `src/assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx`
- Others
  - `src/assets/jss/material-kit-pro-react/views/productStyle.jsx`
### Deleted dependencies
- `react-parallax v1.7.0`
### Updated dependencies
- `@material-ui/core v1.3.1` to `@material-ui/core v1.5.0`
- `@material-ui/icons v1.1.0` to `@material-ui/icons v2.0.2`
- `@types/googlemaps v3.30.8` to `@types/googlemaps v3.30.11`
- `animate.css v3.6.1` to `animate.css v3.7.0`
- `moment v2.22.1` to `moment v2.22.2`
- `node-sass-chokidar v1.3.0` to `node-sass-chokidar v1.3.3`
- `npm-run-all v4.1.2` to `npm-run-all v4.1.3`
- `react v16.3.1` to `react v16.4.2`
- `react-animate-on-scroll v2.1.4` to `react-animate-on-scroll v2.1.5`
- `react-datetime v2.14.0` to `react-datetime v2.15.0`
- `react-dom v16.3.1` to `react-dom v16.4.2`
- `react-image-gallery v0.8.7` to `react-image-gallery v0.8.10`
- `react-router-dom v4.2.2` to `react-router-dom v4.3.1`
- `react-swipeable-views v0.12.13` to `react-swipeable-views v0.12.16`

## [1.0.0] 2018-07-20
### Original Release
- Added Material-UI as base framework
- Added design from Material Dashboard by Creative Tim
