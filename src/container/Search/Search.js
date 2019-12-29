import React from "react";
import Input from "../../component/UI/Input/Input";
import Button from "../../component/UI/Button/Button";
import './Search.scss';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";

function Search (props) {
    let location = ['All','Singer','Machias','Bend','Ivanhoe','Lydia','Rosedale'];
    const roomNum = ['any', 1,2,3,4,5];

    const handleRangeValue = (value,...params) => {
        props.setPriceAreaRangeVal( {
            ...props.priceAreaRangeVal,
            [params]:value
        })
    }
    return(
        <div className='form-wrapper'>
            <h1>Find Your Home</h1>
            <form  className='form'>
                <Input inputType='select'
                       changed = {props.filterChanged}
                       name="city"
                       placeholder='select city'
                       options={location}>City</Input>
                <div className="second-row">
                    <div className="input-group">
                        <Input inputType='text'
                               changed = {props.filterChanged}
                               name="minPrice" plaxeholder={props.priceAreaRangeVal.price.min}
                               value={props.priceAreaRangeVal.price.min}>
                                Price(USD)
                        </Input>
                        <Input inputType='text'
                               changed = {props.filterChanged}
                               name="maxPrice" value={props.priceAreaRangeVal.price.max}> .
                        </Input>
                        <div className='separator'/>
                        <InputRange
                            maxValue={1000000}
                            minValue={550000}
                            value={props.priceAreaRangeVal.price}
                            onChange={(value)=> handleRangeValue(value,"price")} />
                    </div>
                    <div className="input-group">
                        <Input inputType='text'
                               changed ={props.filterChanged}
                               name="minArea"
                               placeholder={props.priceAreaRangeVal.area.min}
                               value={props.priceAreaRangeVal.area.min}>
                                Area(sq/m)
                        </Input>
                        <Input inputType='text'
                               changed ={props.filterChanged}
                               name="maxArea"
                               value={props.priceAreaRangeVal.area.max}> .
                        </Input>
                        <div className='separator'/>
                        <InputRange
                            maxValue={700}
                            minValue={100}
                            value={props.priceAreaRangeVal.area}
                            onChange={(value)=> handleRangeValue(value,"area")}
                             />
                    </div>
                    <Input inputType='select'
                           changed = {props.filterChanged}
                           name="room"
                           placeholder='select room'
                           options={roomNum}>Room
                    </Input>
                    <Button clicked={props.filterData} btnType='btn-primary'>Search</Button>
                </div>

            </form>
        </div>
    )
}

export default Search;