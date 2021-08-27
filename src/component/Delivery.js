import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Drawer, Input, PageHeader, Row, Col, Table, Button, Form, Select, Tag, Tabs } from 'antd';
import {
  Link
} from 'react-router-dom'
import {
  FilterTwoTone,
  SearchOutlined,
  SaveOutlined,
} from '@ant-design/icons';

const { TabPane } = Tabs;
const options = [{ value: '#108ee9' }, { value: 'red' }, { value: 'green' }, { value: 'blue' }];

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


const Delivery = () => {
  const [visible, setVisible] = useState(false);
  const dataSource = [
    {
      key: '1',
      name: <div >
        <Row><Link to="/test_order">test_order</Link></Row>
        <Row> <span style={{ fontSize: 12 }}>ID:123456</span></Row>
      </div>,
      lineitem: <Tag style={{ borderRadius: '10px' }} color="blue">Ready(1)</Tag>,
      advertiser: '10 Downing Street',
      starttime: <div style={{ fontSize: 12 }}>
        <Row><span>Aug6,2021</span></Row>
        <Row> <span style={{ fontSize: 10 }}>3:18PM | GMT+8</span></Row>
      </div>,
      endtime: <div style={{ fontSize: 12 }}>
        <Row><span>Aug21,2021</span></Row>
        <Row> <span style={{ fontSize: 10 }}>10:18PM | GMT+8</span></Row>
      </div>,
      total: '$0.0',
      impression: '0',
      click: '0',
      viewable: 'N/A',
      note: '',
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
      title: 'Line items',
      dataIndex: 'lineitem',
      key: 'lineitem',
    },
    {
      title: 'Advertiser',
      dataIndex: 'advertiser',
      key: 'advertiser',
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
      title: 'Total projected value',
      dataIndex: 'total',
      key: 'total',
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
      title: 'Viewable impression serve',
      dataIndex: 'viewable',
      key: 'viewable',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },
  ];

  const rowSelection = () => {

  }
  const addLineitem = () => {
    setVisible(true);
  }
  const onclose = () => {
    setVisible(false);
  }
  function onSearch(val) {
    console.log('search:', val);
  }
  return (
    <>
      <Tabs defaultActiveKey="1" size='large'>
        <TabPane tab="All order" key="1">
          <PageHeader
            title="Order"
          />
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            bordered={false}
            title={() =>
              <>
                <Row style={{ padding: '10px 0 10px', borderBottom: '0.5px #E0E0E0 solid' }}>
                  <Col span={6}>
                    <Button
                      type={'primary'}
                      onClick={addLineitem}>New order</Button>
                    <Button type='link' style={{ fontWeight: 'bold', marginLeft: '5px' }}>Forcasting</Button>
                  </Col>
                  <Col span={18} style={{ textAlign: 'right' }}>
                    <Input style={{ width: '200px' }} placeholder="Search " prefix={<SearchOutlined />} />
                  </Col>
                </Row>
                <Row style={{ width: '100%', display: 'inline', marginTop: '10px', padding: '20px 0 20px 0', borderBottom: '0.5px #E0E0E0 solid' }}>
                  <FilterTwoTone style={{ fontSize: 18 }} />
                  <Select
                    bordered={false}
                    mode="multiple"
                    showArrow
                    tagRender={tagRender}
                    defaultValue={['#108ee9']}
                    style={{ width: '95%', padding: '10px 10px 10px' }}
                    options={options}
                  />
                  <SaveOutlined style={{ fontSize: 18 }} />
                </Row>
              </>
            }
          />
          <Drawer
            visible={visible}
            width={window.innerWidth}
            // closable={onclose}
            onClose={onclose}
            placement='left'
            title={'New order'}
            footer={
              <Row>
                <Button type='primary' style={{ marginRight: '5px' }}>Add line item</Button>
                <Button type='link' style={{ marginRight: '5px' }}>Save</Button>
                <Button onClick={onclose} type='link'>Back</Button>
              </Row>
            }>
            <Row>
              <Col span={4} offset={1} style={{ fontSize: 16, fontWeight: 'bold' }}>
                General settings
              </Col>
              <Col span={20} offset={4}>
                <Form layout={'vertical'} style={{ width: '500px' }} size='middle'>
                  <Form.Item
                    name='name'
                    label="Name">
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Advertiser"
                    name='advertiser'
                    tooltip="Advertiser">
                    <Select
                      onSearch={onSearch}
                      showSearch
                      placeholder={'Type to search...'}>
                      <Select.Option key={1} value={'Advertiser 1'}>
                        Advertiser 1
                      </Select.Option>
                      <Select.Option key={2} value={'Advertiser 2'}>
                        Advertiser 2
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Trafficker"
                    name='traffker'
                    placeholder={'Type to search...'}
                    tooltip="Trafficker">
                    <Select
                      onSearch={onSearch}
                      showSearch>
                      <Select.Option key={1} value={'Trafficker 1'}>
                        Trafficker 1
                      </Select.Option>
                      <Select.Option key={2} value={'Trafficker 2'}>
                        Trafficker 2
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Labels (optional)"
                    name='label'
                    tooltip="Labels">
                    <Select
                      onSearch={onSearch}
                      showSearch
                      placeholder={'Type to search...'}>
                      <Select.Option key={1} value={'Labels 1'}>
                        Labels 1
                      </Select.Option>
                      <Select.Option key={2} value={'Labels 2'}>
                        Labels 2
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
            <Row style={{ borderTop: '1px #E0E0E0 solid' }}>
              <Col span={4} offset={1} style={{ fontSize: 16, fontWeight: 'bold' }}>
                Advanced settings
              </Col>
              <Col span={20} offset={4}>
                <Form layout={'vertical'} style={{ width: '500px' }} size='middle'>
                  <Form.Item
                    label="Advertiser contacts (optional)"
                    name='advertisercontacts'>
                    <Select
                      placeholder={'Please select an advertiser before adding contacts'}>
                      <Select.Option key={1} value={'Advertiser contacts 1'}>
                        Advertiser contacts 1
                      </Select.Option>
                      <Select.Option key={2} value={'Advertiser contacts 2'}>
                        Advertiser contacts 2
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Agency (optional)"
                    name='agency'>
                    <Select
                      onSearch={onSearch}
                      showSearch
                      placeholder={'Type to search...'}>
                      <Select.Option key={1} value={'Agency 1'}>
                        Agency 1
                      </Select.Option>
                      <Select.Option key={2} value={'Agency 2'}>
                        Agency 2
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Agency contacts (optional)"
                    name='agencycontact'>
                    <Select
                      placeholder={'Please select an Agency before adding contacts'}>
                      <Select.Option key={1} value={'Agency contacts 1'}>
                        Agency contacts 1
                      </Select.Option>
                      <Select.Option key={2} value={'Agency contacts 2'}>
                        Agency contacts 2
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Secondary Trafficker"
                    name='secondtraffker'>
                    <Select
                      onSearch={onSearch}
                      showSearch
                      placeholder={'Type to search...'}>
                      <Select.Option key={1} value={'Secondary Trafficker 1'}>
                        Secondary Trafficker 1
                      </Select.Option>
                      <Select.Option key={2} value={'Secondary Trafficker 2'}>
                        Secondary Trafficker 2
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Salesperson (optional)"
                    name='salesperson'
                    tooltip="Salesperson">
                    <Select
                      onSearch={onSearch}
                      showSearch
                      placeholder={'Type to search...'}>
                      <Select.Option key={1} value={'Salesperson 1'}>
                        Salesperson 1
                      </Select.Option>
                      <Select.Option key={2} value={'Salesperson 2'}>
                        Salesperson 2
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Secondary salesperson (optional)"
                    name='secondsalesperson'>
                    <Select
                      onSearch={onSearch}
                      showSearch
                      placeholder={'Type to search...'}>
                      <Select.Option key={1} value={'Secondary salesperson 1'}>
                        Secondary salesperson 1
                      </Select.Option>
                      <Select.Option key={2} value={'Secondary salesperson 2'}>
                        Secondary salesperson 2
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name='number'
                    label="PO number (optional)">
                    <Input />
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Drawer>
        </TabPane>
        <TabPane tab="My order" key="2"></TabPane>
        <TabPane tab="Delivering" key="3"></TabPane>
        <TabPane tab="Starting soon" key="4"></TabPane>
      </Tabs>
    </>
  )
}

export default Delivery
