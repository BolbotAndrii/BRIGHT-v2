export const CheckBox = ( { id, name, handler, label, check }: any ) => {
    return (
        <>
            <p>
                {check === 'on'
                    ?
                    <input
                        type="checkbox"
                        id={id}
                        name={name}
                        defaultChecked
                        onChange={handler}
                    />
                    :
                    <input
                        type="checkbox"
                        id={id}
                        name={name}
                        onChange={handler}
                    />
                }

                <label htmlFor={id}>{label}</label>
            </p>
        </>
    )
}