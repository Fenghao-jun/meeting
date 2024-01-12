import * as React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@fluentui/react-components";
import MeetingForm from "./Render/MeetingForm";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    paddingTop: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "15px",
  },
  itemBox: {},
});

const App = () => {
  const styles = useStyles();
  // The list items are static and won't change at runtime,
  // so this should be an ordinary const, not a part of state.

  return (
    <div className={styles.root}>
      {/* <TimeRender />
      <div className={styles.title}>
        区域：
      </div> */}

      <MeetingForm />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string,
};
export default App;
