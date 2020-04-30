import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, FormControlLabel, SvgIcon } from "@material-ui/core";
import { Lens } from "@material-ui/icons";
import PropTypes from "prop-types";
import GenericWidget from "../SystemComponents/Widgets/GenericWidget";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  FormControl: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

/**
 * The BitIndicators Component is a wrapper on multiple SvgIcon components.
 * Each SvgIcon component indicates the value of each of the bits of the PV Value.
 * <br/><br/>
 * Material-UI SvgIcon Demos:
 * https://material-ui.com/style/icons/<br/><br/>
 * Material-UI SvgIcon API:
 * https://material-ui.com/api/svg-icon/<br/><br/>
 * A custom Icon can used by importing it in the parent and assigning it as a child <br/><br/>
 */
function BitIndicatorsComponent(props) {



  let onColor = props.theme.palette.primary.main;
  let offColor = props.theme.palette.grey[50];
  if (typeof props.onColor !== 'undefined') {
    if (props.onColor === 'primary') {
      onColor = props.theme.palette.primary.main;
    }
    else if (props.onColor === 'secondary') {
      onColor = props.theme.palette.secondary.main;
    }
    else if (props.onColor === 'default') {
      onColor = props.theme.palette.grey[50];
    }
    else {
      onColor = props.onColor;
    }
  }

  if (typeof props.offColor !== 'undefined') {
    if (props.offColor === 'primary') {
      offColor = props.theme.palette.primary.main;
    }
    else if (props.offColor === 'secondary') {
      offColor = props.theme.palette.secondary.main;
    }
    else if (props.offColor === 'default') {
      offColor = props.theme.palette.grey[50];
    }
    else {
      offColor = props.offColor;
    }
  }

  let bitArray = [];
  let bitLabels = [];
  let bitStyles = [];


  let bitLabelPos =
    props.bitLabelPlacement !== undefined
      ? props.bitLabelPlacement
      : props.horizontal
        ? "top"
        : "end";
  const place = bitLabelPos.charAt(0).toUpperCase() + bitLabelPos.slice(1);

  for (let n = 0; n < props.numberOfBits; n++) {
    bitArray.push(
      props.connection ? props.value & Math.pow(2, n) : 0
    );
    bitLabels.push(
      props.bitLabels === undefined
        ? "Bit " + n
        : props.bitLabels[n]
    );
    bitStyles.push({ ["margin" + place]: props.theme.spacing(1) });
  }
  if (props.reverseBits) {
    bitLabels = bitLabels.reverse();
    bitArray = bitArray.reverse();
    bitStyles = bitStyles.reverse();
  }

  let bits = bitArray.map((value, index) => {
    let color = props.disabled
      ? "disabled"
      : value !== 0
        ? onColor
        : offColor;
    return (
      <Grid
        item
        key={index + bitLabels[index]}
        xs={!props.horizontal ? 12 : undefined}
      >
        <FormControlLabel
          className={props.classes.FormControl}
          disabled={props.disabled}
          label={bitLabels[index]}
          labelPlacement={bitLabelPos}
          control={
            <SvgIcon size="small" style={bitStyles[index]} style={{ color: color }}>
              {props.children === undefined ? (
                <Lens />
              ) : (
                  props.children
                )}
            </SvgIcon>
          }
        />
      </Grid>
    );
  });
  return (
    <Grid
      key={props.pvName}
      container
      spacing={props.horizontal ? 2 : 0}
      alignItems="flex-start"
      direction={props.horizontal ? "row" : "column"}
    >
      <Grid key={props.label} item xs={12}>
        {props.label}
      </Grid>
      {bits}
    </Grid>
  );
}

/**
 * Specific props type and default values for this widgets.
 * They extends the ones provided for a generic widget.
 */




class BitIndicators extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <GenericWidget {...this.props}>
        {(widgetProps) => {
          return (
            <BitIndicatorsComponent {...this.props} {...widgetProps} />
          )
        }
        }
      </GenericWidget>
    )
  }
}

BitIndicators.propTypes = {
  // Array of custom bit labels.
  bitLabels: PropTypes.array,
  // If defined, the position of the bit labels relative to the widget.
  bitLabelPlacement: PropTypes.oneOf(["start", "end", "top", "bottom"]),
  // Number of bits to indicate.
  numberOfBits: PropTypes.number,
  // Display bits horizontally.
  horizontal: PropTypes.bool,
  // Reverse bits order.
  reverseBits: PropTypes.bool,
};

BitIndicators.defaultProps = {
  numberOfBits: 8,
  horizontal: false,
  reverseBits: false,
};
export default withStyles(styles, { withTheme: true })(BitIndicators);
