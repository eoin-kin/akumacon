import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button, Spinner } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import Bottom from "../Components/Bottom";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [reservationStatus, setReservationStatus] = useState("loading");
  const [reservationData, setReservationData] = useState(null);
  
  const reservationId = location.state?.reservationId;

  useEffect(() => {
    if (!reservationId) {
      navigate("/");
      return;
    }

    // Check reservation status
    const checkReservation = async () => {
      try {
        const response = await fetch(
          `/.netlify/functions/order-status?reservationId=${reservationId}`
        );
        
        if (response.ok) {
          const data = await response.json();
          setReservationData(data);
          setReservationStatus("success");
        } else {
          setReservationStatus("pending");
        }
      } catch (error) {
        console.error("Error checking reservation:", error);
        setReservationStatus("error");
      }
    };

    // Check immediately, then every 3 seconds for up to 30 seconds
    checkReservation();
    let attempts = 0;
    const maxAttempts = 10;
    
    const interval = setInterval(() => {
      attempts++;
      if (attempts >= maxAttempts) {
        clearInterval(interval);
        if (reservationStatus === "loading") {
          setReservationStatus("pending");
        }
        return;
      }
      checkReservation();
    }, 3000);

    return () => clearInterval(interval);
  }, [reservationId, navigate]);

  return (
    <>
      <Navigation />
      <br />
      <Container className="px-4">
        <div className="shadow-lg p-4 rounded-5" 
             style={{ backgroundImage: "url('/skyline.png')", backgroundSize: "cover" }}>
          
          <Card className="mx-auto" style={{ maxWidth: "600px", backgroundColor: "rgba(255,255,255,0.95)" }}>
            <Card.Body className="text-center p-5">
              {reservationStatus === "loading" && (
                <>
                  <Spinner animation="border" variant="primary" className="mb-3" />
                  <h2 className="text-primary mb-3">Processing Your Order</h2>
                  <p>Please wait while we confirm your payment and generate your tickets...</p>
                </>
              )}

              {reservationStatus === "success" && (
                <>
                  <div className="text-success mb-3">
                    <svg width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    </svg>
                  </div>
                  <h2 className="text-success mb-3">Payment Successful!</h2>
                  <p className="mb-4">
                    Your tickets have been generated and sent to your email. 
                    Your reservation ID is: <strong>{reservationId}</strong>
                  </p>
                  
                  {reservationData?.downloadUrls?.length > 0 && (
                    <div className="mb-4">
                      <h5>Download Your Tickets:</h5>
                      {reservationData.downloadUrls.map((url, index) => (
                        <a 
                          key={index}
                          href={url} 
                          className="btn btn-outline-primary me-2 mb-2"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Download Ticket {index + 1}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}

              {reservationStatus === "pending" && (
                <>
                  <div className="text-warning mb-3">
                    <svg width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                    </svg>
                  </div>
                  <h2 className="text-warning mb-3">Payment Processing</h2>
                  <p className="mb-4">
                    Your payment is being processed. You should receive your tickets via email shortly.
                    Your reservation ID is: <strong>{reservationId}</strong>
                  </p>
                  <p className="small text-muted">
                    If you don't receive your tickets within 10 minutes, please contact support.
                  </p>
                </>
              )}

              {reservationStatus === "error" && (
                <>
                  <div className="text-danger mb-3">
                    <svg width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                  <h2 className="text-danger mb-3">Processing Issue</h2>
                  <p className="mb-4">
                    There was an issue processing your order. Please contact support with your reservation ID: <strong>{reservationId}</strong>
                  </p>
                </>
              )}

              <div className="mt-4">
                <Button 
                  variant="primary" 
                  onClick={() => navigate("/")}
                  className="me-3"
                >
                  Return Home
                </Button>
                <Button 
                  variant="outline-primary" 
                  onClick={() => navigate("/more")}
                >
                  Event Info
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <br />
      <Bottom />
    </>
  );
};

export default Success;