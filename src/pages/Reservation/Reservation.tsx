import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import ReservationStyled from "./Reservation.styled";

const dummyReservations = [
  {
    id: 1,
    name: "Carlos Juárez",
    date: new Date("2025-10-30T14:30:00"),
    people: 2,
  },
  {
    id: 2,
    name: "María López",
    date: new Date("2025-11-02T18:00:00"),
    people: 4,
  },
  {
    id: 3,
    name: "Carlos Juárez",
    date: new Date("2025-11-02T12:00:00"),
    people: 1,
  },
];

const { Container, Title, StyledCalendar, ReservationList, ReservationCard, Info, Name, DateText, Badge } = ReservationStyled;

const MyReservationsPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const filteredReservations = dummyReservations.filter(
    (r) =>
      selectedDate &&
      r.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <Container id="reservations">
      <Title>Mis Reservas</Title>

      <StyledCalendar
        onChange={(date) => setSelectedDate(date as Date)}
        value={selectedDate}
      />

      <ReservationList>
        {filteredReservations.length > 0 ? (
          filteredReservations.map((r) => (
            <ReservationCard key={r.id}>
              <Info>
                <Name>{r.name}</Name>
                <DateText>
                  {r.date.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </DateText>
              </Info>
              <Badge>{r.people} personas</Badge>
            </ReservationCard>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "1rem", color: "#666" }}>
            No hay reservas para este día.
          </p>
        )}
      </ReservationList>
    </Container>
  );
};

export default MyReservationsPage;
