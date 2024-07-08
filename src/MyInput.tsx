import { Input, InputProps } from 'antd'
import { useContext, useState } from 'react'
import DisabledContext from 'antd/es/config-provider/DisabledContext'

type MyInputProps = {
	value?: string
	onChange?: (value: string) => void
}

const MyInput = (props: MyInputProps) => {
	const [value, setValue] = useState('')

	const disabled = useContext(DisabledContext)
	console.log({ disabled })

	const handleChange: InputProps['onChange'] = e => {
		const nextValue = e.target.value
		setValue(nextValue)
		props.onChange?.(nextValue)
	}

	return <Input value={value} onChange={handleChange} />
}

export default MyInput
