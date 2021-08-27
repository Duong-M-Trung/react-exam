import React from 'react'
import 'antd/dist/antd.css';
import { Progress, Input, PageHeader, Row, Col, Table, Button, Select, Tag, Tabs } from 'antd';
import {
  Link
} from 'react-router-dom';
import {
  SettingTwoTone,
  StarTwoTone,
  CaretDownOutlined,
  FilterTwoTone,
  SearchOutlined,
  SaveOutlined,
} from '@ant-design/icons';

const { TabPane } = Tabs;
const options = [{ value: '#108ee9' }, { value: 'red' }, { value: 'blue' }, { value: 'test' }];

function tagRender(props) {
  const { value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3, padding: '5px', borderRadius: '15px' }}
    >
      Filter
    </Tag>
  );
}

const Order = () => {
  const routes = [
    {
      breadcrumbName: 'Order',
    },
    {
      breadcrumbName: 'test',
    },
  ];
  const dataSource = [
    {
      key: '1',
      star: <StarTwoTone style={{ color: 'black' }} />,
      name: <div >
        <Row><Link to="/lineitem">test_order_lineitem</Link></Row>
        <Row> <span style={{ fontSize: 12 }}>ID:78237823 | Native programatic</span></Row>
      </div>,
      status: <Tag style={{ borderRadius: '10px' }} color="blue">Ready</Tag>,
      type: 'Ad exhange',
      starttime: <div style={{ fontSize: 12 }}>
        <Row><span>Aug6,2021</span></Row>
        <Row> <span style={{ fontSize: 10 }}>3:18PM | GMT+8</span></Row>
      </div>,
      endtime: <div style={{ fontSize: 12 }}>
        <Row><span>Aug21,2021</span></Row>
        <Row> <span style={{ fontSize: 10 }}>10:18PM | GMT+8</span></Row>
      </div>,
      progress: <div><Progress percent={0} steps={7} trailColor='#C4D8E1' /></div>,
      rate: <div>$0.0<br></br>CPM</div>,
      goal: 'unlimited',
      impression: '0',
      click: '0',
      revenue: 'N/A',
    },
  ];

  const columns = [
    {
      title: '',
      dataIndex: 'star',
      key: 'star',
    },
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
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
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
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: 'Goal',
      dataIndex: 'goal',
      key: 'goal',
    },
    {
      title: 'Impressions',
      dataIndex: 'impression',
      key: 'impression',
    },
    {
      title: 'Revenue up lift 7days',
      dataIndex: 'revenue',
      key: 'revenue',
    },
  ];

  const rowSelection = () => {

  }
  // const addLineitem = () => {
  //   setVisible(true);
  // }
  return (
    <>
      <PageHeader
        title={<Row >
          <h3 style={{ margin: 0 }}><StarTwoTone /> Order:test_order</h3>
          <Button style={{ fontSize: 18 }} type='link'><SettingTwoTone />Setting</Button>
        </Row>}
        breadcrumb={{ routes, separator: ">" }}
      >
        <Row style={{ padding: '10px 0 10px 30px', borderBottom: '0.5px #E0E0E0 solid', fontSize: 12 }}>
          <span style={{ marginRight: '15px' }}>
            ID:123456
          </span>
          <span style={{ marginRight: '15px' }}>
            Time: Aug6,2021 3:18PM | GMT+8 - Aug21,2021 10:18PM | GMT+8
          </span>
          <span style={{ marginRight: '15px' }}>
            Total projected value: $0.00
          </span>
          <span style={{ marginRight: '15px' }}>
            Total booked impression: 0
          </span>
        </Row>
        <Row style={{ padding: '10px 0 10px 30px', borderBottom: '0.5px #E0E0E0 solid', fontSize: 12 }}>
          <span style={{ marginRight: '15px' }}>Lineitem:</span><Tag style={{ borderRadius: '20px' }} color='blue'>Ready(1)</Tag>
        </Row>
        <Row style={{ padding: '10px 0 10px 30px', fontWeight: 'bold' }}>
          <Col span={3}>
            <span>Impression</span>
            <h1>0</h1>
          </Col>
          <Col span={3}>
            <span>Viewable impression</span>
            <h1>N/A</h1>
          </Col>
          <Col span={3}>
            <span>Cilcks</span>
            <h1>0</h1>
          </Col>
          <Col span={3}>
            <span>CTR</span>
            <h1>0.0%</h1>
          </Col>
        </Row>
        <Row style={{ padding: '10px 0 10px 30px', }}>
          <Button type='link' style={{ padding: '10px', fontWeight: 'bold' }}>
            RUN EXPORT
          </Button>
          <Button type='link' style={{ padding: '10px', fontWeight: 'bold' }}>
            EXPORT OFFER <CaretDownOutlined />
          </Button>
          <Button type='link' style={{ padding: '10px', fontWeight: 'bold' }}>
            MORE ACTION <CaretDownOutlined />
          </Button>
        </Row>
      </PageHeader>
      <Tabs defaultActiveKey="1" size='large'>
        <TabPane tab="Line items" key="1">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            bordered={false}
            title={() =>
              <>
                <Row style={{ paddingBottom: '15px', borderBottom: '0.5px #E0E0E0 solid', }}>
                  <Col span={6} >
                    <Button
                      type={'primary'}
                    // onClick={}
                    ><Link to="/newlineitem">New line item</Link></Button>
                  </Col>
                  <Col span={18} style={{ textAlign: 'right' }}>
                    <Input style={{ width: '200px' }} placeholder="Search " prefix={<SearchOutlined />} />
                  </Col>
                </Row>
                <Row style={{ width: '100%', display: 'inline', padding: '20px 0 20px 0', borderBottom: '0.5px #E0E0E0 solid' }}>
                  <FilterTwoTone style={{ fontSize: 18 }} />
                  <Select
                    bordered={false}
                    mode="multiple"
                    showArrow
                    placeholder='Add new filter'
                    tagRender={tagRender}
                    defaultValue={['#108ee9']}
                    style={{ width: '95%' }}
                    options={options}
                  />
                  <SaveOutlined style={{ fontSize: 18 }} />
                </Row>
              </>
            }
          />
        </TabPane>
        <TabPane tab="Creative" key="2">
          Content of Tab Pane 1
        </TabPane>
      </Tabs>
    </>
  )
}

export default Order
