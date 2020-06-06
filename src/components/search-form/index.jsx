import React from "react";
import {
  Form,
  Grid,
  Input,
  Switch,
  Rating,
  Radio,
  Range,
  Checkbox,
  NumberPicker,
  DatePicker,
  Select,
  Upload,
} from "@alifd/next";

const FormItem = Form.Item;
const { Row, Col } = Grid;

let formItemLayout = {
  labelCol: {
    fixedSpan: 2,
  },
  wrapperCol: {
    span: 0,
  },
};

export default ({
  dataSource = [],
  searchSubmit,
  isTableSearch = true,
  labelLayout = true,
  fromValue = {},
  fromOnChange,
}) => {
  const handleSubmit = (values, error) => {
    if (!error) {
      searchSubmit && searchSubmit(values);
    }
  };

  const switchNode = (item) => {
    const { nodeProps, ...rest } = item;

    if (item.labelspan) {
      formItemLayout = {
        labelCol: {
          fixedSpan: item.labelspan,
        },
        wrapperCol: {
          span: 0,
        },
      };
    }

    if (!labelLayout) {
      formItemLayout = {};
    }

    const newRest = { ...rest, ...formItemLayout };
    delete newRest.type;

    switch (item.type) {
      case "Input":
        return (
          <Col span={item.span || 12}>
            <FormItem {...newRest}>
              <Input {...nodeProps} />
            </FormItem>
          </Col>
        );
      case "Switch":
        return (
          <Col span={item.span || 12}>
            <FormItem {...newRest}>
              <Switch {...nodeProps} />
            </FormItem>
          </Col>
        );
      case "Rating":
        return (
          <Col span={item.span || 12}>
            <FormItem {...newRest}>
              <Rating {...nodeProps} />
            </FormItem>
          </Col>
        );
      case "Radio":
        return (
          <Col span={item.span || 12}>
            <FormItem {...newRest}>
              <Radio {...nodeProps} />
            </FormItem>
          </Col>
        );
      case "Range":
        return (
          <Col span={item.span || 12}>
            <FormItem {...newRest}>
              <Range {...nodeProps} />
            </FormItem>
          </Col>
        );
      case "Checkbox":
        return (
          <Col span={item.span || 12}>
            <FormItem {...newRest}>
              <Checkbox {...nodeProps} />
            </FormItem>
          </Col>
        );
      case "NumberPicker":
        return (
          <Col span={item.span || 12}>
            <FormItem {...newRest}>
              <NumberPicker {...nodeProps} />
            </FormItem>
          </Col>
        );
      case "DatePicker":
        return (
          <Col span={item.span || 12}>
            <FormItem {...newRest}>
              <DatePicker {...nodeProps} />
            </FormItem>
          </Col>
        );
      case "Select":
        return (
          <Col span={item.span || 12}>
            <FormItem {...newRest}>
              <Select {...nodeProps} />
            </FormItem>
          </Col>
        );
      case "Upload":
        return (
          <Col span={item.span || 12}>
            <FormItem {...newRest}>
              <Upload {...nodeProps} />
            </FormItem>
          </Col>
        );
      default:
        return "";
    }
  };

  return (
    <Form
      style={{ width: "100%" }}
      value={fromValue}
      onChange={(values, item) => fromOnChange && fromOnChange(values, item)}
    >
      {isTableSearch ? (
        <Row wrap={true}>
          {dataSource.map((item, index) => {
            return (
              <React.Fragment key={index}>{switchNode(item)}</React.Fragment>
            );
          })}
        </Row>
      ) : (
        <React.Fragment>
          {dataSource.map((item, index) => {
            return (
              <React.Fragment key={index}>{switchNode(item)}</React.Fragment>
            );
          })}
        </React.Fragment>
      )}

      <FormItem label=" ">
        <Form.Submit
          validate
          type="primary"
          onClick={(values, error) => handleSubmit(values, error)}
        >
          查询
        </Form.Submit>
        &nbsp;&nbsp;
        <Form.Reset>重置</Form.Reset>
      </FormItem>
    </Form>
  );
};
