import React, { useState } from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../../firebase';
import { GoogleFirebaseErrorCode } from './error';
import { useNavigate } from 'react-router-dom'; 

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();

  const clickLogin = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      signInWithEmailAndPassword(auth, values?.email, values?.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(false);

          console.log(user);
          console.log((user as any)?.['accessToken']);

          // Redirect to the dashboard or any other component
          navigate('/'); 
        })
        .catch((error) => {
          setTimeout(() => {
            setLoading(false);
          }, 1500);
          message.error(GoogleFirebaseErrorCode?.[error.code] || error.code);
        });
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      message.error('Please enter a valid email and password');
    }
  };

  return (
    <Form
    layout="vertical"
    className="login-form"
    form={form}
    name="login-form"
    onFinish={clickLogin}
    initialValues={{ email: 'user@gmail.com', password: '123456' }}
  >
    <Form.Item
      name="email"
      className="form-input"
      rules={[
        {
          required: true,
          message: 'Enter email',
        },
        {
          type: 'email',
          message: 'Enter a valid email!',
        },
      ]}
    >
      <Input suffix={<MailOutlined className="text-primary" />} placeholder="Email Address" />
    </Form.Item>
    <Form.Item
      name="password"
      className="form-input"
      rules={[
        {
          required: true,
          message: 'Enter password',
        },
      ]}
    >
      <Input.Password suffix={<LockOutlined className="text-primary" />} placeholder="Enter Password" />
    </Form.Item>
    <Form.Item>
      <Button type="primary" className="form-button" htmlType="submit" block loading={loading}>
        Login
      </Button>
    </Form.Item>
  </Form>
);
};

export default LoginForm;
