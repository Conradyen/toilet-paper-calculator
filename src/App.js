import React, { useState } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToiletPaper,
  faWineBottle,
  faMask,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import calculateDate from "./utils";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Footer from "./Footer";

const ICONCOLOR = "#1554e8";
const useStyles = makeStyles({
  SlidingBar: {
    width: "80%",
    padding: "1px",
    textAlign: "center",
    verticalAlign: "middle",
    margin: "auto"
  },
  smallItem: {
    padding: "1px"
  },
  formControl: {
    minWidth: "150px",
    margin: "10px"
  },
  App: {
    textAlign: "center"
  },
  details: {
    margin: "20px"
  },
  innerdiv: {
    textAlign: "center"
  }
});

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}

function dateToString(theday) {
  return (theday.getMonth() + 1).toString() + "/" + theday.getDate().toString();
}

function App() {
  const classes = useStyles();
  const [numRoll, setRolls] = useState(5);
  const [useRoll, setuseRolls] = useState(5);
  const [numbottle, setBottle] = useState(10);
  const [usebottle, setuseBottle] = useState(5);
  const [numMask, setnumMask] = useState(7);
  const [useMask, setuseMask] = useState(7);

  const handleRollChange = (event, newValue) => {
    setRolls(newValue);
  };

  const handleuseRollChange = (event, newValue) => {
    setuseRolls(event.target.value);
  };

  const handleBottleChange = (event, newValue) => {
    setBottle(newValue);
  };
  const handleuseBottleChange = (event, newValue) => {
    setuseBottle(event.target.value);
  };

  const handleMaskChange = (event, newValue) => {
    setnumMask(newValue);
  };

  const handleuseMaskChange = (event, newValue) => {
    setuseMask(event.target.value);
  };

  const calsulateRemainDayOfRoll = (numRoll, useRoll) => {
    //one roll last for 10 times
    return Math.floor((numRoll * 10) / useRoll);
  };

  const calsulateRemainDayOfBottle = (numbottle, usebottle) => {
    //55 ml per bottle
    return Math.floor((numbottle * 550) / (1000 * usebottle));
  };
  const calsulateRemainDayOfMask = (numMask, useMask) => {
    return Math.floor(numMask / useMask);
  };
  const getDaysbeforeShopping = () => {
    var min = numRoll;
    var arr = [
      calsulateRemainDayOfRoll(numRoll, useRoll),
      calsulateRemainDayOfBottle(numbottle, usebottle),
      calsulateRemainDayOfMask(numMask, useMask)
    ];
    for (var i of arr) {
      if (i <= min) {
        min = i;
      }
    }
    return min;
  };

  return (
    <div className={classes.App}>
      <header className="App-header">
        <FontAwesomeIcon
          className="App-logo"
          icon={faCog}
          color={"#3fe085"}
          size="6x"
        />
      </header>
      <h1>{dateToString(calculateDate(getDaysbeforeShopping()))}</h1>
      <h1>
        {getDaysbeforeShopping()}
        {" days before next shopping trip"}
      </h1>
      <div className={classes.details}>
        <Typography>
          {"Remaining tolite paper can last "}
          {calsulateRemainDayOfRoll(numRoll, useRoll)}
          {" days, until "}
          {dateToString(
            calculateDate(calsulateRemainDayOfRoll(numRoll, useRoll))
          )}
        </Typography>
        <Typography>
          {"Remaining bottle water can last "}
          {calsulateRemainDayOfBottle(numbottle, usebottle)}
          {" days, until "}
          {dateToString(
            calculateDate(calsulateRemainDayOfBottle(numbottle, usebottle))
          )}
        </Typography>
        <Typography>
          {"Remaining maskes can last "}
          {calsulateRemainDayOfMask(numMask, useMask)}
          {" days, until "}
          {dateToString(
            calculateDate(calsulateRemainDayOfMask(numMask, useMask))
          )}
        </Typography>
      </div>
      <div className={classes.innerdiv}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Times to toilet</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={useRoll}
            onChange={handleuseRollChange}
          >
            {[...Array(10)].map((index, key) => (
              <MenuItem value={key}>{key}</MenuItem>
            ))}
          </Select>
          <FormHelperText>per day</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Liter of water</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={usebottle}
            onChange={handleuseBottleChange}
          >
            {[...Array(10)].map((index, key) => (
              <MenuItem value={key}>{key}</MenuItem>
            ))}
          </Select>
          <FormHelperText>per day</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Mask</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={useMask}
            onChange={handleuseMaskChange}
          >
            {[...Array(10)].map((index, key) => (
              <MenuItem value={key}>{key}</MenuItem>
            ))}
          </Select>
          <FormHelperText>per day</FormHelperText>
        </FormControl>
      </div>

      <Paper className={classes.SlidingBar} elevation={0}>
        <Typography id="continuous-slider" gutterBottom>
          {"Currently at "}
          {numRoll}
          {" rolls of toilet paper"}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <FontAwesomeIcon
              className={classes.smallItem}
              icon={faToiletPaper}
              color={ICONCOLOR}
              size="2x"
            />
          </Grid>
          <Grid item xs>
            <Slider
              value={numRoll}
              onChange={handleRollChange}
              ValueLabelComponent={ValueLabelComponent}
              aria-labelledby="continuous-slider"
            />
          </Grid>
        </Grid>
        <Typography id="continuous-slider" gutterBottom>
          {"Currently at "}
          {numbottle}
          {" bottles of toilet paper"}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <FontAwesomeIcon
              className={classes.smallItem}
              icon={faWineBottle}
              color={ICONCOLOR}
              size="2x"
            />
          </Grid>
          <Grid item xs>
            <Slider
              value={numbottle}
              onChange={handleBottleChange}
              ValueLabelComponent={ValueLabelComponent}
              aria-labelledby="continuous-slider"
            />
          </Grid>
        </Grid>
        <Typography id="continuous-slider" gutterBottom>
          {"You own "}
          {numMask} {" masks."}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <FontAwesomeIcon
              className={classes.smallItem}
              icon={faMask}
              color={ICONCOLOR}
              size="2x"
            />
          </Grid>
          <Grid item xs>
            <Slider
              value={numMask}
              onChange={handleMaskChange}
              ValueLabelComponent={ValueLabelComponent}
              aria-labelledby="continuous-slider"
            />
          </Grid>
        </Grid>
      </Paper>

      <Footer />
    </div>
  );
}

export default App;
