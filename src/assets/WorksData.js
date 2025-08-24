import myfleeapp from "/myFleeApp.png";
import relaxify from "/relaxify.png";
import farmtracker from "/farmTracker.png";

// ✅ Use Vite's BASE_URL so paths work locally & on GitHub Pages
const base = import.meta.env.BASE_URL;

const AllProjects = [
  {
    title: "NetworQ",
    description: "Android app — Envisioning a future of Networking",
    hasAnimation: true,
    framePath: `${base}animations/networq/frame_`, // ✅ BASE_URL aware
    hoverColor: "#FFD700",
    borderColor: "#FFFFFF",
  },
  {
    title: "MyFleeApp",
    description: "Android app — A marketplace for students",
    hasAnimation: false,
    thumbnail: myfleeapp,
    hoverColor: "#00BFFF",
    borderColor: "#00FFFF",
  },
  {
    title: "Relaxify",
    description: "Android app — Calmness never got easier",
    hasAnimation: false,
    thumbnail: relaxify,
    hoverColor: "#061550",
    borderColor: "#061550",
  },
  {
    title: "FarmTracker",
    description: "Android app - Farm Management at the palm of your hands",
    hasAnimation: false,
    thumbnail: farmtracker,
    hoverColor: "#228B22",
    borderColor: "#32CD32",
  }
];

export default AllProjects;
