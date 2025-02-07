import { Tooltip as ReactTooltip } from "react-tooltip";
import "./index.scss";
import {Color, Size} from "../../lib/models.ts";

interface TooltipProps {
  color?: Color
  size?:  Size
  id: string
}
const Tooltip = (props : TooltipProps) => {
  const { color = 'standard', size = '', id } = props;

  return (
    <ReactTooltip id={id} className={`tooltip ${color} ${size ? size : ''}`} classNameArrow={'arrow'}/>
  );
};

export default Tooltip;