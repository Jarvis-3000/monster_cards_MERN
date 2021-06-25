import React, { useState } from "react";
import PhotoshopPicker from "react-color"

// Watch the tutorial
// http://react.school/ui/colorpicker

function ColorPicker() {
  const [color, setColor] = useState("#ff0000");

  return (
    <div style={{ margin: 'auto', width: '500px' }}>
      <div style={{width:'80%',margin:'20px auto'}}>
        <PhotoshopPicker
          color={color}
          width='100%'
          onChangeComplete={color => {
            setColor(color.hex);
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: color,
          height: "300px",
          transition: "ease all .5s"
        }}
      />
    </div>
  );
}

export default ColorPicker