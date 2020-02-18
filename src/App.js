import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, List, Avatar, Button, Tag} from 'antd';
import {getJob} from './Api'

const {Header} = Layout;

const Container = styled.section`
  display: flex;
  margin: 0;
  flex-direction: column;
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
            <h1 style={{color: '#FFFFFF'}}>{'VisaByte'}</h1>
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
                          <>
                            <div style={{color: "#000000",fontSize: 25, fontWeight: "600"}}>
                              {item.jobTitle}
                            </div>
                          </>
                      }
                      description={ 
                        <div style={{paddingTop: 2}}>
                          <b style={{color: "#000000", fontWeight: "500"}}>
                            <TagContainer>
                              {item.tags.map((subItem, i) =>
                                <Tag color="#2db7f5" key={i}>{subItem}</Tag>
                              )}
                            </TagContainer>
                            {item.jobDescription}
                          </b>
                        </div>
                      }
                    />
                     <Button type="primary">Apply</Button>
                  </List.Item>
                )}
              />
          </TableContainer>
      </Container>
    </div>
  );
}


export default App;
