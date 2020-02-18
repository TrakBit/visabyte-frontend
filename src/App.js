import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, List, Avatar, Button, Tag, Typography} from 'antd';
import {getJob} from './Api'

const {Header} = Layout;
const { Title } = Typography;

const Container = styled.section`
  display: flex;
  margin: 0;
  flex-direction: column;
`;

const HeaderContainer = styled.section`
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: center;
`;

const TableContainer = styled.section`
  display: flex;
  margin: 0;
  flex-direction: column;
  text-align: left;
`;

const TagContainer = styled.section`
  display: flex;
  flex-direction: tow;
`;

function App() {
  const [jobList, setJobs] = useState([]);
  useEffect(() => {
      getJob().then((res)=> setJobs(res.jobs))
  }, [])
  return (
    <div className="App">
      <Container>
        <Header style={{background: '#33334f'}}>
            <Title style={{paddingTop: 5}}>
              <HeaderContainer>
                <Logo/>
              </HeaderContainer>
            </Title>
        </Header>
          <TableContainer style={{paddingTop:"3%", paddingLeft:"10%", width: '90%'}}>
              <List
                itemLayout="horizontal"
                dataSource={jobList}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.companyImage} />}
                      title={
                          <TagContainer>
                            <div style={{color: "#000000",fontSize: 20, fontWeight: "400"}}>
                              {item.companyName}
                            </div>
                          </TagContainer>
                      }
                      description={ 
                        <div style={{paddingTop: 2}}>
                          <div style={{color: "#000000",fontSize: 22, fontWeight: "600"}}>
                              {item.jobTitle}
                          </div>
                          <b style={{color: "#000000", fontWeight: "500"}}>
                            {item.jobDescription}
                          </b>
                        </div>
                      }
                    />
                      <TagContainer style={{paddingRight: "20%"}}>
                        {item.tags.map((subItem, i) =>
                          <Tag color="geekblue" key={i}>{subItem}</Tag>
                        )}
                      </TagContainer>
                     <Button type="primary">Apply</Button>
                  </List.Item>
                )}
              />
          </TableContainer>
      </Container>
    </div>
  );
}


function Logo(props) {
  return (
    <div style={{width: '20%', height: 20}}>
      <svg
        viewBox="0 0 1300 300"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit={1.414}
        {...props}
      >
        <ellipse
          cx={214.551}
          cy={198.285}
          rx={176.242}
          ry={178.261}
          fill="#40a9ff"
          transform="matrix(.62414 0 0 .61707 102.155 28.439)"
        />
        <text
          x={300.208}
          y={208.578}
          fontFamily="'PalanquinDark-Regular','Palanquin Dark',sans-serif"
          fontSize={208.254}
          fill="#fff"
          transform="translate(65.067 10.81)"
        >
          {"VisaByte"}
        </text>
        <path
          d="M198.856 148.898a12.715 12.715 0 00-12.716-12.716 11.557 11.557 0 00-11.558 11.558v40.339c0 6.89 5.585 12.478 12.477 12.478h.001c6.514 0 11.796-5.282 11.796-11.796v-39.863zM247.76 133.778c0-7.023-5.693-12.717-12.717-12.717a11.557 11.557 0 00-11.558 11.559v55.699c0 6.891 5.586 12.478 12.477 12.478h.002c6.514 0 11.796-5.282 11.796-11.797v-55.222zM296.425 116.892c0-7.022-5.693-12.716-12.717-12.716a11.559 11.559 0 00-11.558 11.559v72.954c0 6.891 5.586 12.478 12.477 12.478h.002c6.514 0 11.796-5.281 11.796-11.796v-72.479z"
          fill="#fff"
        />
      </svg>
    </div>
  )
}


export default App;
