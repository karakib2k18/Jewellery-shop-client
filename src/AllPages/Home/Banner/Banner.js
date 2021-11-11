import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Container from "@mui/material/Container";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: "https://i.ibb.co/BVZdGsX/banner1.jpg",
  },
  {
    imgPath: "https://i.ibb.co/0JTw758/banner3.jpg",
  },
  {
    imgPath: "https://i.ibb.co/f4CPqYM/banner-2.jpg",
  },
  {
    imgPath: "https://www.anjalijewellers.in/assets/images/bridal.jpg",
  },
];

function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {

    setActiveStep(step);
    
  };

  return (
    <Container sx={{ border: 0 }} maxWidth="xl">
      <Box
        sx={{
          boxShadow: 3,
          bgcolor: "background.paper",
          m: 1,
          p: 1,
        }}
      >
        {" "}
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.imgPath}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 555,
                    display: "block",
                    // maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                    
                  }}
                  src={step.imgPath}
                
                />
              ) : null}
            </div>
          ))}
        
        </AutoPlaySwipeableViews>
      </Box>
    </Container>
  );
}

export default Banner;
