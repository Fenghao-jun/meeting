import { makeStyles } from "@fluentui/react-components";
import React, { memo, useState } from "react";
import { TimePicker } from "antd";
import PropTypes from "prop-types";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const FORMAT = "HH:mm";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    marginBottom: "8px",
  },
  timeBox: {
    width: "100%",
    marginBottom: "15px",
  },
});

const TimeRender = memo((props) => {
  const style = useStyles();

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleStartTimeChange = (value) => {
    setStartTime(value.format(FORMAT));
    props.onChange(value.format(FORMAT), "start");
  };

  const handleEndTimeChange = (value) => {
    setEndTime(value.format(FORMAT), "end");
  };

  return (
    <div>
      <div className={style.timeBox}>
        <div className={style.title}>起始时间：{startTime}</div>
        <TimePicker minuteStep={15} secondStep={10} hourStep={1} format={FORMAT} onChange={handleStartTimeChange} />
      </div>

      <div className={style.timeBox}>
        <div className={style.title}>结束时间：{endTime}</div>
        <TimePicker minuteStep={15} secondStep={10} hourStep={1} format={FORMAT} onChange={handleEndTimeChange} />
      </div>
    </div>
  );
});

TimeRender.displayName = "TimeRender";
TimeRender.propTypes = {
  onChange: PropTypes.func,
};

export default TimeRender;
