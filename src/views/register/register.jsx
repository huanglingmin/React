import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import api from '@/api/index';

const FormItem = Form.Item;

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalRegisterForm extends React.Component {
  componentDidMount () {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  register () {
    api.post('user/register')
      .then(e => {
        this.$message.success(e.msg);
        this.$router.push({ name: 'login' });
      })
      .catch(e => {
        this.$message.error(e.msg);
      });
  }
  render () {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >登陆
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedHorizontalRegisterForm = Form.create()(HorizontalRegisterForm);

export default WrappedHorizontalRegisterForm;