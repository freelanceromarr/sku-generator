import React from 'react';
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Exportsku = (props) => {

    const dataset = Object.assign([], props.dataset)


    return (
        <div>
            <ExcelFile element={<button className="btn btn-danger">Export as CSV</button>}>
                <ExcelSheet data={dataset} name="Skulist">
                    <ExcelColumn label="Item Name" value="itemName" />
                    <ExcelColumn label="Attribute One" value="attributeOne" />
                    <ExcelColumn label="Attribute two" value="attributeTwo" />
                    <ExcelColumn label="Attribute Three" value="attributeThree" />
                    <ExcelColumn label="Generated SKU" value="skugente" />
                </ExcelSheet>

            </ExcelFile>
        </div>
    );
};

export default Exportsku;