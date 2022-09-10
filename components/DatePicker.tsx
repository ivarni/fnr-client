const DatePicker = (props: {
    onChange: (value: string) => void
}) => {

    const onChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) = (e) => {
        props.onChange(e.currentTarget.value)
    }

    return (
        <label>
            Velg dato:&nbsp;
            <input
                type="date"
                defaultValue="1980-05-09"
                onChange={onChange}
            />
        </label>
    )
}

export default DatePicker;