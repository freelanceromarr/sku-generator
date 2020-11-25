import React, { useState } from 'react';
import './Main.css';
import { useForm } from 'react-hook-form';
import Exportsku from '../Exportsku/Exportsku';

const Main = () => {
  const { register, handleSubmit } = useForm()
  const [count, setcount] = useState([
    '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ])

  const [separator, setseparator] = useState([
    '-', '/', '.'
  ])
  const [skuformdata, setskuformdata] = useState([])
  const [skudata, setskudata] = useState({
    itemName: "",
    attributeOne: "",
    attributeTwo: "",
    attributeThree: "",
    separate: "/",
    counting: "3"
  })

  const separatorHandler = (e) => {

    setskudata({ separate: e.target.value })
  }


  const countingHandler = (e) => {
    setskudata({ counting: e.target.value })
  }

  const onChangeHandlers = (e) => {

    setskudata({
      ...skudata,
      [e.target.name]: e.target.value

    })
  }



  const removeHandles = (index) => {
    const removedata = Object.assign([], skuformdata)
    removedata.splice(index, 1);
    setskuformdata(removedata)
  }

  let skugenit = skudata.itemName.slice(0, parseInt(skudata.counting));
  let skuatt = skudata.separate + skudata.attributeOne.slice(0, parseInt(skudata.counting));
  let skuatt2 = skudata.separate + skudata.attributeTwo.slice(0, parseInt(skudata.counting));
  let skuatt3 = skudata.separate + skudata.attributeThree.slice(0, parseInt(skudata.counting));

  var arraysku = [];
  var skuget = { skugente: skugenit + skuatt + skuatt2 + skuatt3 };

  const dataset = Object.assign(skudata, skuget);

  const onSubmitHandlerswithretain = () => {
    setskuformdata([...skuformdata, skudata]);
  }
  const onSubmitHandlers = () => {

    setskuformdata([...skuformdata, skudata]);

    setskudata({
      id: new Date().getTime(),
      itemName: "",
      attributeOne: "",
      attributeTwo: "",
      attributeThree: "",
      separate: "/",
      counting: "3"
    })

  }



  return (
    <div>

      <div className="jumbotron jumbotron-fluid">
        <div className="header-area py-5">
          <h1 class="header-text text-center">Online <strong>SKU Generator</strong> for Inventory Management</h1>
          <p class="header-desc text-center">SKU generator helps to keep item naming consistent, clear, and easy to remember, <br /> even if you have long list of items in your inventory</p>
        </div>

      </div>
      <div className="container sku-area">
        <div className="row shadow-sm border p-4 bg-white">
          <div className="col-12 col-lg-4 form-area">

            <form>
              <div className="row ">
                <div className="col col-lg-6 py-3">
                  <div className="my-2">Character Count</div>
                  <select ref={register({ required: true })} onChange={(e) => { onChangeHandlers(e) }} name="counting" value={skudata.counting} className="px-4 custom-select py-1">
                    {
                      count.map((op, index) =>
                        <option>{op}</option>
                      )
                    }
                  </select>

                </div>
                <div className="col col-lg-6 py-3">
                  <div className="my-2">Seperator Sign: </div>
                  <select ref={register({ required: true })} onChange={(e) => { onChangeHandlers(e) }} name="separate" value={skudata.separate} className="px-4 custom-select py-1">
                    {
                      separator.map((sp, index) =>
                        <option>{sp}</option>
                      )
                    }
                  </select>
                </div>
              </div>
              <div className="form-group">
                <input value={skudata.itemName} ref={register({ required: true })} onChange={(e) => { onChangeHandlers(e) }} name="itemName" type="text" className="form-control" placeholder="Ex: Shoes" />
              </div>

              <div className="form-group">
                <input value={skudata.attributeOne} ref={register({ required: true })} onChange={(e) => { onChangeHandlers(e) }} type="text" className="form-control" name="attributeOne" placeholder="Ex: US-44" />
              </div>

              <div className="form-group">
                <input value={skudata.attributeTwo} ref={register({ required: true })} onChange={(e) => { onChangeHandlers(e) }} type="text" className="form-control" name="attributeTwo" placeholder="Ex: Leather" />
              </div>

              <div className="form-group">
                <input value={skudata.attributeThree} ref={register({ required: true })} onChange={(e) => { onChangeHandlers(e) }} type="text" className="form-control" name="attributeThree" placeholder="Ex: Black" />
              </div>

              <input onClick={handleSubmit(onSubmitHandlers)} type="submit" value="Add" className="btn btn-danger m-1" />
              <button onClick={handleSubmit(onSubmitHandlerswithretain)} className="btn btn-danger m-1">Add {`&`} Retain</button>
            </form>
          </div>
          <div className="col-12 col-lg-8 mytable">
            <div className=" border">
              <div>
                <table className="table ">
                  <tr>
                    <td className="text-left">Total Count: {skuformdata.length}</td>
                    <td className="text-right"> <Exportsku dataset={skuformdata} skugenerator={arraysku}></Exportsku> </td>
                  </tr>
                </table>
              </div>
              <div className="sheet-table-section border">
                <table className="table table-striped table-responsive-sm">
                  <thead>
                    <tr >
                      <th >Item Name</th>
                      <th>Attribute 1</th>
                      <th>Attribute 2</th>
                      <th>Attribute 3</th>
                      <th>Generated SKU</th>

                    </tr>
                  </thead>
                  <tbody>
                    {skuformdata.length < 1
                      ? <tr>
                        <td colSpan="5" className="py-5 text-center">
                          Add the item information in the left pane and generate sku
                        </td>
                      </tr> : skuformdata.map((skusingledate, index) =>
                        <tr>
                          <td>{skusingledate.itemName}</td>
                          <td>{skusingledate.attributeOne}</td>
                          <td>{skusingledate.attributeTwo}</td>
                          <td>{skusingledate.attributeThree}</td>
                          <td>{skusingledate.skugente}
                          </td>
                          <td><span style={{ cursor: 'pointer', color: 'red' }} onClick={() => { removeHandles(index) }}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </span></td>
                        </tr>
                      )
                    }

                  </tbody>
                </table>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;