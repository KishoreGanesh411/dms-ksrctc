 import './login.css';
import { Card, Col, Row } from 'antd';
import LoginForm from "./Login"
 const Index = () => {
  return (
    <Row className="login-page">
      <Col className="TitleContainer" xs={24} sm={12}>
        <div className="image-display">
          <img src="../../assets/ksr.png" alt="" />
          <h3>
            <b>KSR CTEC</b>{' '}
          </h3>
          <div className="welcome-text-login">
            <p className="welcome-Content">
            Database Managment System
            </p>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={12}>
        <Card className="card-content-size" style={{ textAlign: 'center' }}>
          <h3>
            User's Management <b>KSR.CTEC</b>{' '}
          </h3>
          <p>Email ID to login.</p>
          <LoginForm />
        </Card>
      </Col>
    </Row>
  );
};

export default Index