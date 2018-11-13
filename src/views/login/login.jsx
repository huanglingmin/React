import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import api from '@/api/index';
import { withRouter } from "react-router-dom";
import './login.styl';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.USERLOGIN(values);
        console.log('Received values of form: ', values);
      }
    });
  }
  USERLOGIN (values) {
    api.post('user/login', values)
      .then(e => {
        message.success(e.msg);
        this.props.history.push('/');
      }).catch(e => {
        message.error(e.msg);
      });
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login_box">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('iphone', {
              rules: [{ required: true, message: 'Please input your iphone!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Iphone" />
            )}
          </FormItem>
          {/* <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem> */}
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="/">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="/">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default withRouter(WrappedNormalLoginForm);