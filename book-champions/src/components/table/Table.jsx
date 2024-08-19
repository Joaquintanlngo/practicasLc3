const Table = ({ list }) => {
    const listMapped = list.map(income => (
        <tr>
            <td>{income.brand}</td>
            <td> ${income.income}</td>
        </tr>
    ))

    const listProm = ((list.reduce((acum, currentElement) => acum + currentElement.income, 0)) / list.length).toFixed(2)

    return (
        <>
        <table>

            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Ingreso Neto</th>
                </tr>


            </thead>

            <tbody>
                {listMapped}
            </tbody>

        </table>
        <p>Promedio: ${listProm}</p>
        </>
    )


}

export default Table