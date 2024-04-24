import React from "react";
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { es } from 'date-fns/locale'; // Importa el locale de español desde date-fns
import { DayPicker } from "react-day-picker";

 

function Datepiker({ value, onChange, selectedDate }) {

    
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const formattedDate = value ? format(value, "PPP", { locale: es }) : "";

 
    return (
      <div className="xl:w-full w-[328px] h-[50px]">
        <Popover placement="bottom">
          <PopoverHandler>
            <Input
              className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-primarygrey"
              onChange={() => null}
              value={formattedDate}
            />
          </PopoverHandler>
          <PopoverContent>
            <DayPicker
              mode="single"
              selected={value}
              onSelect={onChange}
              showOutsideDays
              locale={es}
              className="border-0 w-full h-full rounded-[5px] border-black p-5" // Modifica las dimensiones del contenedor
              // Resto de tu configuración de DayPicker
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }

export default Datepiker;