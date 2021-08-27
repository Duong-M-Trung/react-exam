import React from 'react'
import 'antd/dist/antd.css';
import {
  Checkbox, Input, PageHeader,
  Row, Col, Button, Form, Select, Layout, Switch
} from 'antd';
import {
  Link
} from 'react-router-dom';
import {
  CheckOutlined,
  EditOutlined,
  MoreOutlined,
} from '@ant-design/icons';

const { Content } = Layout;

const Lineitem = () => {
  const routes = [
    {
      breadcrumbName: 'Order',
    },
    {
      breadcrumbName: 'test',
    },
    {
      breadcrumbName: 'test_order',
    },
  ];
  return (
    <>
      <PageHeader
        title={<Row >
          <h3 style={{ margin: 0 }}> New line item</h3>
        </Row>}
        breadcrumb={{ routes, separator: ">" }}
      >
      </PageHeader>
      <Content>
        <Row style={{ borderTop: '0.5px #E0E0E0 solid', padding: '20px 30px 20px' }}>
          <Col span={3}>
            Ad type
          </Col>
          <Col span={21}>
            <h3>Display (Standard) <EditOutlined /></h3>
          </Col>
        </Row>
        <Row style={{ borderTop: '0.5px #E0E0E0 solid', padding: '20px 30px 20px' }}>
          <Col span={3}>
            Name
          </Col>
          <Col span={21}>
            <Input style={{ width: '500px' }}></Input>
          </Col>
        </Row>
        <Row style={{ borderTop: '0.5px #E0E0E0 solid', padding: '20px 30px 20px' }}>
          <Col span={3}>
            Line item type
          </Col>
          <Col span={21}>
            <Form >
              <Row>
                <Col span={3}>
                  <Form.Item label='Type' labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                    <Select>
                      <Select.Option>

                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item label='Priority' style={{ marginLeft: '5px' }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                    <Select>
                      <Select.Option>

                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={3}>
                  <Form.Item label='Priority value' style={{ marginLeft: '5px' }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
                    <Select>
                      <Select.Option>

                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <span><b>Standard:</b> For impression basic compaigns </span>
          </Col>
        </Row>
        <Row style={{ borderTop: '0.5px #E0E0E0 solid', padding: '20px 30px 20px' }}>
          <Col span={3}>
            Expected <br></br>Creative
          </Col>
          <Col span={21}>
            <Input placeholder='Add size...' style={{ width: '500px' }}></Input>
            <MoreOutlined style={{ fontSize: '20px', fontWeight: 'bold' }} />
          </Col>
        </Row>
        <Row style={{ borderTop: '0.5px #E0E0E0 solid', padding: '20px 30px 20px' }}>
          <Col span={3}>
            Additional settings
          </Col>
          <Col span={21}>
            <Form style={{ width: '500px' }} layout='vertical'>
              <Form.Item label='Labels (optional)' tooltip="Labels">
                <Select placeholder='Type to search' showSearch>
                  <Select.Option>

                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label='Competitive exclusion settings (optional)' tooltip="Competitive exclusion settings">
                <Switch defaultChecked />
                <span style={{ marginLeft: '10px' }} ><b>Same advertiser expection</b></span>
              </Form.Item>
              <Form.Item label='Comments (optional)'>
                <Input style={{ width: '500px' }}></Input>
              </Form.Item>
              <Form.Item label='Custom field (optional)' tooltip="Custom field">
                <Select placeholder='Type to search' showSearch>
                  <Select.Option>

                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label='Open Measurement viewablity-partner (optional)' >
                <Select placeholder='Type to search' showSearch>
                  <Select.Option>

                  </Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Row style={{ borderTop: '0.5px #E0E0E0 solid', padding: '20px 30px 20px' }}>
          <Col span={3}>
            Adjust Delivery
          </Col>
          <Col span={21}>
            <Form style={{ width: '500px' }} layout='vertical'>
              <Form.Item label='Delivery impression (optional)' tooltip="Delivery impression" initialValue={1}>
                <Select placeholder='Type to search' showSearch >
                  <Select.Option key={1} value={1}>
                    Evenly
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label='Display creatives (optional)' tooltip="Display creatives" initialValue={1}>
                <Select placeholder='Type to search' showSearch>
                  <Select.Option key={1} value={1}>
                    One or more
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label='Rotate creatives (optional)' tooltip="Rotate creatives" initialValue={1}>
                <Select placeholder='Type to search' showSearch>
                  <Select.Option key={1} value={1}>
                    Optimized
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label='Child-directed Ads (optional)' tooltip="Child-directed Ads" initialValue={1}>
                <Select placeholder='Type to search' showSearch>
                  <Select.Option key={1} value={1}>
                    Don't serve on child-directed request
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label='Day and time (optional)' tooltip="Day and time">
                <Checkbox><b>Set days and times</b></Checkbox>
              </Form.Item>
              <Form.Item label='Frequency (optional)' tooltip="Frequency">
                <Checkbox><b>Set per user frequency cap</b></Checkbox>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Row style={{ borderTop: '0.5px #E0E0E0 solid', padding: '20px 30px 20px' }}>
          <Col span={3}>
            Add targeting
          </Col>
          <Col span={21} style={{ display: 'inline' }}>
            <Form style={{ width: '500px', display: 'inline' }} layout='vertical'>
              <Input style={{ width: '400px' }} placeholder='Add targeting preset (optional)'></Input>
              <Button type='link' style={{ fontWeight: 'bold' }}>Save as preset</Button>
            </Form>
          </Col>
        </Row>
        <Row style={{ padding: '0 30px 0' }}>
          <Col span={3}>
          </Col>
          <Col span={16} style={{ padding: '20px 15px 20px', boxShadow: '0 0 5px #B6B6B6' }}>
            <Row style={{ padding: '10px 0 10px', borderBottom: '0.5px solid #E0E0E0' }}>
              <Col span={8} style={{ fontWeight: 'bold' }}>
                Inventory
              </Col>
              <Col span={16}>
                <Select bordered={false} style={{ width: '100%' }} defaultValue={'Run of network'}>
                  <Select.Option key={1} value={1}>
                    Run of network
                  </Select.Option>
                </Select>
              </Col>
            </Row>
            <Row style={{ padding: '10px 0 10px', borderBottom: '0.5px solid #E0E0E0' }}>
              <Col span={8} style={{ fontWeight: 'bold' }}>
                Custom targeting
              </Col>
              <Col span={16}>
                <Select bordered={false} style={{ width: '100%' }} defaultValue={'All custom value'}>
                  <Select.Option key={1} value={1}>
                    All custom value
                  </Select.Option>
                </Select>
              </Col>
            </Row>
            <Row style={{ padding: '10px 0 10px', borderBottom: '0.5px solid #E0E0E0' }}>
              <Col span={8} style={{ fontWeight: 'bold' }}>
                Geography
              </Col>
              <Col span={16}>
                <Select bordered={false} style={{ width: '100%' }} defaultValue={'All Geographies'}>
                  <Select.Option key={1} value={1}>
                    All Geographies
                  </Select.Option>
                </Select>
              </Col>
            </Row>
            <Row style={{ padding: '10px 0 10px', borderBottom: '0.5px solid #E0E0E0' }}>
              <Col span={8} style={{ fontWeight: 'bold' }}>
                Mobile application
              </Col>
              <Col span={16}>
                <Select bordered={false} style={{ width: '100%' }} defaultValue={'All Mobile application'}>
                  <Select.Option key={1} value={1} >
                    All Mobile application
                  </Select.Option>
                </Select>
              </Col>
            </Row>
            <Row style={{ padding: '10px 0 10px', marginBottom: '70px', borderBottom: '0.5px solid #E0E0E0' }}>
              <Col span={8} style={{ fontWeight: 'bold' }}>
                Device catagory
              </Col>
              <Col span={16}>
                <Select bordered={false} style={{ width: '100%' }} defaultValue={'All Device catagory'}>
                  <Select.Option key={1} value={1}>
                    All Device catagory
                  </Select.Option>
                </Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ borderTop: '0.5px solid #E0E0E0', padding: '20px 5px 20px', marginTop: '10px', position: 'fixed', bottom: 0, width: '100%', background: 'white' }}>
          <Button type='primary'>
            Save
          </Button>
          <Button type='link'>
            <Link to="/test_order" >Cancel</Link>
          </Button>
        </Row>
      </Content>
    </>
  )
}

export default Lineitem
