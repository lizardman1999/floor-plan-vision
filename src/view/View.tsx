import React from "react";
import styled from "styled-components";
import { getFloorPlan } from "../getFloorPlan";
import { getImage } from "../getImage";
import { Coords } from "../apiServices/getViewDetails";

const Wrapper = styled.div`
  width: 700px;
`;

const RoomView = styled.img`
  max-width: 700px;
  max-height: 700px;
`;

const FloorPlanWrapper = styled.div`
  position: relative;
  margin-left: 20px;
  display: flex;
  align-items: flex-end;
  display: inline-block;
`;

const FloorPlan = styled.img`
  max-width: 200px;
  max-height: 200px;
`;

type FloorPlanDotProps = {
  coords: Coords;
};

const FloorPlanDot = styled.div`
  background-color: blue;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  position: absolute;
  bottom: ${(props: FloorPlanDotProps) => `${props.coords.y}%`};
  left: ${(props: FloorPlanDotProps) => `${props.coords.x}%`};
`;

type ViewProps = {
  coords: Coords;
  apartmentId: number;
};

export function View(props: ViewProps) {
  return (
    <Wrapper>
      <RoomView
        src={getImage(props.apartmentId, props.coords.viewIndex)}
        alt="apartment view"
      />
      <FloorPlanWrapper>
        <FloorPlanDot coords={props.coords} />
        <FloorPlan src={getFloorPlan(props.apartmentId)} alt="floor plan" />
      </FloorPlanWrapper>
    </Wrapper>
  );
}
