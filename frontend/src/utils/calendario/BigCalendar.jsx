import React, { useState, useMemo } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import "dayjs/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";

dayjs.locale('es');

function BigCalendar({ medicView, selectedDate, setSelectedDate, components, events, onSelectEvent }) {

    const handleNavigate = (newDate, view) => {
        if (view === 'month') {
            setSelectedDate(newDate); // Actualizar el día seleccionado cuando el usuario navega por la vista mensual
        }
    };

    const localizer = dayjsLocalizer(dayjs);
    // Configurar la zona horaria local

    const formats = useMemo(() => ({
        monthHeaderFormat: 'dddd DD MMM YYYY',
        dayHeaderFormat: 'dddd DD MMM YYYY',
        dayFormat: (date, culture, localizer) => localizer.format(date, 'dddd', culture),
    }), []);

    // Objeto con mensajes personalizados en español
    const messages = {
        allDay: "Todo el día",
        previous: "Anterior",
        next: "Siguiente",
        today: "Hoy",
        month: "Mes",
        week: "Semana",
        day: "Día",
        agenda: "Agenda",
        date: "Fecha",
        time: "Hora",
        event: "Evento",
        noEventsInRange: "Sin eventos"
    };

    return (
        <div className='w-full h-full'>
            <Calendar
                localizer={localizer}
                events={events}
                views={medicView.views}
                defaultView={medicView.defaultView}
                onNavigate={handleNavigate} // Agregar el controlador de eventos para la navegación
                selectable
                onSelectSlot={(slotInfo) => setSelectedDate(slotInfo.start)} // Manejar la selección de un día en el calendario diario
                onSelectEvent={onSelectEvent} // Manejar el clic en un evento
                date={selectedDate} // Establecer el día seleccionado en el calendario diario
                formats={formats} // Formatos personalizados de fecha
                messages={messages} // Mensajes personalizados en español
                components={components} // Pasar la configuración de componentes, incluida la barra de herramientas nula
                culture='es'
            />
        </div>
    );
}

export default BigCalendar;
