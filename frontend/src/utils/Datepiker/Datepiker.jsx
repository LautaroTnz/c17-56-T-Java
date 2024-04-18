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

 

function Datepiker() {
    const [date, setDate] = React.useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const formattedDate = date ? format(date, "PPP", { locale: es }) : ""; // Formatea la fecha en español

 
    return (
      <div className="xl:w-full w-[328px] h-[50px]">
        <Popover placement="bottom">
          <PopoverHandler>
            <Input
              className="xl:w-[488.14px] w-[328px] h-[50px] rounded-[5px] border border-black"
              onChange={() => null}
              value={formattedDate}
            />
          </PopoverHandler>
          <PopoverContent>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={handleDateChange}
              showOutsideDays
              locale={es}
              className="border-0 h-full rounded-[5px] border border-black"
              // Resto de tu configuración de DayPicker
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }

export default Datepiker;