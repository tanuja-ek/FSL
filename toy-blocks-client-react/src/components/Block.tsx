import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../constants/colors";
import Status from "./Status";
import { Node as NodeType } from "../types/Node";
import { Block } from "../types/Block";

type Props = {
  blocks :[Block];
  online: boolean;
};



const Blocks: React.FC<Props> = ({blocks, online}) => {
  return (
     <div>
        {blocks.map((block) => (
        <div className="block">
            <p className="blockID">{'00' +  block.id}</p>
            <p className="blockDesc">{block.description}</p>
          </div> 
        )) }
     </div>
  );
};

export default Blocks;
