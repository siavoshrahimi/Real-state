import React ,{useEffect,useState}from "react";
import {useSelector,useDispatch} from "react-redux";
import * as actionCreator from '../../store/Action';
import Slider from '../../component/UI/Slider/Slider';
import Spinner from '../../component/UI/Spinner/Spinner';
import Search from '../Search/Search';
import {NavigateNext,NavigateBefore} from '@material-ui/icons';
import './Home.scss';
import Category from "../../component/Category/Category";
import Properties from "../../component/Properties/Properties";

const Home = props =>{
    const dispatch = useDispatch();
    // slider data
    const sliderData =useSelector(state => state.slider);
    const {slider , sliderPage} = sliderData;

    // category data
    const categoryData = useSelector(state => state.categories);
    const {categories , isLoading} = categoryData;

    //property data
    const propertyData = useSelector(state => state.property.properties);
    const isSearched = useSelector(state => state.property.isSearched);
    const filteredData = useSelector(state => state.property.filterData);
    //filter data
    const [filter , setFilter] = useState({
        city:"All",
        room:"any"
    });
    const [ priceAreaRangeVal, setPriceAreaRangeVal] = useState({
        price:{min:550000,max:1000000},
        area:{min:100,max:700}
    });

useEffect(() =>{
        dispatch(actionCreator.fetchSliderData());
        dispatch(actionCreator.fetchCategoryData());
        dispatch(actionCreator.fetchPropertyData())
    },[]);

    //set state
    const filerChange = event =>{
        const { target: { name, value } } = event;
            setFilter({
            ...filter,
            [name] : value
        })


    }

     const handlerFilterData = event =>{
        event.preventDefault();

        const filteredData = propertyData.filter(property => {
           return (
               (property.city === filter.city || filter.city === "All") &&
               (property.bedrooms == filter.room ||filter.room === 'any') &&
                property.price > priceAreaRangeVal.price.min &&
                property.price < priceAreaRangeVal.price.max &&
                property.sqm >   priceAreaRangeVal.area.min &&
                property.sqm < priceAreaRangeVal.area.max
           )
        })
         dispatch(actionCreator.filteringData(filteredData));
     };
    //slider section
    let sliderTag = [];
    if(slider){
        sliderTag = (slider.map(sl =><Slider show={sl.index === sliderPage} key={sl._id} sliderData={sl}/>))
    }
    //category section
    let category = isLoading ? <Spinner/> : <p>there is no category...</p>;
    if(categories){
        category = categories.map(data => <Category key={data._id} data={data}/>);
    }


    return(
        <div className='home'>
            <div className="carousel-wrapper">
                {
                    (sliderPage) ?
                    <span className='navigate navigate-before' onClick={() =>dispatch(actionCreator.previousSlider())}>
                        <NavigateBefore/>
                    </span>
                        :null
                }
                {
                    (slider && sliderPage !== slider.length-1)&&
                    <span className='navigate navigate-next' onClick={() =>dispatch(actionCreator.nextSlider())}>
                        <NavigateNext/>
                    </span>
                }
                <div className="carousel"
                     style={{
                         "width":`${(slider) && slider.length*100}%`,
                         "transform":`translateX(-${(slider) && slider[sliderPage].index*(100/slider.length)}%)`
                     }}
                >
                    {sliderTag}
                </div>
            </div>
            <div className="container">
                <Search data={propertyData}
                        filterChanged={filerChange}
                        filterData={handlerFilterData}
                        setPriceAreaRangeVal={setPriceAreaRangeVal}
                        priceAreaRangeVal={priceAreaRangeVal}
                />
                <Properties
                    data={isSearched? filteredData: propertyData}
                />
                <div className="categories-wrapper">
                    <h1>Popular Categories</h1>
                    <div className="category-responsive">
                        {category}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;