/* eslint-disable react/prop-types */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Input from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import ArrowDropDownIcon from "material-ui-icons/ArrowDropDown";
import CancelIcon from "material-ui-icons/Cancel";
import ArrowDropUpIcon from "material-ui-icons/ArrowDropUp";
import ClearIcon from "material-ui-icons/Clear";
import Chip from "material-ui/Chip";
import Select from "react-select";
import Button from "material-ui/Button";
// import Autors from './auteurs_internes'
import "react-select/dist/react-select.css";
// import Autors from './auteurs_internes.json'
const suggestions2 = [
  { label: "ADRIEN GOMBEAUD" },
  { label: "ADRIEN LELIEVRE" },
  { label: "ALAIN RUELLO" },
  { label: "ALEXANDRE COUNIS" },
  { label: "ALICE D'ORGEVAL" },
  { label: "AMINATA N'DIAYE" },
  { label: "ANNE BAUER" },
  { label: "ANNE DRIF" },
  { label: "ANNE FEITZ" },
  { label: "ANNE FLATEAU" },
  { label: "ANNE PITOISET" },
  { label: "ANNE-MARIE GELINET" },
  { label: "ANNE-SOPHIE VION" },
  { label: "ANTOINE BOUDET" },
  { label: "ANTOINE JACOB" },
  { label: "ARIANE GAUDEFROY" },
  { label: "ARNAUD LE GAL" },
  { label: "ASTRID FAGUER" },
  { label: "AUDE VILLIERS-MORIAME" },
  { label: "AUGUSTIN LANDIER" },
  { label: "BENEDICTE EPINAY" },
  { label: "BENJAMIN QUENELLE" },
  { label: "BENOIT GEORGES" },
  { label: "BERNARD GROLLIER" },
  { label: "BORIS CORIDIAN" },
  { label: "BRUNO BONNELL" },
  { label: "BRUNO TREVIDIC" },
  { label: "CAMILLE BOULATE" },
  { label: "CAMILLE VINCENT" },
  { label: "CATHERINE CHATIGNOUX" },
  { label: "CATHERINE DUCRUET" },
  { label: "CATHERINE SABBAH" },
  { label: "CECILE CORNUDET" },
  { label: "CECILE THIBAUD" },
  { label: "CECILIA DELPORTE" },
  { label: "CEDRIC FREOUR" },
  { label: "CELIA PENAVAIRE" },
  { label: "CELINE DUPIN" },
  { label: "CHANTAL HOUZELLE" },
  { label: "CHRISTIAN LIENHARDT" },
  { label: "CHRISTIAN SIMENC" },
  { label: "CHRISTIANE NAVAS" },
  { label: "CHRISTIANE PERRUCHOT" },
  { label: "CHRISTIANE WANAVERBECQ" },
  { label: "CHRISTINE BERKOVICIUS" },
  { label: "CHRISTOPHE PALIERSE" },
  { label: "CLAUDE FOUQUET" },
  { label: "CLAUDE VINCENT" },
  { label: "CLEMENCE DUNAND" },
  { label: "CLOTILDE BRIARD" },
  { label: "DAISY LORENZI" },
  { label: "DANIEL BASTIEN" },
  { label: "DANIEL FORTIN" },
  { label: "DAVID BARROUX" },
  { label: "DAVID LAUGIER" },
  { label: "DAVID THESMAR" },
  { label: "DENIS FAINSILBER" },
  { label: "DENIS MEYNARD" },
  { label: "DEREK PERROTTE" },
  { label: "DIDIER BONNET" },
  { label: "DIDIER BURG" },
  { label: "DIDIER HUGUE" },
  { label: "DOMINIQUE AUBIN" },
  { label: "DOMINIQUE CHAPUIS" },
  { label: "DOMINIQUE CHARTON" },
  { label: "DOMINIQUE MALECOT" },
  { label: "DOMINIQUE MOISI" },
  { label: "DOMINIQUE SEUX" },
  { label: "DONAT VIDAL-REVEL" },
  { label: "DOUNIA HADNI" },
  { label: "EDOUARD LEDERER" },
  { label: "EDOUARD TETREAU" },
  { label: "ELENA FOURES" },
  { label: "ELEONORE DE BAILLIENCOURT" },
  { label: "ELSA CONESA" },
  { label: "ELSA DICHARRY" },
  { label: "ELSA FREYSSENET" },
  { label: "EMMANUEL GRASLAND" },
  { label: "EMMANUEL GUIMARD" },
  { label: "EMMANUELLE DUTEN" },
  { label: "ENRIQUE MOREIRA" },
  { label: "ERIC ALBERT" },
  { label: "ERIC JANSEN" },
  { label: "ERIC LE BOUCHER" },
  { label: "ETIENNE COMBIER" },
  { label: "ETIENNE GOETZ" },
  { label: "ETIENNE LEFEBVRE" },
  { label: "FABIENNE SCHMITT" },
  { label: "FAVILLA" },
  { label: "FLORENCE BAUCHARD" },
  { label: "FLORENCE LE NEVE" },
  { label: "FLORIAN DEBES" },
  { label: "FRANCK MOULIN" },
  { label: "FRANCOIS VIDAL" },
  { label: "FRANK NIEDERCORN" },
  { label: "FREDERIC PICARD" },
  { label: "FREDERIC SCHAEFFER" },
  { label: "FREDERIC THERIN" },
  { label: "FREDERIQUE DEDET" },
  { label: "FREDERIQUE HUMBLOT" },
  { label: "GABRIEL GRESILLON" },
  { label: "GABRIELLE SERRAZ" },
  { label: "GAELLE LUCAS" },
  { label: "GEORGES MOATI" },
  { label: "GILLES DENIS" },
  { label: "GREGOIRE POUSSIELGUE" },
  { label: "GUILLAUME BENOIT" },
  { label: "GUILLAUME BREGERAS" },
  { label: "GUILLAUME DE CALIGNON" },
  { label: "GUILLAUME MAUJEAN" },
  { label: "GUILLAUME ROUSSANGE" },
  { label: "HELENE DAVID" },
  { label: "HENRI GIBIER" },
  { label: "HERVE LE TREUT" },
  { label: "HUBERT VIALATTE" },
  { label: "INGRID FEUERSTEIN" },
  { label: "ISABELLE COUET" },
  { label: "ISABELLE FICEK" },
  { label: "ISABELLE LESNIAK" },
  { label: "JACQUES HENNO" },
  { label: "JACQUES HUBERT-RODIER" },
  { label: "JEAN ROQUECAVE" },
  { label: "JEAN-BAPTISTE DE FRANSSU" },
  { label: "JEAN-FRANCIS PECRESSE" },
  { label: "JEAN-FRANCOIS BOULIER" },
  { label: "JEAN-HERVE LORENZI" },
  { label: "JEAN-JACQUES FRANCK" },
  { label: "JEAN-LOUIS FRECHIN" },
  { label: "JEAN-MARC JANCOVICI" },
  { label: "JEAN-MARC RAFFAELLI" },
  { label: "JEAN-MARC VITTORI" },
  { label: "JEAN-MARIE COLOMB" },
  { label: "JEAN-MICHEL CEDRO" },
  { label: "JEAN-MICHEL GRADT" },
  { label: "JEAN-PHILIPPE LACOUR" },
  { label: "JEAN-PHILIPPE LOUIS" },
  { label: "JEAN-PIERRE GOURVEST" },
  { label: "JEROME BADIE" },
  { label: "JOEL COSSARDEAUX" },
  { label: "JOHANNE COURBATERE DE GAUDRIC" },
  { label: "JOSE ALVES" },
  { label: "JOSEPH STIGLITZ" },
  { label: "JUDITH BENHAMOU-HUET" },
  { label: "JULIE CHAUVEAU" },
  { label: "JULIEN DAMON" },
  { label: "JULIEN DUPONT-CALBO" },
  { label: "KARL DE MEYER" },
  { label: "KENNETH ROGOFF" },
  { label: "LAMIA BARBOT" },
  { label: "LAURA BERNY" },
  { label: "LAURA FERNANDEZ RODRIGUEZ" },
  { label: "LAURANCE N'KAOUA" },
  { label: "LAURENCE ALBERT" },
  { label: "LAURENCE BOCCARA" },
  { label: "LAURENCE BOISSEAU" },
  { label: "LAURENCE SALMON" },
  { label: "LAURENE DAYCARD" },
  { label: "LAURENT FLALLO" },
  { label: "LAURENT GUEZ" },
  { label: "LAURENT MARCAILLOU" },
  { label: "LAURENT THEVENIN" },
  { label: "LEILA DE COMARMOND" },
  { label: "LEILA MARCHAND" },
  { label: "LIONEL STEINMANN" },
  { label: "LIZA FABBIAN" },
  { label: "LUCIE ROBEQUAIN" },
  { label: "LUDOVIC PARISOT" },
  { label: "MARC BERTONECHE" },
  { label: "MARC LACHIEZE-REY" },
  { label: "MARC-ANTOINE HARTEMANN" },
  { label: "MARIANA REALI" },
  { label: "MARIANNE BLIMAN" },
  { label: "MARIANNE SKORPIS" },
  { label: "MARIE BELLAN" },
  { label: "MARIE HAUTEFORT" },
  { label: "MARIE-ANNICK DEPAGNEUX" },
  { label: "MARIE-CHRISTINE CORBIER" },
  { label: "MARIE-CHRISTINE SONKIN" },
  { label: "MARIE-JOSEE COUGARD" },
  { label: "MARIE-SOPHIE RAMSPACHER" },
  { label: "MARINA ALCARAZ" },
  { label: "MARINE DE LA MOISSONNIERE" },
  { label: "MARION DEGEORGES" },
  { label: "MARION KINDERMANS" },
  { label: "MARJORIE CESSAC" },
  { label: "MARTINE ROBERT" },
  { label: "MASSIMO PRANDI" },
  { label: "MATTHIEU QUIRET" },
  { label: "MAXIME AMIOT" },
  { label: "MICHEL BETTANE" },
  { label: "MICHEL DE GRANDI" },
  { label: "MICHEL LEVY-PROVENCAL" },
  { label: "MICHEL TALY" },
  { label: "MONIQUE CLEMENS" },
  { label: "MURIEL JASOR" },
  { label: "MURYEL JACQUE" },
  { label: "MYRIAM CHAUVOT" },
  { label: "NATHALIE HAMOU" },
  { label: "NATHALIE SILBERT" },
  { label: "NESSIM AIT-KACIMI" },
  { label: "NICOLAS BARRE" },
  { label: "NICOLAS D'ESTIENNE D'ORVES" },
  { label: "NICOLAS DE ROUYN" },
  { label: "NICOLAS MADELAINE" },
  { label: "NICOLAS RAULINE" },
  { label: "NICOLAS RICHAUD" },
  { label: "NICOLE BUYSE" },
  { label: "NINON RENAUD" },
  { label: "NOURIEL ROUBINI" },
  { label: "OLIVIA BASSI" },
  { label: "OLIVIER DUCUING" },
  { label: "OLIVIER HARMANT" },
  { label: "OLIVIER OULLIER" },
  { label: "OLIVIER TOSSERI" },
  { label: "OLIVIER UBERTALLI" },
  { label: "PASCAL AMBROSI" },
  { label: "PASCAL PICQ" },
  { label: "PASCAL POGAM" },
  { label: "PASCALE MISSOUD" },
  { label: "PASCALE-MARIE DESCHAMPS" },
  { label: "PATRICK ARTUS" },
  { label: "PATRICK LEGLAND" },
  { label: "PATRICK VERCESI" },
  { label: "PAUL MOLGA" },
  { label: "PHILIPPE BERTRAND" },
  { label: "PHILIPPE CHEVILLEY" },
  { label: "PHILIPPE ITHURBIDE" },
  { label: "PHILIPPE LEGUELTEL" },
  { label: "PHILIPPE MOREAU" },
  { label: "PHILIPPE NOISETTE" },
  { label: "PHILIPPE VENTURINI" },
  { label: "PIERRE DE GASQUET" },
  { label: "PIERRE DEMOUX" },
  { label: "PIERRE DONADIEU" },
  { label: "PIERRE ETCHELEKU" },
  { label: "PIERRE-ALAIN FURBURY" },
  { label: "PIERRICK FAY" },
  { label: "RAPHAEL SACHETAT" },
  { label: "RENAUD HONORE" },
  { label: "RENE RICOL" },
  { label: "RICHARD HIAULT" },
  { label: "ROGER-POL DROIT" },
  { label: "ROMAIN GUEUGNEAU" },
  { label: "SABINE DELANGLADE" },
  { label: "SAMUEL CHALOM" },
  { label: "SANDRINE MERLE" },
  { label: "SEBASTIEN DUMOULIN" },
  { label: "SHARON WAJSBROT" },
  { label: "SOLVEIG GODELUCK" },
  { label: "SOPHIE ROLLAND" },
  { label: "SOPHIE ROSEMONT" },
  { label: "STANISLAS DU GUERNY" },
  { label: "STEFANO LUPIERI" },
  { label: "STEPHANE DUPONT" },
  { label: "STEPHANE FRACHET" },
  { label: "SYLVAIN OUCHIKH" },
  { label: "SYLVIE JOLIVET" },
  { label: "SYLVIE LEROND" },
  { label: "SYLVIE RAMADIER" },
  { label: "THIBAUT MADELIN" },
  { label: "THIERRY DESSEAUVE" },
  { label: "THIERRY GANDILLOT" },
  { label: "THIERRY OGIER" },
  { label: "VALERIE DE SENNEVILLE" },
  { label: "VALERIE LANDRIEU" },
  { label: "VALERIE LEBOUCQ" },
  { label: "VALERIE MAZUIR" },
  { label: "VALERIE TALMON" },
  { label: "VERONIQUE CHOCRON" },
  { label: "VERONIQUE LE BILLON" },
  { label: "VERONIQUE RICHEBOIS" },
  { label: "VINCENT CHARBONNIER" },
  { label: "VINCENT COLLEN" },
  { label: "VIRGINIE ROBERT" },
  { label: "XAVIER FONTANET" },
  { label: "YANN ROUSSEAU" },
  { label: "YANN VERDO" },
  { label: "YVES BOURDILLON" },
  { label: "YVES VILAGINES" }
];
const suggestions = suggestions2.map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

class Option extends React.Component {
  handleClick = event => {
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { children, isFocused, isSelected, onFocus } = this.props;

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        {children}
      </MenuItem>
    );
  }
}

function SelectWrapped(props) {
  const { classes, ...other } = props;

  return (
    <Select
      optionComponent={Option}
      noResultsText={<Typography>{"No results found"}</Typography>}
      arrowRenderer={arrowProps => {
        return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
      }}
      clearRenderer={() => <ClearIcon />}
      valueComponent={valueProps => {
        const { value, children, onRemove } = valueProps;

        const onDelete = event => {
          event.preventDefault();
          event.stopPropagation();
          onRemove(value);
        };

        if (onRemove) {
          return (
            <Chip
              tabIndex={-1}
              label={children}
              className={classes.chip}
              deleteIcon={<CancelIcon onTouchEnd={onDelete} />}
              onDelete={onDelete}
            />
          );
        }
        return <div className="Select-value">{children}</div>;
      }}
      {...other}
    />
  );
}

const ITEM_HEIGHT = 48;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 200,
    width: 200
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  // We had to use a lot of global selectors in order to style react-select.
  // We are waiting on https://github.com/JedWatson/react-select/issues/1679
  // to provide a better implementation.
  // Also, we had to reset the default style injected by the library.
  "@global": {
    ".Select-control": {
      display: "flex",
      alignItems: "center",
      border: 0,
      height: "auto",
      background: "transparent",
      "&:hover": {
        boxShadow: "none"
      }
    },
    ".Select-multi-value-wrapper": {
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap"
    },
    ".Select--multi .Select-input": {
      margin: 0
    },
    ".Select.has-value.is-clearable.Select--single > .Select-control .Select-value": {
      padding: 0
    },
    ".Select-noresults": {
      padding: theme.spacing.unit * 2
    },
    ".Select-input": {
      display: "inline-flex !important",
      padding: 0,
      height: "auto"
    },
    ".Select-input input": {
      background: "transparent",
      border: 0,
      padding: 0,
      cursor: "default",
      display: "inline-block",
      fontFamily: "inherit",
      fontSize: "inherit",
      margin: 0,
      outline: 0
    },
    ".Select-placeholder, .Select--single .Select-value": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(16),
      padding: 0
    },
    ".Select-placeholder": {
      opacity: 0.42,
      color: theme.palette.common.black
    },
    ".Select-menu-outer": {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      position: "absolute",
      left: 0,
      top: `calc(100% + ${theme.spacing.unit}px)`,
      width: "100%",
      zIndex: 2,
      maxHeight: ITEM_HEIGHT * 4.5
    },
    ".Select.is-focused:not(.is-open) > .Select-control": {
      boxShadow: "none"
    },
    ".Select-menu": {
      maxHeight: ITEM_HEIGHT * 4.5,
      overflowY: "auto"
    },
    ".Select-menu div": {
      boxSizing: "content-box"
    },
    ".Select-arrow-zone, .Select-clear-zone": {
      color: theme.palette.action.active,
      cursor: "pointer",
      height: 21,
      width: 21,
      zIndex: 1
    },
    // Only for screen readers. We can't use display none.
    ".Select-aria-only": {
      position: "absolute",
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
      height: 1,
      width: 1,
      margin: -1
    }
  }
});

class IntegrationReactSelect extends React.Component {
  state = {
    single: null,
    multi: null
  };

  handleChangeSingle = single => {
    this.setState({
      single
    });
  };

  handleChangeMulti = multi => {
    this.setState({
      multi
    });
  };

  render() {
    console.log(this.props);
    console.log(this.state);
    const { classes } = this.props;
    const { single, multi } = this.state;

    return (
      <div className={classes.root}>
        {/* <Input
          fullWidth
          inputComponent={SelectWrapped}
          inputProps={{
            classes,
            value: single,
            onChange: this.handleChangeSingle,
            placeholder: 'Select single-value…',
            instanceId: 'react-select-single',
            id: 'react-select-single',
            name: 'react-select-single',
            simpleValue: true,
            options: suggestions,
          }}
        /> */}
        <Input
          fullWidth
          inputComponent={SelectWrapped}
          inputProps={{
            classes,
            value: multi,
            multi: true,
            onChange: this.handleChangeMulti,
            placeholder: "Select multi-value…",
            instanceId: "react-select-chip",
            id: "react-select-chip",
            name: "react-select-chip",
            simpleValue: true,
            options: suggestions
          }}
        />
        <Button variant="raised" color="primary" href={"http://localhost:4001/perma:"+multi}>
          push to api
        </Button>
      </div>
    );
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntegrationReactSelect);
