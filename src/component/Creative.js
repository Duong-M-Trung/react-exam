import React from 'react'
import 'antd/dist/antd.css';
import { Progress, Input, PageHeader, Row, Col, Table, Button, Tag, Tabs } from 'antd';
import {
  Link
} from 'react-router-dom';
import {
  LeftCircleOutlined,
  RightCircleOutlined,
  SearchOutlined,
  EditOutlined,
} from '@ant-design/icons';

const { TabPane } = Tabs;

const Creative = () => {
  const routes = [
    {
      breadcrumbName: 'Order',
    },
    {
      breadcrumbName: 'test',
    },
    {
      breadcrumbName: 'test_order_lineitem',
    },

  ];
  const dataSource = [
    {
      key: '1',
      name: <div >
        <Row><span style={{ color: 'blue' }}>test_native_programatic</span></Row>
        <Row> <span style={{ fontSize: 12 }}>ID:123732732837|Native|Ad Exchange</span></Row>
      </div>,
      status: <span style={{ color: 'green' }} >Active</span>,
      sequency: 'N/A',
      starttime: <div style={{ fontSize: 12 }}>
        <Row><span>Aug6,2021</span></Row>
        <Row> <span style={{ fontSize: 10 }}>3:18PM | GMT+8</span></Row>
        <EditOutlined />
      </div>,
      endtime: <div style={{ fontSize: 12 }}>
        <Row><span>Aug21,2021</span></Row>
        <Row> <span style={{ fontSize: 10 }}>10:18PM | GMT+8</span></Row>
        <EditOutlined />
      </div>,
      clickurl: '',
      weight: 'N/A',
      targeting: 'N/A',
      impression: '0',
      click: '0',
      viewable: '0',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      defaultSortOrder: 'descend',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Sequence',
      dataIndex: 'sequency',
      key: 'sequency',
    },
    {
      title: 'Start time',
      dataIndex: 'starttime',
      key: 'starttime',
    },
    {
      title: 'End time',
      dataIndex: 'endtime',
      key: 'endtime',
    },
    {
      title: 'Click-thought URL',
      dataIndex: 'clickurl',
      key: 'clickurl',
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: 'Targeting name',
      dataIndex: 'targeting',
      key: 'targeting',
    },
    {
      title: 'Impressions',
      dataIndex: 'impression',
      key: 'impression',
    },
    {
      title: 'Clicks',
      dataIndex: 'click',
      key: 'click',
    },
    {
      title: <span>Viewable <br></br>impressions</span>,
      dataIndex: 'viewable',
      key: 'viewable',
    },
  ];

  const rowSelection = () => {

  }
  return (
    <>
      <PageHeader
        title={<Row style={{ padding: '2px' }}>
          <h3 style={{ margin: 0 }}> test_order_lineitem</h3>
          <Tag color={'blue'} style={{ borderRadius: '15px', height: '25px', marginLeft: '10px' }}>Ready</Tag>
        </Row>}
        breadcrumb={{ routes, separator: ">" }}
      >
        <Row style={{ padding: '10px 0 10px 30px', borderBottom: '0.5px #E0E0E0 solid', fontSize: 12 }}>
          <span style={{ marginRight: '15px' }}>
            <b>Line item type:</b> Ad Exchange
          </span>
          <span style={{ marginRight: '15px' }}>
            <b>Line item ID:</b> 78237823
          </span>
          <span style={{ marginRight: '15px' }}>
            <b>Duration:</b> Aug6,2021 3:18PM | GMT+8 - Aug21,2021 10:18PM | GMT+8
          </span>
        </Row>
        <Row style={{ padding: '10px 0 10px 30px', borderBottom: '0.5px #E0E0E0 solid', fontSize: 12 }}>
          <span style={{ fontSize: 20 }}><b>Goal:</b> Unlimited</span>
        </Row>
        <Row style={{ padding: '10px 0 10px 30px', fontWeight: 'bold' }}>
          <Col span={3}>
            <span>Impressions</span>
            <h1>0</h1>
          </Col>
          <Col span={3}>
            <span>Cilcks</span>
            <h1 style={{ margin: 0 }}>0</h1>
            <span style={{ fontWeight: 'normal' }}>0.00% CTR</span>
          </Col>
          <Col span={3}>
            <span>Last 7 days progress</span>
            <Progress steps={7} percent={0} trailColor='#C4D8E1'></Progress>
          </Col>
        </Row>
      </PageHeader>
      <Tabs defaultActiveKey="2" size='large'>
        <TabPane tab="Settings" key="1">
          Content of Settings
        </TabPane>
        <TabPane tab="Creative" key="2">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            bordered={false}
            title={() =>
              <>
                <Row>
                  <Col span={6} style={{ paddingBottom: '15px' }}>
                    <Button
                      type={'primary'}
                    // onClick={}
                    >AUTOMATIC GENERATE CREATIVE</Button>
                  </Col>
                </Row>
                <Row style={{ paddingBottom: '15px', borderBottom: '0.5px #E0E0E0 solid', }}>
                  <Col span={6} style={{ paddingBottom: '15px' }}>

                  </Col>
                  <Col span={18} style={{ textAlign: 'right' }}>
                    <Input style={{ width: '200px' }} placeholder="Search " prefix={<SearchOutlined />} />
                  </Col>
                </Row>
              </>
            }
          />
          <Row style={{ padding: '20px 0 20px', borderTop: '0.5px #E0E0E0 solid' }}>
            <Col span={3}>
              <Button style={{ fontSize: 20, }} type='link'><Link to='/test_order'>Back</Link></Button>
            </Col>
            <Col span={20} style={{ textAlign: 'right' }}>
              <span style={{ fontSize: 12 }} > 1 of 1 line items <LeftCircleOutlined style={{ fontSize: 30 }} /><RightCircleOutlined style={{ marginLeft: '10px', fontSize: 30 }} /></span>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Troubleshoot" key="3">
          Content of Troubleshoot
        </TabPane>
      </Tabs>
    </>
  )
}

export default Creative
