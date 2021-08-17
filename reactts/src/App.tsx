import React from 'react';
import logo from './logo.svg';
import './App.module.css';
import {Header, Footer, SideMenu, Carousel} from './components'
import {Row, Col} from 'antd'
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className={styles['page-content']}>
        <Row style={{marginTop: 10}}>
          <Col span={6}>
            <SideMenu/>
          </Col>
          <Col span={18}>
            <Carousel/>
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
