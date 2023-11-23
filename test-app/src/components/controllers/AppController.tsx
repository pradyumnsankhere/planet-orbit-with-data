// components/controllers/AppController.tsx
import React, { useState } from "react";
import Slider from "../Slider/Slider";
import Form from "../Form/Form";
import DataModel from "../models/DataModel";
import OrbitingObjects from "../OrbitingObjects/OrbitingObjects";
import '../../App.css'
interface AppControllerProps {
  // Add any props if needed
}

const AppController: React.FC<AppControllerProps> = () => {
  const [sliderValues, setSliderValues] = useState({ min: 0, max: 100 });
  const [showView2, setShowView2] = useState(false);

  const [selectedData, setSelectedData] = useState({});
  const [formData, setFormData] = useState<DataModel>({
    personalInformation: [],
  });

  const handleSliderChange = (min: number, max: number) => {
    setSliderValues({ min, max });
  };

  const handleFormSubmit = (data: DataModel) => {
    setFormData((prevData) => {
      // Append new user information to the existing array
      return {
        ...prevData,
        personalInformation: [
          ...prevData.personalInformation,
          ...data.personalInformation,
        ],
      };
    });
    console.log("Updated Form Data:", formData);
  };

  console.log(formData, "formdata");

  const handleObjectClick = (data: object) => {
    // Show details for the clicked object

    setSelectedData(data);
  };

  return (
    <div>
      {/* <div>
        <button onClick={() => {setShowView2(!showView2)}}>{`show view ${showView2 ?1:2}`}</button>
      </div> */}
      {!showView2&&(<>
      <Slider
        min={sliderValues?.min}
        max={sliderValues?.max}
        onChange={({ min, max }: { min: number; max: number }) =>
          console.log(`min = ${min}, max = ${max}`)
        }
      />
      <Form onSubmit={handleFormSubmit} />
      
      </>)}
    {!showView2&&(  <OrbitingObjects
        selectedData={selectedData}
        data={formData}
        onObjectClick={handleObjectClick}
      />)}
    </div>
  );
};

export default AppController;
