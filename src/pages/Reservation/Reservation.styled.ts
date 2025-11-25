import Calendar from "react-calendar";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  background: #f9f9f9;
  min-height: 100vh;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  color: #333;
`;

const StyledCalendar = styled(Calendar)`
  border: none;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background: white;

  .react-calendar__tile--active {
    background: #0077ff;
    color: white;
    border-radius: 10px;
  }
`;

const ReservationList = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;
`;

const ReservationCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
  color: #333;
`;

const DateText = styled.span`
  color: #666;
`;

const Badge = styled.span`
  background: #0077ff;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
  font-size: 0.9rem;
`;

const ReservationStyled = {
    Container,
    Title,
    StyledCalendar,
    ReservationList,
    ReservationCard,
    Info,
    Name,
    DateText,
    Badge
};
export default ReservationStyled;
