export interface Event {
  title: string;
  startDate: string;   // "YYYY-MM-DD"
  endDate: string;     
  location: string;
  category?: string;
  status: "upcoming" | "ongoing" | "past";
}

// EVENT LIST - Add a new event
export const events: Event[] = [
  {
    title: "Jubileo ng Pamilya",
    startDate: "2025-12-01",
    endDate: "2025-12-31",
    location: "Diocesan Shrine and Parish of Immaculate Conception, 272 General Luna St., Concepcion",
    category: "Jubilee",
    status: "past",
  },
  {
    title: "Jubileo ng Pagpapatotoo",
    startDate: "2025-11-01",
    endDate: "2025-11-30",
    location: "KADSA",
    category: "Jubilee",
    status: "past",
  },
  {
    title: "Jubileo ng Pamamanata",
    startDate: "2025-10-01",
    endDate: "2025-10-31",
    location: "San Roque Cathedral Parish, A. Mabini cor. 10th Ave. St., Caloocan",
    category: "Jubilee",
    status: "past",
  },
];
