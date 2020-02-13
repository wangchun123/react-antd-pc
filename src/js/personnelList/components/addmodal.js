import React from 'react';
import {Input,Modal,Form,Checkbox,Button,Row,Col,Divider,message} from 'antd';

const FormItem = Form.Item;

class modal extends React.Component{
    constructor(props){
        super(props)

        this.state={
            visible: false,
        }

        this.props.onRef(this);
        

    }
    onChange = (e) =>{
        
    }
    showModal= () => {
        this.setState({
          visible: true,
        });
        this.props.form.setFieldsValue({
            username:'',
            name:'',
            power:false
        })
         //拿到所有id
            var ye=document.getElementsByTagName("input");
            
      }

    handleOk = (e) => {
        
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
       
        this.setState({
          visible: false,
        });
      }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
       
        message.success('设置成功');

        this.props.Parent.search();//调用查询接口

        this.setState({
          visible:false,
        })

        //setTimeout(this.props.form.resetFields,1000);
       
      }
    });
  }

    render(){
        
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 8 },
          };

          
    return(
        <div>
            <Modal
            title={null}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
            width={800}
            closable={false}
            >
            <span className='top'>新增普通用户</span>
            <Divider dashed={true}></Divider>
            <FormItem {...formItemLayout} label="手机号" colon={false}>
            {getFieldDecorator('username', {
                initialValue:this.state.phone?this.state.phone:'',
                rules: [{
                required: true,
                message: 'Please input your name',
                }],
            })(
                <Input placeholder="Please input your name" />
            )}
            </FormItem>
            <FormItem {...formItemLayout} label="昵称" colon={false}>
            {getFieldDecorator('name', {
                rules: [{
                required: true,
                message: 'Please input your name',
                }],
            })(
                <Input placeholder="Please input your name" style={{width:'500px'}}/>
            )}
            </FormItem>
            <FormItem {...formItemLayout} label="权限" colon={false}>
            {getFieldDecorator('power',{
                rules: [{
                required: true,
                message: 'Please input your name',
                }],
            })(
                <div>
                    <Checkbox 
                defaultChecked={false}
                onChange={this.onChange}
                >
                12321
                </Checkbox>
                <Checkbox 
                defaultChecked={false}
                onChange={this.onChange}
                >
                45435
                </Checkbox>
                </div>
            )}
            </FormItem>
         <Row type='flex' justify="center" gutter={80}>
            <Col span={2}><Button type='primary' htmlType="submit" onClick={this.handleSubmit}>确定</Button></Col>
            <Col span={2}><Button type="danger" style={{background:'red',color:'#ffffff'}} onClick={this.handleCancel}>取消</Button></Col>
        </Row>
            </Modal>
        </div>
    )
    }
}
export default Form.create()(modal);