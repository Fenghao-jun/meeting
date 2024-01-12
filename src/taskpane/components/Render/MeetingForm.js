import React from "react";
import { Button, TimePicker, Form } from "antd";
import { makeStyles } from "@fluentui/react-components";
import insertText, { setMeetingTime } from "../../office-document";

const useStyles = makeStyles({
  compoenntWrapper: {
    width: "100%",
  },
});

const useListStyles = makeStyles({
  listBox: {
    width: "100%",
    gap: "15px",
    display: "flex",
    flexWrap: "wrap",
  },
});

const onFinish = (values) => {
  console.log("Success:", values);
  handleTextInsertion();
  setMeetingTime();
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
  handleTextInsertion();
};

const FORMAT = "HH:mm";

const ListRender = (props) => {
  const { list = [], field, onChange, keyName, labelName } = props;
  const form = Form.useFormInstance();

  const currentActive = form.getFieldValue(field);

  return (
    <>
      {list.map((item) => {
        return (
          <Button
            key={item[keyName]}
            type={item[keyName] === currentActive ? "primary" : "default"}
            onClick={() => onChange(item[keyName])}
          >
            {item[labelName]}
          </Button>
        );
      })}
    </>
  );
};

const list = [
  {
    name: "foo",
    key: "foo",
  },
  {
    name: "bar",
    key: "bar",
  },
];

const handleTextInsertion = async () => {
  await insertText("6666");
};

const MeetingForm = () => {
  const style = useStyles();
  const [form] = Form.useForm();

  const handleRegionChange = (field, key) => {
    form.setFieldValue(field, key);

    const formValue = form.getFieldsValue();
    console.log("formValue: ", formValue);
  };

  return (
    <Form
      form={form}
      name="basic"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="开始时间" name="startTime">
        <TimePicker className={style.compoenntWrapper} minuteStep={15} secondStep={10} hourStep={1} format={FORMAT} />
      </Form.Item>

      <Form.Item label="结束时间" name="endTime">
        <TimePicker className={style.compoenntWrapper} minuteStep={15} secondStep={10} hourStep={1} format={FORMAT} />
      </Form.Item>

      <Form.Item label="区域" name="region">
        <ListRender
          onChange={(value) => handleRegionChange("region", value)}
          list={list}
          keyName="key"
          labelName="name"
          field="region"
        />
      </Form.Item>

      <Form.Item label="楼宇" name="building">
        <ListRender
          onChange={(value) => handleRegionChange("building", value)}
          list={list}
          keyName="key"
          labelName="name"
          field="building"
        />
      </Form.Item>

      <Form.Item label="会议类型" name="type">
        <ListRender
          onChange={(value) => handleRegionChange("type", value)}
          list={list}
          keyName="key"
          labelName="name"
          field="type"
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default MeetingForm;
