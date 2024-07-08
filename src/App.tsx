import { Button, Divider, Form, Input } from 'antd'
import { useState } from 'react'
import MyInput from './MyInput'

const App = () => {
	const [formValues, setFormValues] = useState<any>({})

	return (
		<div style={{ display: 'grid', height: '100vh', placeItems: 'center' }}>
			<div>
				<Form style={{ width: 350 }} onFinish={values => setFormValues(values)}>
					<Form.Item
						name="username"
						label="姓名"
						rules={[{ required: true, message: '请输入姓名' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="myInputUsername"
						label="自定义组件姓名"
						rules={[{ required: true, message: '请输入自定义组件姓名' }]}
					>
						<MyInput />
					</Form.Item>
					<Button type="primary" htmlType="submit">
						提交
					</Button>
				</Form>
				<Divider />
				提交后的值：{JSON.stringify(formValues)}
			</div>
		</div>
	)
}

export default App
