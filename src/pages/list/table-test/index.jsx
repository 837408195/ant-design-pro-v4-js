import React, {useRef} from "react";
import {Button} from 'antd';
import {PageContainer} from "@ant-design/pro-layout";
import ProTable from "@ant-design/pro-table";
import {queryRule} from "./service";

const TableTest = () => {
  const actionRef = useRef();
  const columns = [{
    title: '测试名称',
    dataIndex: 'name',
  }, {
    title: '描述',
    dataIndex: 'desc',
  }, {
    title: '服务调用次数',
    dataIndex: 'callNo',
  }, {
    title: '状态',
    dataIndex: 'status',
  }, {
    title: '上次调用时间',
    dataIndex: 'name',
  },]
  return (
    <PageContainer>
      <ProTable
        headerTitle="查询表格"
        actionRef={actionRef}
        rowKey="key"
        search={{labelWidth: 120}}
        toolBarRender={() => [
          <Button type="primary" key="1">新建</Button>
        ]}
        request={(params, sorter, filter) => queryRule({...params, sorter, filter})}
        columns={columns}>
      </ProTable>
    </PageContainer>
  )
}

export default TableTest
