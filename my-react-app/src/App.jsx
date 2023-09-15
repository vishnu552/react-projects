import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const removeTour = (id) => {
    const newTour = tour.filter((t) => t.id != id);
    setTour(newTour);
  };
  const fetchTour = async () => {
    setIsLoading(true);
    try {
      const tour = await axios(url);
      setTour(tour.data);
    } catch (error) {
      console.log("Error", error.response);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTour();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tour.length === 0) {
    return (
      <main>
        <div className="title">
          <h3>No Tour Left</h3>
          <button className="btn" onClick={fetchTour}>
            Reload
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tour} removeTour={removeTour} />
    </main>
  );
}
export default App;
