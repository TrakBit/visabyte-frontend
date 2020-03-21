import styled from 'styled-components';
import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, List, Avatar, Button, Typography} from 'antd';
import {jobData} from './jobs'
//import {getJob} from './Api'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-31455093-1');
ReactGA.pageview(window.location.pathname + window.location.search);


const {Header} = Layout;
const { Title } = Typography;

const Container = styled.section`
  display: flex;
  margin: 0;
  flex-direction: column;
  word-break: break-all;
`;

const HeaderContainer = styled.section`
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: center;
  align-text: center;
`;

const TableContainer = styled.section`
  display: flex;
  margin: 0;
  flex-direction: column;
  text-align: left;
`;

const TagContainer = styled.section`
  flex-direction: row;
  align-items: center;
`;

function App() {
  
  const [expandedJob, setExpandedJob] = useState(-1);

  /*
  const [jobList, setJobs] = useState([]);
  useEffect(() => {
      getJob().then((res)=> setJobs(res.jobs))
  }, [])
  */


  const expandJob = (i) => {
    if (i === expandedJob) {
      setExpandedJob(-1)
    } else {
      setExpandedJob(i)
    }
  }

  return (
    <div className="App">
      <Container>
        <Header style={{background: '#ffffff'}}>
          <LogoBody/>
        </Header>
        <TableContainer style={{paddingTop:"8%", paddingLeft:"10%", width: '90%'}}>
            {jobData.map((item, i) => {
                return (
                  <div key={i}>
                    <ListItem item={item} i={i} expandedJob={expandedJob} expandJob={expandJob}/>
                  </div>
                )
            })}
        </TableContainer>
      </Container>
    </div>
  );
}


const ListItem = ({item, i, expandedJob, expandJob}) => {
    return (
      <div>
        <List.Item style={{backgroundColor:"#f4f9f4"}} onClick={() => expandJob(i)}>
          <List.Item.Meta
            avatar={
                <Avatar style={{marginLeft: 7}} shape="square" size="large" src={item.companyImage}/>}
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
                <div  style={{paddingTop: 5}}>
                  <Button style={{borderWidth: 2, borderColor: "#ff5151", }} size="small" ghost>
                    <font color="#ff5151"><strong>{item.jobLocation}</strong></font>
                  </Button>
                </div>         
              </div>
            }
          />
            <Tags item={item}/>
        </List.Item>
        <br/>
      </div>
    )
}


const BodyTitle = () => {
  if (window.innerWidth > 415) {
    return (
      <HeaderContainer style={{paddingTop: '2%'}}>
          <TagContainer>
            <Title>{'Tech Jobs With Visa Sponsorship'}</Title>
          </TagContainer>
      </HeaderContainer>
    )
  } else {
    return (
      <HeaderContainer style={{paddingTop: '4%'}}>
          <TagContainer>
            <Title level={4}>Tech Jobs With<br/> Visa Sponsorship</Title>
          </TagContainer>
      </HeaderContainer>
    )
  }
}

const Tags = ({item}) => {
  if (window.innerWidth > 415) {
    return ( 
        <>
          <TagContainer style={{paddingRight: "20%"}}>
            {item.tags.map((subItem, i) =>
              <Button key={i} style={{marginLeft: 4, marginTop: 4,borderWidth: 2, borderColor: "#4a47a3", }} size="small" ghost>
                  <font color="#4a47a3"> <strong>{subItem}</strong></font>
              </Button>
            )}
          </TagContainer>
          <div style={{paddingRight: "2%"}}>
            <Button size="small" type="primary" href={item.jobLink} style={{borderWidth: 2, borderColor: "#00b7c2"}} ghost>
              <font color="#00b7c2"> <strong>{'Apply'}</strong></font>
            </Button>
          </div>
        </>
    )
  } else {
    return (
      <>
          <TagContainer style={{paddingTop: "2%"}}>
            {item.tags.map((subItem, i) =>
              <Button key={i} style={{marginTop: 4,marginLeft: 4,borderWidth: 2, borderColor: "#4a47a3", }} size="small" ghost>
                <font color="#4a47a3">{subItem}</font>
              </Button>
            )}
            <div style={{paddingRight: "2%"}}>
              <Button size="small" type="primary" href={item.jobLink} style={{marginTop: 4,marginLeft: 4,borderWidth: 2, borderColor: "#00b7c2"}} ghost>
                <font color="#00b7c2"> <strong>{'Apply'}</strong></font>
              </Button>
            </div>
          </TagContainer>
          
      </>
    )
  }
}

const LogoBody = () => {
  if (window.innerWidth > 415) {
    return (
      <Title style={{paddingTop: '3%'}}>
        <HeaderContainer>
          <Logo/>
        </HeaderContainer>
      </Title>
    ) 
  }
  else {
    return (
      <Title style={{paddingTop: '3%'}}>
        <HeaderContainer>
          <Logo/>
        </HeaderContainer>
      </Title>
    ) 
  }
}


const Logo = (props) => {
  if (window.innerWidth > 415) {
    return (
      <div style={{height: '20%', width: '25%'}}>
        <LogoSvg/>
      </div>
    )
  } else {
    return (
      <div style={{height: '50%', width: '85%'}}>
        <LogoSvg/>
      </div>
    )
  }
}

const LogoSvg = () => {
  return (
    <div>
      <svg
        viewBox="0 0 900 300"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit={1.414}
      >
        <text
          x={300.208}
          y={208.578}
          fontFamily="'ArialRoundedMTBold','Arial Rounded MT Bold',sans-serif"
          fontSize={104.167}
          fill="#00b7c2"
          transform="translate(-406.489 -142.89) scale(1.65801)"
        >
          {"VisaByte"}
        </text>
      </svg>
    </div>
  )
}

export default App;
