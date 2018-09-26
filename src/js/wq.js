import React from 'react';
import { Checkbox,Form,Button} from 'antd';
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;

 class some extends React.Component{
    onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      }

      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
      
    render(){
        const { getFieldDecorator } = this.props.form;
        const plainOptions = ['Apple', 'Pear', 'Orange'];
       
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };

        return (
            <div>
                <FormItem
                label="E-mail"
                {...formItemLayout}
                >
                {getFieldDecorator('name',{
                    rules: [{ required: true, message: 'Please input your note!' }],
                    initialValue: [],
                })(
                    <CheckboxGroup options={plainOptions} />
                )}
                </FormItem>
                <Button onClick={this.handleSubmit}>提交</Button>
            </div>
        )
    }
}
export default Form.create()(some);